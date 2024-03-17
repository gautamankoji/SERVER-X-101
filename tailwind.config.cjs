/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.html', './app/**/*.svelte'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      display: ['Rowdies', 'sans-serif'],
      body: ['Nunito Sans', 'sans-serif'],
      code: ['attribute-mono', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray1: '#f8f8f8',
      gray2: '#dbe1e8',
      gray3: '#b2becd',
      gray4: '#6c7983',
      gray5: '#454e56',
      gray6: '#2a2e35',
      gray7: '#12181b',
      gray8: '#2a2b35',
      peach: '#ff496b',
      peach1: 'hsla(349, 100%, 68%, 1)',
      peach2: 'hsla(349, 80%, 68%%, 0.5)',
      peach3: 'hsla(356, 100%, 66%, 0.5)',
      link: '#0000ee',
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {
      boxShadow: {
        '3xl': '0 5px 20px rgb(0 0 0 / 30%)',
        '4xl': '0 5px 20px rgb(0 0 0 / 90%)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 'medium',
              'font-size': '2.5rem',
              'text-transform': 'uppercase',
            },
            h2: {
              'font-weight': 'medium',
              'font-size': '2rem',
              'text-transform': 'uppercase',
            },
            h3: {
              'font-weight': 'medium',
              'font-size': '1.75rem',
              'text-transform': 'uppercase',
            },
            h4: {
              'font-weight': 'medium',
              'font-size': '1.5rem',
              'text-transform': 'uppercase',
            },
            h5: {
              'font-weight': 'medium',
              'font-size': '1.25rem',
              'text-transform': 'uppercase',
            },
            h6: {
              'font-weight': 'medium',
              'font-size': '1.25rem',
              'text-transform': 'uppercase',
            }
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
};