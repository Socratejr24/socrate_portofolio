import { Component, inject, signal, HostListener } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService, Theme } from '../../../core/services/theme.service';

interface ThemeOption {
  value: Theme;
  icon: string;
  labelKey: string;
}

@Component({
  selector: 'app-theme-switcher',
  imports: [NgIcon, TranslatePipe],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css',
})
export class ThemeSwitcher {
  themeService = inject(ThemeService);
  isOpen = signal(false);

  themes: ThemeOption[] = [
    { value: 'light', icon: 'lucideSun', labelKey: 'THEME.LIGHT' },
    { value: 'dark', icon: 'lucideMoon', labelKey: 'THEME.DARK' },
    { value: 'aqua', icon: 'lucideDroplet', labelKey: 'THEME.AQUA' },
    { value: 'retro', icon: 'lucidePalette', labelKey: 'THEME.RETRO' },
  ];

  toggle(): void {
    this.isOpen.update((v) => !v);
  }

  select(theme: Theme): void {
    this.themeService.setTheme(theme);
    this.isOpen.set(false);
  }

  getCurrentIcon(): string {
    const current = this.themeService.currentTheme();
    return this.themes.find((t) => t.value === current)?.icon ?? 'lucidePalette';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-theme-switcher')) {
      this.isOpen.set(false);
    }
  }
}