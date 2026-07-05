import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { pathForSection } from '../data/site';

/**
 * Desplazamiento suave a secciones del home con URLs limpias para SEO.
 */
@Injectable({ providedIn: 'root' })
export class ScrollNavService {
  private readonly doc = inject(DOCUMENT);

  goToSection(sectionId: string): void {
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }

    const path = pathForSection(sectionId);

    if (sectionId === 'inicio') {
      win.scrollTo({ top: 0, behavior: 'smooth' });
      win.history.replaceState(null, '', path);
      return;
    }

    this.doc.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    win.history.replaceState(null, '', path);
  }

  handleClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.goToSection(sectionId);
  }
}
