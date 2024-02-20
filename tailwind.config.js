module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#e8edf2",
          100: "#d9d9d9",
          200: "#bcc6cc",
          500: "#4f7a93",
          "50_01": "#eff2f4",
          "500_01": "#637787",
        },
        gray: {
          50: "#f7f9f9",
          200: "#e5e8ea",
          300: "#dbe0e5",
          900: "#0c161c",
          "900_01": "#111416",
        },
        blue: { 600: "#2193dd" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
