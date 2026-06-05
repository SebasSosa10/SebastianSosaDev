import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { site } from '../../shared/data/site';
import {
  message,
  messagesFor,
  type ExperienceEntry,
  type FeaturedProject,
} from '../../shared/i18n/messages';
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

  readonly experienceEntries = computed(
    () => messagesFor(this.locale.lang()).experienceEntries,
  );

  readonly featuredProjects = computed(
    () => messagesFor(this.locale.lang()).featuredProjects,
  );

  /** Ancho mínimo del carril: columnas iguales y seguidas (scroll horizontal en móvil). */
  readonly experienceTimelineMinWidthPx = computed(() => {
    const n = messagesFor(this.locale.lang()).experienceEntries.length;
    return Math.max(320, n * 152 + 48);
  });

  /**
   * Columnas ordenadas cronológicamente (izquierda → derecha).
   * Solo año visible; `contentAbove`: bloque completo (año + texto) arriba del eje; si no, abajo (zigzag).
   */
  readonly experienceTimelineNodes = computed(() => {
    const entries = messagesFor(this.locale.lang()).experienceEntries;

    const ranges = entries.map((entry, entryIndex) => {
      const startIdx = HomeComponent.monthIndex(
        entry.timelineFrom.year,
        entry.timelineFrom.month,
      );
      const isoFrom = `${entry.timelineFrom.year}-${String(entry.timelineFrom.month).padStart(2, '0')}-01`;
      return { entryIndex, entry, startIdx, isoFrom };
    });

    const sorted = [...ranges].sort((a, b) => a.startIdx - b.startIdx);

    return sorted.map((r, visualIndex) => ({
      entryIndex: r.entryIndex,
      entry: r.entry,
      isoFrom: r.isoFrom,
      yearLabel: String(r.entry.timelineFrom.year),
      contentAbove: visualIndex % 2 === 0,
    }));
  });

  /** Mes absoluto para ordenar: año×12 + mes (1–12). */
  private static monthIndex(year: number, month: number): number {
    return year * 12 + month;
  }

  readonly selectedExperienceIndex = signal<number | null>(null);

  readonly selectedExperience = computed(() => {
    const idx = this.selectedExperienceIndex();
    if (idx === null) {
      return null;
    }
    const list = messagesFor(this.locale.lang()).experienceEntries;
    return list[idx] ?? null;
  });

  readonly selectedProjectIndex = signal<number | null>(null);

  readonly selectedFeaturedProject = computed(() => {
    const idx = this.selectedProjectIndex();
    if (idx === null) {
      return null;
    }
    const list = messagesFor(this.locale.lang()).featuredProjects;
    return list[idx] ?? null;
  });

  openExperienceModal(index: number): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.selectedProjectIndex.set(null);
    this.selectedExperienceIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeExperienceModal(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.selectedExperienceIndex.set(null);
    document.body.style.overflow = '';
  }

  openProjectModal(index: number): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.selectedExperienceIndex.set(null);
    this.selectedProjectIndex.set(index);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.selectedProjectIndex.set(null);
    document.body.style.overflow = '';
  }

  experienceCardAria(entry: ExperienceEntry): string {
    const hint = message(this.locale.lang(), 'sections.experienceModalHint');
    return `${entry.title}, ${entry.company}. ${hint}`;
  }

  featuredProjectCardAria(project: FeaturedProject): string {
    const hint = message(this.locale.lang(), 'sections.projectModalHint');
    return `${project.title}. ${hint}`;
  }

  @HostListener('document:keydown.escape')
  onDocumentEscape(): void {
    if (this.selectedProjectIndex() !== null) {
      this.closeProjectModal();
      return;
    }
    if (this.selectedExperienceIndex() !== null) {
      this.closeExperienceModal();
    }
  }

  /** Iniciales para el avatar cuando aún no hay logo de empresa. */
  companyInitials(company: string): string {
    const parts = company.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) {
      return '?';
    }
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  }

  readonly aboutDeliveryCards = computed(
    () => messagesFor(this.locale.lang()).aboutDeliveryCards,
  );

  readonly contactEmailCopied = signal(false);
  private contactCopyResetTimer: ReturnType<typeof setTimeout> | null = null;

  copyContactEmail(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    void navigator.clipboard.writeText(this.site.email).then(() => {
      if (this.contactCopyResetTimer !== null) {
        clearTimeout(this.contactCopyResetTimer);
      }
      this.contactEmailCopied.set(true);
      this.contactCopyResetTimer = setTimeout(() => {
        this.contactEmailCopied.set(false);
        this.contactCopyResetTimer = null;
      }, 2000);
    });
  }

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
