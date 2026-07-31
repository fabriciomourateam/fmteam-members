import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { 1: '#FFE9A8', 2: '#FCD404', 3: '#C9920A' },
        ink: { DEFAULT: '#0e0e0e', soft: '#141414', card: '#1a1a1a' },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { 'fade-up': 'fade-up .35s ease-out both' },
    },
  },
  plugins: [],
} satisfies Config;
