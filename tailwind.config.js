/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#dfd7d3',
      'on-primary': '#000',
      'primary-tonal': '#fff',
      'on-primary-tonal': '#dfd7d3',
      secondary: '#292d2d',
      'on-secondary': '#dfd7d3',
      background: '#fff',
      gold: "#FFB400",
      shadow: "#666"
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    aspectRatio: {
      square: "1 / 1",
      video: "297 / 210"
    }
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|color|border|fill)-.*/
  }]
}

