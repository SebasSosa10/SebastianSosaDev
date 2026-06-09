import { Component, computed, inject } from '@angular/core';
import { site } from '../../data/site';
import { messagesFor } from '../../i18n/messages';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { LocaleService } from '../../services/locale.service';
import { ScrollNavService } from '../../services/scroll-nav.service';
import {
  ScrollRevealDirective,
  ScrollRevealGroupDirective,
} from '../../directives/scroll-reveal.directive';
import { TypewriterTextComponent } from '../typewriter-text/typewriter-text.component';

@Component({
  selector: 'app-footer',
  imports: [
    I18nPipe,
    TypewriterTextComponent,
    ScrollRevealGroupDirective,
    ScrollRevealDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly scrollNav = inject(ScrollNavService);
  readonly locale = inject(LocaleService);

  readonly site = site;
  readonly year = new Date().getFullYear();

  readonly roleTitles = computed(
    () => messagesFor(this.locale.lang()).roleTitles,
  );

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
  }
}
