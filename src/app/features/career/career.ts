import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';

interface Mission {
  titleKey: string;
  descKey: string;
  techs: string[];
}

interface Experience {
  roleKey: string;
  company: string;
  location: string;
  period: string;
  typeKey: string;
  missions: Mission[];
}

@Component({
  selector: 'app-career',
  imports: [NgIcon, TranslatePipe],
  templateUrl: './career.html',
  styleUrl: './career.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Career {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  experiences: Experience[] = [
    {
      roleKey: 'CAREER.BIGDATA.ROLE',
      company: 'BIGDATA CI',
      location: 'Abidjan, Yopougon',
      period: '18 oct. 2025 – 06 juil. 2026',
      typeKey: 'CAREER.TYPES.INTERNSHIP',
      missions: [
        {
          titleKey: 'CAREER.BIGDATA.M1_TITLE',
          descKey: 'CAREER.BIGDATA.M1_DESC',
          techs: ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG', 'Laravel', 'MySQL', 'Git'],
        },
        {
          titleKey: 'CAREER.BIGDATA.M2_TITLE',
          descKey: 'CAREER.BIGDATA.M2_DESC',
          techs: ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG', 'Laravel', 'MySQL', 'Git'],
        },
        {
          titleKey: 'CAREER.BIGDATA.M3_TITLE',
          descKey: 'CAREER.BIGDATA.M3_DESC',
          techs: ['Angular', 'Laravel', 'MySQL', 'Tailwind CSS', 'PrimeNG', 'Git', 'Postman'],
        },
        {
          titleKey: 'CAREER.BIGDATA.M4_TITLE',
          descKey: 'CAREER.BIGDATA.M4_DESC',
          techs: ['Tests fonctionnels', 'Postman', 'QA'],
        },
      ],
    },
  ];
}