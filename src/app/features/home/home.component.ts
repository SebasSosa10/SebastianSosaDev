import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { site } from '../../shared/data/site';
import { ScrollNavService } from '../../shared/services/scroll-nav.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  private readonly scrollNav = inject(ScrollNavService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly site = site;

  readonly portfolioIdeas = [
    {
      title: 'Quién eres y qué ofreces',
      body: 'Una frase clara: rol, años o foco (backend, frontend, full stack, datos) y el tipo de problemas que resuelves.',
    },
    {
      title: 'Stack y herramientas',
      body: 'Lenguajes, frameworks, nube y prácticas (tests, CI/CD, accesibilidad). Prioriza lo que realmente usas en producción.',
    },
    {
      title: 'Proyectos con historia',
      body: 'Contexto breve, tu responsabilidad, decisiones técnicas y enlaces a repo o demo. Capturas o GIF ayudan mucho.',
    },
    {
      title: 'Resultados o aprendizajes',
      body: 'Métricas si las hay (rendimiento, usuarios, tiempo ahorrado). Si no, qué aprendiste o qué harías distinto.',
    },
    {
      title: 'Cómo trabajas',
      body: 'Código limpio, revisiones, documentación, trabajo en equipo. Sirve para que te imaginen en su día a día.',
    },
    {
      title: 'Contacto visible',
      body: 'Email, LinkedIn o formulario. Facilita que reclutadores o clientes lleguen sin fricción.',
    },
  ] as const;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const id = globalThis.location?.hash?.replace(/^#/, '') ?? '';
    if (!id) {
      return;
    }
    queueMicrotask(() => {
      if (id === 'inicio' || document.getElementById(id)) {
        this.scrollNav.goToSection(id);
      }
    });
  }

  goTo(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
  }
}
