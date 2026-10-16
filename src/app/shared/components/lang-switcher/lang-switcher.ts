import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-lang-switcher',
  imports: [],
  templateUrl: './lang-switcher.html',
  styleUrl: './lang-switcher.css',
})
export class LangSwitcher {
  langService = inject(LanguageService);
}