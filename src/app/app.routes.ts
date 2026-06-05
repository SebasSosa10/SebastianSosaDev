import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

/** Ruta principal en eager load: evita fallos de SSR+Vite+HMR con `loadComponent`. */
export const routes: Routes = [
  { path: '', component: HomeComponent },
];
