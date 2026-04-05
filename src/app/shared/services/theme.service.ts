import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { afterNextRender } from '@angular/core';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** true = tema oscuro (clase `dark` en &lt;html&gt;) */
  readonly isDark = signal(true);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      let dark = true;
      if (stored === 'light') {
        dark = false;
      } else if (stored === 'dark') {
        dark = true;
      } else {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.apply(dark);
    });
  }

  apply(dark: boolean): void {
    this.isDark.set(dark);
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const root = this.document.documentElement;
    root.classList.toggle('dark', dark);
    localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
  }

  setDark(): void {
    this.apply(true);
  }

  setLight(): void {
    this.apply(false);
  }
}
