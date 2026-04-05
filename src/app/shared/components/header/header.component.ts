import { Component, inject, signal } from '@angular/core';
import { site } from '../../data/site';
import { ScrollNavService } from '../../services/scroll-nav.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly scrollNav = inject(ScrollNavService);

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
}
