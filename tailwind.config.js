/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './blog/*.{html,js}',
    './projects/*.{html,js}',
    './portfolio/*.{html,js}',
    './cv/*.{html,js}',
    './contact/{*.html,js}'
    
  ],
  theme: {
    extend: {},
    fontFamily: {
      karla:['Karla', 'sans-serif'],
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/style.css --watch