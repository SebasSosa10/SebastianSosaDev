import { isPlatformBrowser, NgClass, NgOptimizedImage } from '@angular/common';
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
import { pathForSection, sectionForPath, scrollTargetForSection } from '../../shared/data/site';
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
import { IMAGE_SEO, imageSeoForLocale } from '../../shared/seo/image-seo.config';

const TECH = '/tech-icons';

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
  imports: [
    I18nPipe,
    NgClass,
    NgOptimizedImage,
    TypewriterTextComponent,
    ScrollRevealDirective,
    ScrollRevealGroupDirective,
  ],
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

  readonly heroImageSeo = computed(() =>
    imageSeoForLocale(IMAGE_SEO.hero, this.locale.lang()),
  );
  readonly aboutImageSeo = computed(() =>
    imageSeoForLocale(IMAGE_SEO.about, this.locale.lang()),
  );
  readonly headerAvatarSeo = computed(() =>
    imageSeoForLocale(IMAGE_SEO.headerAvatar, this.locale.lang()),
  );

  /** Stack para el carrusel bajo el hero (iconos locales; evita CDN / Tracking Prevention). */
  readonly techStack: readonly TechStackItem[] = [
    { label: 'Python', iconUrl: `${TECH}/python.svg` },
    { label: 'Java', iconUrl: `${TECH}/java.svg` },
    { label: 'FastAPI', iconUrl: `${TECH}/fastapi.svg` },
    { label: 'Django', iconUrl: `${TECH}/django.svg` },
    { label: 'Spring Boot', iconUrl: `${TECH}/spring.svg` },
    { label: 'Angular', iconUrl: `${TECH}/angular.svg` },
    { label: 'Serverless', iconUrl: `${TECH}/serverless.svg`, mono: true },
    { label: 'AI agents', iconUrl: `${TECH}/openai.svg`, mono: true },
    { label: 'TypeScript', iconUrl: `${TECH}/typescript.svg` },
    { label: 'AWS', iconUrl: `${TECH}/aws.svg`, wide: true },
    { label: 'React', iconUrl: `${TECH}/react.svg` },
    { label: 'JavaScript', iconUrl: `${TECH}/javascript.svg` },
    { label: 'Node.js', iconUrl: `${TECH}/nodejs.svg` },
    { label: 'Docker', iconUrl: `${TECH}/docker.svg` },
    { label: 'nginx', iconUrl: `${TECH}/nginx.svg` },
    { label: 'MongoDB', iconUrl: `${TECH}/mongodb.svg` },
    { label: 'PostgreSQL', iconUrl: `${TECH}/postgresql.svg` },
    { label: 'Tailwind', iconUrl: `${TECH}/tailwindcss.svg` },
    { label: 'Oracle', iconUrl: `${TECH}/oracle.svg` },
    { label: 'Git', iconUrl: `${TECH}/git.svg` },
    { label: 'GitLab', iconUrl: `${TECH}/gitlab.svg` },
    { label: 'SQL', iconUrl: `${TECH}/mysql.svg` },
    { label: 'CSS', iconUrl: `${TECH}/css3.svg` },
    { label: 'HTML', iconUrl: `${TECH}/html5.svg` },
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
    const pathname = globalThis.location?.pathname ?? '/';
    const sectionFromRoute = this.route.snapshot.data['sectionId'] as
      | string
      | undefined;
    const sectionFromPath = sectionForPath(pathname);
    const sectionId = sectionFromRoute ?? sectionFromPath ?? 'inicio';
    this.seo.apply(this.locale.lang(), sectionId, pathname);
  }

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
    this.seo.apply(
      this.locale.lang(),
      sectionId,
      pathForSection(sectionId),
    );
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

    const scrollId = scrollTargetForSection(id);
    queueMicrotask(() => {
      if (document.getElementById(scrollId)) {
        this.scrollNav.goToSection(id);
      }
    });
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.onProjectsScroll();
  }
}
