import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/hero/hero';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';
import { Stack } from './features/stack/stack';
import { Career } from './features/career/career';
import { Education } from './features/education/education';
import { FloatingButtons } from './shared/components/floating-buttons/floating-buttons';
import { TechMarquee } from './features/tech-marquee/tech-marquee';


@Component({
  selector: 'app-root',
  imports: [Navbar, Hero,TechMarquee,Stack,Career,Education,FloatingButtons],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  ngOnInit(): void {
    this.languageService.init();
  }
}