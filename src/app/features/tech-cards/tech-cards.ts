import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';

interface TechCard {
  icon: string;
  name: string;
  tagKey: string;
  tagColor: string;
  descKey: string;
  isCustomIcon?: boolean;
}

@Component({
  selector: 'app-tech-cards',
  imports: [NgIcon, TranslatePipe],
  templateUrl: './tech-cards.html',
  styleUrl: './tech-cards.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechCards {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  cards: TechCard[] = [
    {
      icon: 'simpleAngular',
      name: 'Angular',
      tagKey: 'STACK.TAGS.FRONTEND',
      tagColor: 'text-red-500 border-red-500/30',
      descKey: 'STACK.CARDS.ANGULAR',
    },
    {
      icon: 'simpleTypescript',
      name: 'TypeScript',
      tagKey: 'STACK.TAGS.LANGUAGE',
      tagColor: 'text-blue-500 border-blue-500/30',
      descKey: 'STACK.CARDS.TYPESCRIPT',
    },
    {
      icon: 'simpleLaravel',
      name: 'Laravel',
      tagKey: 'STACK.TAGS.BACKEND',
      tagColor: 'text-orange-500 border-orange-500/30',
      descKey: 'STACK.CARDS.LARAVEL',
    },
    {
      icon: 'simplePhp',
      name: 'PHP',
      tagKey: 'STACK.TAGS.LANGUAGE',
      tagColor: 'text-indigo-500 border-indigo-500/30',
      descKey: 'STACK.CARDS.PHP',
    },
    {
      icon: 'simpleMysql',
      name: 'MySQL',
      tagKey: 'STACK.TAGS.DATABASE',
      tagColor: 'text-cyan-500 border-cyan-500/30',
      descKey: 'STACK.CARDS.MYSQL',
    },
    {
      icon: 'simpleTailwindcss',
      name: 'Tailwind CSS',
      tagKey: 'STACK.TAGS.FRONTEND',
      tagColor: 'text-teal-500 border-teal-500/30',
      descKey: 'STACK.CARDS.TAILWIND',
    },
    {
      icon: 'simpleReact',
      name: 'React',
      tagKey: 'STACK.TAGS.FRONTEND',
      tagColor: 'text-sky-500 border-sky-500/30',
      descKey: 'STACK.CARDS.REACT',
    },
    {
      icon: 'simpleGit',
      name: 'Git & GitHub',
      tagKey: 'STACK.TAGS.TOOL',
      tagColor: 'text-orange-600 border-orange-600/30',
      descKey: 'STACK.CARDS.GIT',
    },
  ];
}