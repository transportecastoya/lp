/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "castoya-navy": "#0F2E4D",
        "castoya-blue": "#1565C0",
        "castoya-sky": "#01A7C2",
        "castoya-green": "#28A745",
        "castoya-gray": "#6B7280",
        "castoya-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
