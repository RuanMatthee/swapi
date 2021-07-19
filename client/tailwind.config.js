module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      'cust-blue': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0,206,255,0.78)',
    },
    letterSpacing: {
      'cust-wider': ".75em"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
