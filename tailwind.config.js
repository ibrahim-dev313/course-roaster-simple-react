module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require('daisyui')],
  theme: {
    // Some useful comment
    fontFamily: {
      'Hyeon': ['Do Hyeon', 'sans-serif']
    },
  },
}
