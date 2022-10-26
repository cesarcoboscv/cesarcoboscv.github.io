/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'karla':['Karla'],
      }
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./tailwind.css -o ./assets/css/styles.css --watch