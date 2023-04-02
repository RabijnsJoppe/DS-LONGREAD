const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      'rood': '#D90000',
      'aqua': '#3CF9DC',
      'wit': '#FFFFFF',
      'zwart': '#000000',
      'grijs': '#808283'
    },
    extend: {
      fontFamily: {
        'libre': ['Libre Franklin', 'sans-serif'],
        'arnhem': ['Arnhem', 'serif']
      },
    },
  },

  plugins: [],
};

module.exports = config;