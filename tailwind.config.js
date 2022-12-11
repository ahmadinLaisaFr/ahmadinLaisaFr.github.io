/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ungu: "#5267DF",
        merah: "#FA5959",
        "abu-abu": "#61646e",
        putih: "#F7F7F7",
        primer: "#242A45",
        "primer-gelap": "#0e1120",
        secondary: "#4bbca5",
        "secondary-gelap": "#4ea896",
        tersier: "#de3b3b",
        "tersier-gelap": "#9d3333",
        mainText: "#c4c4c4",
      },
      height: {
        500: "500px",
        86: "24rem",
      },
      keyframes: {
        nos: {
          "0%, 100%": { transform: "translateX(700px)" }
        },
      },
      animation: {
        nos: "nos 20s",
      },
    },
  },
  plugins: ["require('flowbite/plugin')"],
};
