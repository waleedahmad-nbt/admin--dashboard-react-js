/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#CB3CFF",
        },
        secondary: {
          1: "#101935",
          2: "#8951FF",
          3: "#21C3FC",
          4: "#0E43FB",
          5: "#FDB52A",
        },
        neutral: {
          800: "#081027",
          700: "#0A1330",
          600: "#0B1739",
          500: "#7E89AC",
          400: "#AEB9E1",
          300: "#D1DBF9",
          200: "#D9E1FA",
          100: "#FFFFFF",
        },
        darkGray: "#343B4F",
        success: "#14CA74",
        "success-light": "#05C16833",
        alert: "#FF5A65",
        "alert-light": "#FF5A6533",
        cyanBlue: "#00C2FF",
        Purple: "#9A91FB",
      },
    },
  },
  plugins: [],
};
