/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-mind": "#3e9eb0",
        "blue-text": "#12263b",
        "green-life": "#69e3ba",
        "green-lime": "#a3ffa3",
        "green-moss": "#348066",
      }
    },
  },
  plugins: [],
}

