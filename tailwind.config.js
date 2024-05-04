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
    },
    extend: {},
  },
  plugins: [],
}