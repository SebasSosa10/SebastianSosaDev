import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  computed,
  inject,
} from '@angular/core';
import { site } from '../../shared/data/site';
import { messagesFor } from '../../shared/i18n/messages';
import { I18nPipe } from '../../shared/pipes/i18n.pipe';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollNavService } from '../../shared/services/scroll-nav.service';

const DEVICON =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

/** Icono monocromo (Simple Icons) — se invierte en tema oscuro vía clase */
const SI = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@11.6.0/icons/${slug}.svg`;

type TechStackItem = {
  label: string;
  iconUrl: string;
  /** Logo horizontal (p. ej. AWS) */
  wide?: boolean;
  /** SVG negro de Simple Icons */
  mono?: boolean;
};

@Component({
  selector: 'app-home',
  imports: [I18nPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  private readonly scrollNav = inject(ScrollNavService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly locale = inject(LocaleService);

  readonly site = site;

  /** Stack para el carrusel bajo el hero (iconos Devicon / Simple Icons) */
  readonly techStack: readonly TechStackItem[] = [
    { label: 'Python', iconUrl: `${DEVICON}/python/python-original.svg` },
    { label: 'Java', iconUrl: `${DEVICON}/java/java-original.svg` },
    { label: 'FastAPI', iconUrl: `${DEVICON}/fastapi/fastapi-original.svg` },
    { label: 'Django', iconUrl: `${DEVICON}/django/django-plain.svg` },
    {
      label: 'Spring Boot',
      iconUrl: `${DEVICON}/spring/spring-original.svg`,
    },
    { label: 'Angular', iconUrl: `${DEVICON}/angular/angular-original.svg` },
    { label: 'Serverless', iconUrl: SI('serverless'), mono: true },
    { label: 'AI agents', iconUrl: SI('openai'), mono: true },
    {
      label: 'TypeScript',
      iconUrl: `${DEVICON}/typescript/typescript-original.svg`,
    },
    {
      label: 'AWS',
      iconUrl: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
      wide: true,
    },
    { label: 'React', iconUrl: `${DEVICON}/react/react-original.svg` },
    {
      label: 'JavaScript',
      iconUrl: `${DEVICON}/javascript/javascript-original.svg`,
    },
    { label: 'Node.js', iconUrl: `${DEVICON}/nodejs/nodejs-original.svg` },
    { label: 'Docker', iconUrl: `${DEVICON}/docker/docker-original.svg` },
    { label: 'nginx', iconUrl: `${DEVICON}/nginx/nginx-original.svg` },
    { label: 'MongoDB', iconUrl: `${DEVICON}/mongodb/mongodb-original.svg` },
    {
      label: 'PostgreSQL',
      iconUrl: `${DEVICON}/postgresql/postgresql-original.svg`,
    },
    {
      label: 'Tailwind',
      iconUrl: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
    },
    { label: 'Oracle', iconUrl: `${DEVICON}/oracle/oracle-original.svg` },
    { label: 'Git', iconUrl: `${DEVICON}/git/git-original.svg` },
    { label: 'GitLab', iconUrl: `${DEVICON}/gitlab/gitlab-original.svg` },
    { label: 'SQL', iconUrl: `${DEVICON}/mysql/mysql-original.svg` },
    { label: 'CSS', iconUrl: `${DEVICON}/css3/css3-original.svg` },
    { label: 'HTML', iconUrl: `${DEVICON}/html5/html5-original.svg` },
  ];

  /** Primera línea del h1 — depende del idioma */
  readonly heroHeadingLine1Chars = computed(() => {
    const line = messagesFor(this.locale.lang()).hero.line1;
    return [...line].map((char, index) => ({ char, delayIndex: index }));
  });

  readonly heroHeadingLine2Chars = computed(() => {
    const offset = messagesFor(this.locale.lang()).hero.line1.length;
    return [...site.name].map((char, index) => ({
      char,
      delayIndex: offset + index,
    }));
  });

  readonly portfolioIdeas = computed(
    () => messagesFor(this.locale.lang()).portfolioIdeas,
  );

  readonly aboutDeliveryCards = computed(
    () => messagesFor(this.locale.lang()).aboutDeliveryCards,
  );

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const id = globalThis.location?.hash?.replace(/^#/, '') ?? '';
    if (!id) {
      return;
    }
    queueMicrotask(() => {
      if (id === 'inicio' || document.getElementById(id)) {
        this.scrollNav.goToSection(id);
      }
    });
  }
}
