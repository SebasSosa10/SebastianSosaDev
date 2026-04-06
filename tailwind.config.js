/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          300: '#f0d78c',
          400: '#e8c84c',
          500: '#d4af37',
          600: '#b8962e',
        },
      },
      backgroundImage: {
        'grid-hero':
          'linear-gradient(to right, rgba(212, 175, 55, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        heroFadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroSlideIn: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        lineReveal: {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        statusGlow: {
          '0%, 100%': {
            boxShadow:
              '0 0 16px rgba(52, 211, 153, 0.28), 0 0 36px rgba(16, 185, 129, 0.12), inset 0 0 18px rgba(52, 211, 153, 0.08)',
          },
          '50%': {
            boxShadow:
              '0 0 28px rgba(52, 211, 153, 0.5), 0 0 48px rgba(16, 185, 129, 0.22), inset 0 0 22px rgba(52, 211, 153, 0.14)',
          },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gentleShine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.65' },
        },
        goldShimmer: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.15)' },
        },
        techMarquee: {
          to: { transform: 'translate3d(-50%, 0, 0)' },
        },
        aboutCardIn: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        /** Brillo que cruza la barra de progreso (efecto “cargando” dorado) */
        progressGoldSheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(420%)' },
        },
      },
      animation: {
        'hero-fade-up': 'heroFadeUp 0.7s ease-out both',
        'hero-fade-up-delay': 'heroFadeUp 0.75s ease-out 0.12s both',
        'hero-fade-up-delay-2': 'heroFadeUp 0.75s ease-out 0.24s both',
        'hero-fade-up-delay-3': 'heroFadeUp 0.75s ease-out 0.36s both',
        'hero-fade-up-delay-4': 'heroFadeUp 0.75s ease-out 0.48s both',
        'hero-fade-up-delay-5': 'heroFadeUp 0.75s ease-out 0.6s both',
        'hero-fade-up-delay-6': 'heroFadeUp 0.75s ease-out 0.72s both',
        'hero-slide-in': 'heroSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both',
        'line-reveal': 'lineReveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both',
        'line-reveal-delay':
          'lineReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both',
        'status-glow': 'statusGlow 2.6s ease-in-out infinite',
        'hero-float': 'heroFloat 5s ease-in-out infinite',
        'gentle-shine': 'gentleShine 4s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'card-enter': 'heroFadeUp 0.55s ease-out both',
        'tech-marquee': 'techMarquee 55s linear infinite',
        'tech-head-line': 'lineReveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both',
        'about-card-in':
          'aboutCardIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) both',
        'about-line-secondary':
          'lineReveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both',
        'progress-gold-sheen': 'progressGoldSheen 1.75s linear infinite',
      },
    },
  },
  plugins: [],
};
