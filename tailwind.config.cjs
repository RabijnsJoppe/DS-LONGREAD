const config = {
  darkMode: 'media',

  content: ["./src/**/*.{html,js,svelte,ts}", './public/index.html',
    './index.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        'libre': ['Libre Franklin', 'sans-serif'],
        'arnhem': ['Arnhem', 'serif']
      },
      colors: {
        'rood': '#D90000',
        'aqua': '#3CF9DC',
        'wit': '#FFFFFF',
        'zwart': '#000000',
        'grijs': '#808283'
      },
    },
  },

  plugins: [],
};

module.exports = config;