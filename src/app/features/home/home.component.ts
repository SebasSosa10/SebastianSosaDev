import { isPlatformBrowser, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  PLATFORM_ID,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sectionForPath } from '../../shared/data/site';
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
import { SeoService } from '../../shared/services/seo.service';
import { TypewriterTextComponent } from '../../shared/components/typewriter-text/typewriter-text.component';
import {
  ScrollRevealDirective,
  ScrollRevealGroupDirective,
} from '../../shared/directives/scroll-reveal.directive';

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
  imports: [I18nPipe, NgClass, TypewriterTextComponent, ScrollRevealDirective, ScrollRevealGroupDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly scrollNav = inject(ScrollNavService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
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

  readonly roleTitles = computed(
    () => messagesFor(this.locale.lang()).roleTitles,
  );

  readonly roleTitlesAria = computed(() => this.roleTitles().join(', '));

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
   * Cada nodo expone año inicial, año final (o "actualidad") y zigzag.
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

    return sorted.map((r, visualIndex) => {
      const yearFrom = r.entry.timelineFrom.year;
      const yearToRaw = r.entry.timelineTo?.year ?? null;
      const isOngoing = !!r.entry.timelineOngoing;
      const yearToLabel = isOngoing
        ? null
        : yearToRaw !== null && yearToRaw !== yearFrom
          ? String(yearToRaw)
          : null;
      return {
        entryIndex: r.entryIndex,
        entry: r.entry,
        isoFrom: r.isoFrom,
        yearFromLabel: String(yearFrom),
        yearToLabel,
        isOngoing,
        contentAbove: visualIndex % 2 === 0,
      };
    });
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

  readonly projectsCarousel =
    viewChild<ElementRef<HTMLDivElement>>('projectsCarousel');

  readonly projectsAtStart = signal(true);
  readonly projectsAtEnd = signal(false);
  readonly activeProjectIndex = signal(0);

  private getCardLayout(el: HTMLElement): { cardWidth: number; gap: number } {
    const firstCard = el.querySelector<HTMLElement>('[role="listitem"]');
    const cardWidth = firstCard?.offsetWidth ?? el.clientWidth / 2;
    const styles = globalThis.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || '16') || 16;
    return { cardWidth, gap };
  }

  scrollProjects(direction: 1 | -1): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = this.projectsCarousel()?.nativeElement;
    if (!el) {
      return;
    }
    const { cardWidth, gap } = this.getCardLayout(el);
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
  }

  scrollToProject(index: number): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = this.projectsCarousel()?.nativeElement;
    if (!el) {
      return;
    }
    const { cardWidth, gap } = this.getCardLayout(el);
    el.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
  }

  onProjectsScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const el = this.projectsCarousel()?.nativeElement;
    if (!el) {
      return;
    }
    const maxScroll = el.scrollWidth - el.clientWidth;
    this.projectsAtStart.set(el.scrollLeft <= 1);
    this.projectsAtEnd.set(el.scrollLeft >= maxScroll - 1);
    const { cardWidth, gap } = this.getCardLayout(el);
    const step = cardWidth + gap;
    if (step > 0) {
      const total = this.featuredProjects().length;
      const idx = Math.max(
        0,
        Math.min(total - 1, Math.round(el.scrollLeft / step)),
      );
      this.activeProjectIndex.set(idx);
    }
  }

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

  readonly aboutLeadParagraphs = computed(
    () => messagesFor(this.locale.lang()).sections.aboutLead,
  );

  readonly contactIntroParagraphs = computed(
    () => messagesFor(this.locale.lang()).sections.contactIntro,
  );

  readonly contactEmailCopied = signal(false);
  readonly contactFormStatus = signal<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  );
  nombre = '';
  email = '';
  asunto = '';
  mensaje = '';
  private contactCopyResetTimer: ReturnType<typeof setTimeout> | null = null;

  onContactFormSubmit(event: Event): void {
    event.preventDefault();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.contactFormStatus.set('sending');

    const formData = new URLSearchParams();
    formData.append('form-name', 'contacto');
    formData.append('nombre', this.nombre);
    formData.append('email', this.email);
    formData.append('asunto', this.asunto);
    formData.append('mensaje', this.mensaje);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then((response) => {
        if (response.ok) {
          this.contactFormStatus.set('success');
          this.nombre = '';
          this.email = '';
          this.asunto = '';
          this.mensaje = '';
          return;
        }
        this.contactFormStatus.set('error');
      })
      .catch(() => {
        this.contactFormStatus.set('error');
      });
  }

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

  ngOnInit(): void {
    const sectionFromRoute = this.route.snapshot.data['sectionId'] as
      | string
      | undefined;
    const sectionFromPath = sectionForPath(
      globalThis.location?.pathname ?? '/',
    );
    const sectionId = sectionFromRoute ?? sectionFromPath ?? 'inicio';
    this.seo.apply(this.locale.lang(), sectionId);
  }

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
    this.seo.apply(this.locale.lang(), sectionId);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    queueMicrotask(() => this.onProjectsScroll());

    const sectionFromRoute = this.route.snapshot.data['sectionId'] as
      | string
      | undefined;
    const sectionFromPath = sectionForPath(
      globalThis.location?.pathname ?? '/',
    );
    const hashId = globalThis.location?.hash?.replace(/^#/, '') ?? '';
    const id = sectionFromRoute ?? sectionFromPath ?? hashId;

    if (!id || id === 'inicio') {
      return;
    }

    queueMicrotask(() => {
      if (document.getElementById(id)) {
        this.scrollNav.goToSection(id);
      }
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.onProjectsScroll();
  }
}
