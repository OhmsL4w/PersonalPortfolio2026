import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lighter Forest Green - Primary
        forest: {
          darker: '#2D5F47',
          dark: '#3A6B52',
          DEFAULT: '#4A7F63',
          light: '#5A9374',
        },
        // Rich Brown - Accent
        cognac: {
          darker: '#3D2817',
          dark: '#5C3D2E',
          DEFAULT: '#7A5239',
          light: '#8C6D46',
        },
        // Warm Neutrals
        cream: {
          darker: '#E8DCC8',
          DEFAULT: '#F5F1E8',
          lighter: '#FAF8F3',
        },
        // Metallic Accents
        gold: {
          dark: '#B8962E',
          DEFAULT: '#D4AF37',
          light: '#E4C558',
        },
        bronze: {
          dark: '#6B5534',
          DEFAULT: '#8C6D46',
          light: '#A58B5F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'beam': 'beam 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.5)' },
        },
        beam: {
          '0%': { transform: 'translateY(0) scaleY(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scaleY(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
