import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  // provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideIcons } from '@ng-icons/core';

// ===== UI Icons (Lucide) =====
import {
  lucideMail,
  lucidePhone,
  lucideSun,
  lucideArrowUp,
  lucideGraduationCap,
  lucideCalendar,
  lucideMoon,
  lucideDroplet,
  lucidePalette,
  lucideLanguages,
  lucideMenu,
  lucideX,
  lucideArrowRight,
  lucideDownload,
  lucideExternalLink,
  lucideMapPin,
  lucideSend,
  lucideLayout,
  lucideServer,
  lucideDatabase,
  lucideWrench,
} from '@ng-icons/lucide';

// ===== Brand Icons (Simple Icons) =====
import {
  simpleGithub,
  simpleHtml5,
simpleCss,
  simpleJavascript,
  simpleTypescript,
  simpleAngular,
  simpleReact,
  simpleTailwindcss,
  simpleLaravel,
  simplePhp,
  simpleMysql,
  simpleGit,
  simplePostman,
  simpleNodedotjs,
} from '@ng-icons/simple-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // provideZoneChangeDetection({ eventCoalescing: true }), // zoneless par défaut
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json',
      }),
    }),
    provideIcons({
      // ===== UI =====
      lucideMail,
      lucidePhone,
      lucideSun,
      lucideArrowUp,
      lucideMoon,
      lucideDroplet,
      lucidePalette,
      lucideLanguages,
      lucideMenu,
      lucideGraduationCap,
      lucideCalendar,
      lucideX,
      lucideArrowRight,
      lucideDownload,
      lucideExternalLink,
      lucideMapPin,
      lucideSend,
      // ===== UI Stack =====
      lucideLayout,
      lucideServer,
      lucideDatabase,
      lucideWrench,
      // ===== Brands =====
      simpleGithub,
      simpleHtml5,
      simpleCss,
      simpleJavascript,
      simpleTypescript,
      simpleAngular,
      simpleReact,
      simpleTailwindcss,
      simpleLaravel,
      simplePhp,
      simpleMysql,
      simpleGit,
      simplePostman,
      simpleNodedotjs,
    }),
  ],
};