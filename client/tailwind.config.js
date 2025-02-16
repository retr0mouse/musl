/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#203446",
        background: "#f4f7fb",
        primary: "#fbbd23",
        secondary: "#94bee5",
        accent: "#57a0e0",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
