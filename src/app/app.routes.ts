import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const sectionRoutes: { path: string; sectionId: string }[] = [
  { path: 'sobre-mi', sectionId: 'sobre-mi' },
  { path: 'experiencia', sectionId: 'experiencia' },
  { path: 'servicios', sectionId: 'experiencia' },
  { path: 'proyectos', sectionId: 'proyectos' },
  { path: 'contacto', sectionId: 'contacto' },
];

/** Ruta principal en eager load: evita fallos de SSR+Vite+HMR con `loadComponent`. */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  ...sectionRoutes.map(({ path, sectionId }) => ({
    path,
    component: HomeComponent,
    data: { sectionId },
  })),
  { path: '**', redirectTo: '' },
];
