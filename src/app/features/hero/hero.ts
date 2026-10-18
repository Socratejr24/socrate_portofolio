import { Component, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { TypingEffect } from '../../shared/components/typing-effect/typing-effect';
import { IconLinkedin } from '../../shared/components/icon-linkedin/icon-linkedin';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [NgIcon, TranslatePipe, TypingEffect,IconLinkedin,RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  roles = [
    'Full Stack Developer',
    'Angular & Laravel Developer',
    'Web Application Builder',
    'Passionate Coder',
  ];

  socials = [
    {
      icon: 'simpleGithub',
      url: 'https://github.com/Socratejr24',
      label: 'GitHub',
    },
    {
      icon: 'lucideLinkedin',
      url: 'https://www.linkedin.com/in/kouaho-jean-dylane-ackadie-b52828376/',
      label: 'LinkedIn',
    },
    
    {
      icon: 'lucideMail',
      url: 'mailto:socratelir2005@gmail.com',
      label: 'Email',
    },
  ];
}