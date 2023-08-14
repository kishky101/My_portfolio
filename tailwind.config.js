/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        'l-primary': "#F0F3F6",
        secondary: "#aaa6c3",
        'l-secondary': "#F0F0F0",
        tertiary: "#151030",
        'l-tertiary': "#EAEAFF",
        "black-100": "#100d25",
        "l-black-100": "#ECEAE6",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        't-secondary': "#333333",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'l-card': "0px 35px 120px -15px #f0f0f7",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};