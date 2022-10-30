/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
    	backgroundImage: {
        'LA': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
        'bali': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
        'chicago': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
        'europe': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
        'iceland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
        'miami': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
        'newYork': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
        'norway': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
        'switzerland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
        'sydney': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sydney.jpg')",
        'yosemite': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'san-serif']
      }
    },
  },
  plugins: [],
}
