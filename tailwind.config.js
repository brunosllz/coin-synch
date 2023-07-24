/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      xs: [
        '0.75rem', // 12px
        {
          lineHeight: '0.875rem',
          letterSpacing: '0em',
        },
      ],
      paragraph: [
        '0.875rem', // 14px
        {
          lineHeight: '1.5rem',
          letterSpacing: '0em',
        },
      ],
      sm: [
        '0.875rem', // 14px
        {
          lineHeight: '1rem',
          letterSpacing: '0em',
        },
      ],
      md: [
        '1rem', // 16px
        {
          lineHeight: '1.5rem',
          letterSpacing: '0em',
        },
      ],
      lg: [
        '1.25rem', // 20px
        {
          lineHeight: '2rem',
          letterSpacing: '0em',
        },
      ],
      xl: [
        '1.5rem', // 24px
        {
          lineHeight: '2rem',
          letterSpacing: '0em',
        },
      ],
      '2xl': [
        '2rem', // 32px
        {
          lineHeight: '2.5rem',
          letterSpacing: '0em',
        },
      ],
      '3xl': [
        '2.5rem', // 40px
        {
          lineHeight: '3rem',
          letterSpacing: '-0.01em',
        },
      ],
      '4xl': [
        '3rem', // 48px
        {
          lineHeight: '3.5rem',
          letterSpacing: '-0.01em',
        },
      ],
    },
    colors: {
      primary: {
        100: '#FFF6E8',
        200: '#FFE1B5',
        300: '#FFCD82',
        400: '#FFB94F',
        500: '#FBAB34',
        600: '#E09422',
        700: '#AD721A',
        800: '#7A4E0C',
        900: '#472C04',
      },
      secondary: {
        100: '#F6F6F6',
        200: '#F4F3F8',
        300: '#E0DEEA',
        400: '#ACABB7',
        500: '#8C8A97',
        600: '#716F7A',
        700: '#5F5C6B',
        800: '#4E4B59',
        900: '#33303E',
      },
      tertiary: {
        100: '#E8FAF1',
        200: '#D1F6E3',
        300: '#A4EDC6',
        400: '#8DE8B8',
        500: '#1BD171',
        600: '#18B863',
        700: '#149E55',
        800: '#0E6B3A',
        900: '#07381E',
      },
      quaternary: {
        100: '#FFF2F3',
        200: '#FFCFD0',
        300: '#FF9497',
        400: '#FA7D80',
        500: '#EC3237',
        600: '#D42D31',
        700: '#A12226',
        800: '#6E171A',
        900: '#3B0C0E',
      },
      white: '#FFFFFF',
      black: '#000000',
      'text-base': '#5D6670',
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'newsletter-pattern': "url('/img/newsletter-pattern.svg')",
        'newsletter-gradient':
          'linear-gradient(138deg, #FBAB34 0%, #AD721A 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
