module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./themes/**/*.{html,js}",
    "./content/**/*.{md,html}"
  ],
  theme: {
    extend: {
      colors: {
        intelblue: '#0071C5',   // Intel blue
        accent: '#01B8F1',       // Intel cyan accent
        intelaltblue: '#0068B5'
      }
    }
  },
  plugins: []
}
