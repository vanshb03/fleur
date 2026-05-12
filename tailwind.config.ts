import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-up-form': 'fadeUpForm 0.35s ease',
        'fade-up-form-slow': 'fadeUpForm 0.4s ease',
        'fade-up-toast': 'fadeUpToast 0.25s ease',
        'spin-slow':  'spin 0.9s linear infinite',
        'spin-fast':  'spin 1s linear infinite',
        'blink-0':    'blink 1.2s 0s infinite',
        'blink-1':    'blink 1.2s 0.2s infinite',
        'blink-2':    'blink 1.2s 0.4s infinite',
      },
      colors: {
        bg: 'var(--color-bg)',
        'bg-2': 'var(--color-bg-2)',
        'bg-3': 'var(--color-bg-3)',
        'bg-4': 'var(--color-bg-4)',
        text: 'var(--color-text)',
        'text-2': 'var(--color-text-2)',
        'text-3': 'var(--color-text-3)',
        accent: 'var(--color-accent)',
        'accent-2': 'var(--color-accent-2)',
        'accent-dim': 'var(--color-accent-dim)',
        warn: 'var(--color-warn)',
        'warn-dim': 'var(--color-warn-dim)',
        purple: 'var(--color-purple)',
        'purple-dim': 'var(--color-purple-dim)',
        blue: 'var(--color-blue)',
        'blue-dim': 'var(--color-blue-dim)',
        line: 'var(--color-line)',
        'line-2': 'var(--color-line-2)',
        'line-3': 'var(--color-line-3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
