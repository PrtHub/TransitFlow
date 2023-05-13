/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-200": "#1C1F35",
        "black-300": "#091242",
        "light-gray": "#666C89"
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
