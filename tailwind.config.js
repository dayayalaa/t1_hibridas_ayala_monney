/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '25': '6.25rem',
      },
      gridTemplateRows: {
        'layout': '64px 1fr 100px',
      }
    },
  },
  plugins: [],
}
