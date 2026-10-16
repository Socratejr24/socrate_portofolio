import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface EducationItem {
  degreeKey: string;
  fieldKey?: string;
  school: string;
  locationKey: string;
  period: string;
  logo: string;
  side: 'left' | 'right';
  subjects: string[];
}

@Component({
  selector: 'app-education',
  imports: [TranslatePipe, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.currentLang;

  educations: EducationItem[] = [
    {
      degreeKey: 'EDUCATION.LICENSE.DEGREE',
      fieldKey: 'EDUCATION.LICENSE.FIELD',
      school: 'Université Tertiaire Technologique Loko (UIT Koumassi)',
      locationKey: 'EDUCATION.LICENSE.LOCATION',
      period: '2023 – 2025',
      logo: '/utt.jpg',
      side: 'left',
      subjects: [
        'Développement Web',
        'Programmation Orientée Objet',
        'Bases de données & SQL',
        'Algorithmes & Structures de données',
        'UML & MERISE',
        'Réseaux informatiques',
        'Génie logiciel',
        'Développement mobile',
      ],
    },
    {
      degreeKey: 'EDUCATION.BACC.DEGREE',
      school: 'Collège Catholique Saint Jean de Gagnoa',
      locationKey: 'EDUCATION.BACC.LOCATION',
      period: '2023',
      logo: '/st_jean.jpg',
      side: 'right',
      subjects: [
        'Mathématiques',
        'Physique-Chimie',
        'Sciences de la Vie et de la Terre',
        'Philosophie',
        'Français',
        'Anglais',
      ],
    },
  ];
}