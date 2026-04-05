import { Pipe, PipeTransform, inject } from '@angular/core';
import { message } from '../i18n/messages';
import { LocaleService } from '../services/locale.service';

/**
 * Traducción reactiva según {@link LocaleService#lang} (pipe impura).
 * Clave con puntos, p. ej. `hero.tagline`, `sections.ideasHeading`.
 */
@Pipe({
  name: 'i18n',
  standalone: true,
  pure: false,
})
export class I18nPipe implements PipeTransform {
  private readonly locale = inject(LocaleService);

  transform(key: string): string {
    this.locale.lang();
    return message(this.locale.lang(), key);
  }
}
