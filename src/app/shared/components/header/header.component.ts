import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { site } from '../../data/site';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { LocaleService } from '../../services/locale.service';
import { ScrollNavService } from '../../services/scroll-nav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [NgClass, I18nPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly scrollNav = inject(ScrollNavService);
  readonly theme = inject(ThemeService);
  readonly locale = inject(LocaleService);

  readonly site = site;
  readonly menuOpen = signal(false);

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
    this.closeMenu();
  }

  onBrandClick(event: Event): void {
    event.preventDefault();
    this.scrollNav.goToSection('inicio');
    this.closeMenu();
  }

  toggleLanguage(): void {
    if (this.locale.lang() === 'es') {
      this.locale.setEnglish();
    } else {
      this.locale.setSpanish();
    }
  }
}
