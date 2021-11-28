module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "serif"],
    },
    extend: {
      colors: {
        darkBg: "#101015",
        medBg: "#393346",
        normalBg: "#55555a",
        lightBg: "#ffffff",
        darkBlue: "#012a4a",
        medBlue: "#023e8a",
        normalBlue: "#2a6f97",
        lightBlue: "#468faf",
      },
      screens: {
        sm: "375px",
        md: "480px",
        lg: "547px",
        xl: "768px",
        xxl: "1024px",
        xxxl: "1280px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
