import {
  Component,
  inject,
  signal,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService, Theme } from '../../../core/services/theme.service';

@Component({
  selector: 'app-floating-buttons',
  imports: [NgIcon, TranslatePipe],
  templateUrl: './floating-buttons.html',
  styleUrl: './floating-buttons.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingButtons {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  currentLang = this.languageService.currentLang;
  currentTheme = this.themeService.currentTheme;

  isVisible = signal(false);
  isThemeMenuOpen = signal(false);

  themes: { value: Theme; icon: string; labelKey: string }[] = [
    { value: 'light', icon: 'lucideSun', labelKey: 'THEME.LIGHT' },
    { value: 'dark', icon: 'lucideMoon', labelKey: 'THEME.DARK' },
    { value: 'aqua', icon: 'lucideDroplet', labelKey: 'THEME.AQUA' },
    { value: 'retro', icon: 'lucidePalette', labelKey: 'THEME.RETRO' },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleLang(): void {
    this.languageService.toggleLang();
  }

  toggleThemeMenu(): void {
    this.isThemeMenuOpen.update((v) => !v);
  }

  selectTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
    this.isThemeMenuOpen.set(false);
  }

  getCurrentThemeIcon(): string {
    const current = this.currentTheme();
    return this.themes.find((t) => t.value === current)?.icon ?? 'lucidePalette';
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible.set(window.scrollY > 300);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('app-floating-buttons')) {
      this.isThemeMenuOpen.set(false);
    }
  }
}