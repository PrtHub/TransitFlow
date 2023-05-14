/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-200": "#1C1F35",
        "black-300": "#091242",
        "light-gray": "#666C89",
        "light-gray-100": '#F4F4F4',
        "dark-yellow": "#FFBE34",
        "dark-yellow-100": "#FFB82B",
        "dark-yellow-200": '#FFB629'
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Krub: ['Krub', 'sans-serif'],
        League: ['League Spartan', 'sans-serif']
      },
      backgroundColor: {
        'gradient': 'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)'
       }
    },
  },
  plugins: [],
};
