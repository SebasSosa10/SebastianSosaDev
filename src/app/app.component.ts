import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

/**
 * Shell de la aplicación: cabecera y pie fijos alrededor del {@link RouterOutlet}.
 *
 * Arquitectura: `features/` para pantallas (p. ej. home), `shared/` para layout y datos
 * (`shared/data/site.ts`). La home se carga en la ruta `''` vía `app.routes.ts`.
 * Contexto del proyecto y comandos: ver README.md en la raíz del repositorio.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
