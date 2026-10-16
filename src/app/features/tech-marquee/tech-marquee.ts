import {
  Component,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';

interface TechItem {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-tech-marquee',
  imports: [NgIcon],
  templateUrl: './tech-marquee.html',
  styleUrl: './tech-marquee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechMarquee {
  // Direction : 1 = avance (gauche→droite), -1 = recule (droite→gauche)
  direction = signal<1 | -1>(1);
  isPaused = signal(false);

  techs: TechItem[] = [
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
    { icon: 'simpleNodedotjs', label: 'Node.js' },
    { icon: 'simpleGit', label: 'Git' },
    { icon: 'simpleGithub', label: 'GitHub' },
    { icon: 'simplePostman', label: 'Postman' },
  ];

  // On duplique pour l'effet de boucle infinie
  get duplicatedTechs(): TechItem[] {
    return [...this.techs, ...this.techs];
  }

  toggleDirection(): void {
    this.direction.update((d) => (d === 1 ? -1 : 1));
  }

  setDirection(dir: 1 | -1): void {
    this.direction.set(dir);
  }

  onMouseEnter(): void {
    this.isPaused.set(true);
  }

  onMouseLeave(): void {
    this.isPaused.set(false);
  }
}