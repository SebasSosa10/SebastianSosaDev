import { Component, inject } from '@angular/core';
import { site } from '../../data/site';
import { ScrollNavService } from '../../services/scroll-nav.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly scrollNav = inject(ScrollNavService);

  readonly site = site;
  readonly year = new Date().getFullYear();

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
  }
}
