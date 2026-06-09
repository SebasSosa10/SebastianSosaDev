import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Fondo animado de partículas estilo "constelación":
 * pequeñas esferas doradas que flotan y se conectan con líneas
 * cuando están cerca entre sí. Activo en tema claro y oscuro.
 *
 * - SSR-safe (no hace nada fuera del browser).
 * - Pausa cuando la pestaña está oculta.
 * - Respeta `prefers-reduced-motion` (renderiza estático sin movimiento).
 * - Se redimensiona con la ventana.
 */
@Component({
  selector: 'app-particle-background',
  standalone: true,
  template: `<canvas
    #canvas
    aria-hidden="true"
    class="pointer-events-none fixed inset-0 -z-10 block h-full w-full"
  ></canvas>`,
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly theme = inject(ThemeService);

  readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  private rafId: number | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private dpr = 1;
  private width = 0;
  private height = 0;
  private mouseX = -9999;
  private mouseY = -9999;
  private mouseActive = false;
  private prefersReducedMotion = false;
  private viewInitialized = false;

  constructor() {
    effect(() => {
      this.theme.isDark();
      if (!isPlatformBrowser(this.platformId) || !this.viewInitialized) {
        return;
      }
      if (!document.hidden) {
        this.start();
      }
    });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      return;
    }
    this.ctx = canvas.getContext('2d');
    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    this.resize();
    this.seedParticles();
    this.viewInitialized = true;
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.resize();
    this.seedParticles();
  }

  @HostListener('document:visibilitychange')
  onVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (document.hidden) {
      this.stop();
    } else {
      this.start();
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX * this.dpr;
    this.mouseY = event.clientY * this.dpr;
    this.mouseActive = true;
  }

  @HostListener('window:mouseout')
  onMouseOut(): void {
    this.mouseActive = false;
  }

  private resize(): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas || !this.ctx) {
      return;
    }
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;
    canvas.width = Math.floor(cssWidth * this.dpr);
    canvas.height = Math.floor(cssHeight * this.dpr);
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  private seedParticles(): void {
    const area = this.width * this.height;
    const target = Math.max(28, Math.min(110, Math.round(area / 22000)));
    const dpr = this.dpr;
    this.particles = Array.from({ length: target }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.35 * dpr,
      vy: (Math.random() - 0.5) * 0.35 * dpr,
      r: (Math.random() * 2.4 + 1.6) * dpr,
    }));
  }

  private start(): void {
    if (!this.ctx || this.rafId !== null) {
      return;
    }
    const tick = () => {
      this.draw();
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  private stop(): void {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, this.width, this.height);

    const isDark = this.theme.isDark();
    const reduce = this.prefersReducedMotion;
    const linkDist = 130 * this.dpr;
    const mouseLinkDist = 170 * this.dpr;
    const linkDistSq = linkDist * linkDist;
    const mouseLinkDistSq = mouseLinkDist * mouseLinkDist;
    const lineAlphaScale = isDark ? 0.32 : 0.42;
    const mouseAlphaScale = isDark ? 0.55 : 0.62;
    const lineRgb = isDark ? '212, 175, 55' : '168, 128, 32';
    const mouseRgb = isDark ? '232, 200, 76' : '201, 162, 39';
    const dotColor = isDark
      ? 'rgba(212, 175, 55, 0.7)'
      : 'rgba(168, 128, 32, 0.72)';

    if (!reduce) {
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > this.width) {
          p.x = this.width;
          p.vx *= -1;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > this.height) {
          p.y = this.height;
          p.vy *= -1;
        }
      }
    }

    ctx.lineWidth = 1 * this.dpr;
    for (let i = 0; i < this.particles.length; i++) {
      const a = this.particles[i];
      for (let j = i + 1; j < this.particles.length; j++) {
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < linkDistSq) {
          const alpha = (1 - Math.sqrt(d2) / linkDist) * lineAlphaScale;
          ctx.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      if (this.mouseActive) {
        const dx = a.x - this.mouseX;
        const dy = a.y - this.mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < mouseLinkDistSq) {
          const alpha = (1 - Math.sqrt(d2) / mouseLinkDist) * mouseAlphaScale;
          ctx.strokeStyle = `rgba(${mouseRgb}, ${alpha})`;
          ctx.lineWidth = 1.2 * this.dpr;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(this.mouseX, this.mouseY);
          ctx.stroke();
          ctx.lineWidth = 1 * this.dpr;
        }
      }
    }

    ctx.fillStyle = dotColor;
    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}
