import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { TechCards } from '../tech-cards/tech-cards';
import { LanguageService } from '../../core/services/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';


interface StackCategory {
  icon: string;
  titleKey: string;
  descKey: string;
  techs: string[];
}

interface TechBadge {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-stack',
  imports: [NgIcon, TranslatePipe,TechCards, RevealDirective],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  categories: StackCategory[] = [
    {
      icon: 'lucideLayout',
      titleKey: 'STACK.FRONTEND.TITLE',
      descKey: 'STACK.FRONTEND.DESC',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Tailwind CSS', 'PrimeNG'],
    },
    {
      icon: 'lucideServer',
      titleKey: 'STACK.BACKEND.TITLE',
      descKey: 'STACK.BACKEND.DESC',
      techs: ['PHP', 'Laravel', 'Node.js', 'API REST'],
    },
    {
      icon: 'lucideDatabase',
      titleKey: 'STACK.DATABASE.TITLE',
      descKey: 'STACK.DATABASE.DESC',
      techs: ['MySQL', 'SQL', 'UML','PostgreSQL', 'MERISE'],
    },
    {
      icon: 'lucideWrench',
      titleKey: 'STACK.TOOLS.TITLE',
      descKey: 'STACK.TOOLS.DESC',
      techs: ['Git', 'GitHub', 'Postman', 'Laragon', 'XAMPP'],
    },
  ];

  badges: TechBadge[] = [
    { icon: 'simpleHtml5', label: 'HTML5' },
   { icon: 'simpleCss', label: 'CSS3' },
    { icon: 'simpleJavascript', label: 'JavaScript' },
    { icon: 'simpleTypescript', label: 'TypeScript' },
    { icon: 'simpleAngular', label: 'Angular' },
    { icon: 'simpleReact', label: 'React' },
    { icon: 'simpleTailwindcss', label: 'Tailwind CSS' },
    { icon: 'simpleLaravel', label: 'Laravel' },
    { icon: 'simplePhp', label: 'PHP' },
    { icon: 'simpleMysql', label: 'MySQL' },
    { icon: 'simplePostgresql', label: 'PostgreSQL' },
    { icon: 'simpleNodedotjs', label: 'Node.js' },
    { icon: 'simpleGit', label: 'Git' },
    { icon: 'simpleGithub', label: 'GitHub' },
    { icon: 'simplePostman', label: 'Postman' },
  ];
}