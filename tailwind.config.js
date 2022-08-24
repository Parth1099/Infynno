/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
        // boxShadow : {
        //   'box-shadow': '0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)',
        // }


    },
  },
  plugins: [],
}
