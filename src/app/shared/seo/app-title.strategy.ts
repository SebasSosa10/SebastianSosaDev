import { Injectable, inject } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import type { SeoPageKey } from './seo.model';
import { SeoService } from '../services/seo.service';

/**
 * Igual que en el proyecto odontológico: las rutas declaran `data.sectionId`
 * y aquí se sincroniza Title / Meta / Canonical / Schema en cada navegación.
 */
@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const key = this.resolveSeoKey(snapshot) ?? 'inicio';
    this.seo.applyPage(key, snapshot.url || '/');
  }

  private resolveSeoKey(snapshot: RouterStateSnapshot): SeoPageKey | undefined {
    let key: SeoPageKey | undefined;
    let node = snapshot.root;

    while (node) {
      const sectionId = (node.data['sectionId'] ?? node.data['seoKey']) as
        | SeoPageKey
        | undefined;
      if (sectionId) {
        key = sectionId;
      }
      if (!node.firstChild) {
        break;
      }
      node = node.firstChild;
    }

    return key;
  }
}
