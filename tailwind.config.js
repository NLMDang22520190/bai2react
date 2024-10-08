/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {colors: {
      transparent: 'transparent',
      'bluetext': '#249db7',
      'orangetext': '#e2753d',
      'graybg' : '#f3f3f4',
      'yellowbg': '#f7efd2',
      'bluetittlebar':'#2fa1b3',
      'white': "#ffffff",
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },},
  },
  plugins: [],
}