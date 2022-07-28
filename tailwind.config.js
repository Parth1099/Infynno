/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-rgba": "rgb(0, 18, 64)",
        "active-rgba": "rgb(255, 80, 0)",
        "img-card" : "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9))",
      
      },
    },
  },
  plugins: [],
};
