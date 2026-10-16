import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'aqua' | 'retro';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';
  private readonly DEFAULT_THEME: Theme = 'dark';

  currentTheme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.STORAGE_KEY, theme);
    });
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  private getInitialTheme(): Theme {
    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme | null;
    if (stored && ['light', 'dark', 'aqua', 'retro'].includes(stored)) {
      return stored;
    }
    return this.DEFAULT_THEME;
  }
}