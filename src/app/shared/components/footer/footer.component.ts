import { Component, inject } from '@angular/core';
import { site } from '../../data/site';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { LocaleService } from '../../services/locale.service';
import { ScrollNavService } from '../../services/scroll-nav.service';

@Component({
  selector: 'app-footer',
  imports: [I18nPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly scrollNav = inject(ScrollNavService);
  readonly locale = inject(LocaleService);

  readonly site = site;
  readonly year = new Date().getFullYear();

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
  }
}
