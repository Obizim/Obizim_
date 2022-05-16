module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'header-bg': 'rgba(30, 30, 36, 3)',
        'burger-bg': '#0d0d0e'
      },
      borderColor: {
        header_bg: 'rgba(255, 255, 255, 0.1)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
