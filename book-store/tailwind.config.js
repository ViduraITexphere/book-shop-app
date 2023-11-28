/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#F87171",
        secondary: "#FBBF24",
        accent: "#60A5FA",
        neutral: "#F3F4F6",
        dark: "#0d141b",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
