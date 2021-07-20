module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    boxShadow: {
      "cust-blue":
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(26,26,105,0.41)",
    },
    letterSpacing: {
      "cust-wider": ".75em",
      "cust-prompt-wider": ".5em"
    },
    extend: {
      fontFamily: {
        'Prompt': ['Prompt', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
