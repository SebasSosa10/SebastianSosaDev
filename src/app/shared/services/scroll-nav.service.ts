import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/**
 * Desplazamiento suave a secciones del home (misma página, sin rutas extra).
 */
@Injectable({ providedIn: 'root' })
export class ScrollNavService {
  private readonly doc = inject(DOCUMENT);

  goToSection(sectionId: string): void {
    const win = this.doc.defaultView;
    if (!win) {
      return;
    }

    if (sectionId === 'inicio') {
      win.scrollTo({ top: 0, behavior: 'smooth' });
      win.history.replaceState(null, '', win.location.pathname || '/');
      return;
    }

    this.doc.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    win.history.replaceState(
      null,
      '',
      `${win.location.pathname || '/'}#${sectionId}`,
    );
  }

  handleClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.goToSection(sectionId);
  }
}
