import { Component, inject, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { LangSwitcher } from '../lang-switcher/lang-switcher';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, TranslatePipe, ThemeSwitcher, LangSwitcher],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  isMobileMenuOpen = signal(false);
  isHidden = signal(false);

  private lastScrollY = 0;
  private readonly SCROLL_THRESHOLD = 100;

  navItems = [
    { anchor: 'home', labelKey: 'NAV.HOME' },
    { anchor: 'stack', labelKey: 'NAV.STACK' },
    { anchor: 'career', labelKey: 'NAV.CAREER' },
    { anchor: 'education', labelKey: 'NAV.EDUCATION' },
    { anchor: 'projects', labelKey: 'NAV.PROJECTS' },
    { anchor: 'contact', labelKey: 'NAV.CONTACT' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentScrollY = window.scrollY;

    // En haut de page → toujours visible
    if (currentScrollY < this.SCROLL_THRESHOLD) {
      this.isHidden.set(false);
      this.lastScrollY = currentScrollY;
      return;
    }

    // On descend → cacher
    if (currentScrollY > this.lastScrollY) {
      this.isHidden.set(true);
    } else {
      // On monte → montrer
      this.isHidden.set(false);
    }

    this.lastScrollY = currentScrollY;
  }
}