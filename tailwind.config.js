/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        olive: {
          50: '#f6f7f0',
          100: '#e7ebd6',
          200: '#cfd7ad',
          300: '#b0bd7f',
          400: '#93a259',
          500: '#76863e',
          600: '#5b6a2f',
          700: '#465227',
          800: '#3a4322',
          900: '#323a20',
        },
        wine: {
          50: '#fbf3f4',
          100: '#f7e3e6',
          200: '#eecbd1',
          300: '#dfa1ac',
          400: '#cb6e80',
          500: '#b34459',
          600: '#9c2f47',
          700: '#7e253a',
          800: '#6a2334',
          900: '#5a2130',
        },
        gold: {
          400: '#d8b24c',
          500: '#c8a04b',
          600: '#a9842f',
        },
        cream: '#ffffff',
        ink: '#1a1a1a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -18px rgba(31, 36, 25, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
