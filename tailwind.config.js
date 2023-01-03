/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            opacity: '1',
            transform: 'translateY(-25%)'
          },
          '50%': {
            opacity: '.5',
            transform: 'translateY(0)'
          }
        }
      },
      wiggle: {
        '0%, 100%': {
          opacity: '1',
          transform: 'translateY(-25%)'
        },
        '50%': {
          opacity: '.5',
          transform: 'translateY(0)'
        }
      },
      animation: {
        wiggle: 'wiggle 2s linear infinite'
      }
    }
  },
  plugins: []
}
