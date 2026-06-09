import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  input,
  PLATFORM_ID,
  signal,
} from '@angular/core';

/**
 * Efecto máquina de escribir: tipea, pausa, borra y pasa al siguiente texto.
 * Respeta `prefers-reduced-motion` (muestra solo la primera frase).
 */
@Component({
  selector: 'app-typewriter-text',
  standalone: true,
  template: `
    <span class="typewriter inline-grid align-bottom">
      <span
        class="col-start-1 row-start-1 select-none whitespace-nowrap opacity-0"
        aria-hidden="true"
        >{{ layoutPhrase() }}</span
      >
      <span class="col-start-1 row-start-1 whitespace-nowrap">
        {{ displayedText() }}@if (!prefersReducedMotion()) {
          <span
            class="typewriter-cursor ml-px inline-block text-brand-500 motion-reduce:hidden"
            aria-hidden="true"
            >|</span
          >
        }
      </span>
    </span>
  `,
  styleUrl: './typewriter-text.component.css',
})
export class TypewriterTextComponent {
  readonly phrases = input.required<readonly string[]>();
  readonly typingIntervalMs = input(88);
  readonly deletingIntervalMs = input(48);
  readonly pauseAfterTypeMs = input(2400);
  readonly pauseAfterDeleteMs = input(420);

  readonly displayedText = signal('');
  readonly prefersReducedMotion = signal(false);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timerId: ReturnType<typeof setTimeout> | undefined;

  readonly layoutPhrase = computed(() => {
    const list = this.phrases();
    if (!list.length) {
      return '';
    }
    return list.reduce((longest, current) =>
      current.length > longest.length ? current : longest,
    );
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.prefersReducedMotion.set(
        matchMedia('(prefers-reduced-motion: reduce)').matches,
      );
    }

    effect(() => {
      const list = this.phrases();
      if (!list.length) {
        return;
      }
      this.reset(list);
    });

    this.destroyRef.onDestroy(() => this.clearTimer());
  }

  private reset(list: readonly string[]): void {
    this.clearTimer();
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.deleting = false;

    if (this.prefersReducedMotion() || !isPlatformBrowser(this.platformId)) {
      this.displayedText.set(list[0] ?? '');
      return;
    }

    this.displayedText.set('');
    this.scheduleTick(list);
  }

  private scheduleTick(list: readonly string[]): void {
    this.timerId = setTimeout(() => this.tick(list), this.currentDelay(list));
  }

  private currentDelay(list: readonly string[]): number {
    const phrase = list[this.phraseIndex] ?? '';

    if (!this.deleting && this.charIndex === phrase.length) {
      return this.pauseAfterTypeMs();
    }
    if (this.deleting && this.charIndex === 0) {
      return this.pauseAfterDeleteMs();
    }
    return this.deleting ? this.deletingIntervalMs() : this.typingIntervalMs();
  }

  private tick(list: readonly string[]): void {
    if (!list.length) {
      return;
    }

    const phrase = list[this.phraseIndex] ?? '';

    if (!this.deleting) {
      if (this.charIndex < phrase.length) {
        this.charIndex += 1;
        this.displayedText.set(phrase.slice(0, this.charIndex));
      } else {
        this.deleting = true;
      }
    } else if (this.charIndex > 0) {
      this.charIndex -= 1;
      this.displayedText.set(phrase.slice(0, this.charIndex));
    } else {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % list.length;
    }

    this.scheduleTick(list);
  }

  private clearTimer(): void {
    if (this.timerId !== undefined) {
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }
  }
}
