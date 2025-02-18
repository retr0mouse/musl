/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f4f7fb",
        primary: "#fbbd23"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["bumblebee"],
  },
};
