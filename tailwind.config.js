/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
      'markazi': ['Markazi Text', 'serif'],
      'Rubik':["Rubik Storm, system-ui"],
      'Grechen':["Grechen Fuemen, cursive"],
      "IM":[ "IM Fell Double Pica, serif"]
    },
    extend: {},
  },
  plugins: [],
}