import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private readonly STORAGE_KEY = 'portfolio-lang';
  private readonly DEFAULT_LANG: Lang = 'fr';

  currentLang = signal<Lang>(this.getInitialLang());

  init(): void {
    const lang = this.currentLang();
    this.translate.setFallbackLang(this.DEFAULT_LANG);
    this.translate.use(lang);
    document.documentElement.setAttribute('lang', lang);
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);
  }

  toggleLang(): void {
    this.setLang(this.currentLang() === 'fr' ? 'en' : 'fr');
  }

  private getInitialLang(): Lang {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Lang | null;
    if (stored && ['fr', 'en'].includes(stored)) return stored;
    return this.DEFAULT_LANG;
  }
}