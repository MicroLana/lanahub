// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28A745',
        secondary: '#F8F9FA',
        accent: '#E2E6EA',
        dark: '#343A40',
        light: '#FFFFFF'
      },
      spacing: {
        section: '4rem',
        'section-lg': '6rem',
        card: '1rem'
      },
      fontSize: {
        h1: ['2.5rem', { lineHeight: '3rem' }],
        h2: ['1.875rem', { lineHeight: '2.25rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }]
      },
      borderRadius: {
        lg: '0.75rem'
      },
      boxShadow: {
        card: '0 4px 6px rgba(0,0,0,0.1)',
        'card-hover': '0 6px 12px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
};
