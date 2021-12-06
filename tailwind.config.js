module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'RaglanSans': ['RaglanSans', 'sans-serif'],
      },
      backgroundColor: {
        'header-bg': 'rgba(30, 30, 36, 3)'
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
