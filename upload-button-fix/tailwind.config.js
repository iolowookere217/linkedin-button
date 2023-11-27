/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#DB7811",
        secondary: "#F9A72B70",
        tertiary: "rgba(219, 120, 17, 0.04)",
        "linkedin-nav": "#fff",
        background: "#f4f2ee",
        dark: "#100801",
        gray1: "#1A202C",
        yellow1: "#F6A121",
        orange1: "#A54F00",
        lemon: "#AFECDA",
        green: "#198754",
        red: "#DC3545",
        pink: "#FFE0E3",
        ash: "#9D9FA1",
        "dark-blue": "#080040",
        "dark-yellow": "#CA941C",
        "light-red": "#FD2C10",
        "light-yellow": "#F7BE3D",
        "light-green": "#3BCA19",
        "light-ash": "#737373",
      },
    },
  },
  plugins: [],
};
