/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#212121",
          "200": "#1a1a1a",
        },
        mediumspringgreen: {
          "100": "#20ce70",
          "200": "rgba(32, 206, 112, 0.1)",
        },
        seagreen: {
          "100": "#207748",
          "200": "rgba(32, 119, 72, 0.15)",
          "300": "rgba(32, 119, 72, 0.5)",
        },
        silver: "rgba(186, 186, 194, 0.5)",
        white: "#fff",
        darkslategray: "#333",
        darkgray: "rgba(149, 149, 154, 0.5)",
        chocolate: "#ec7a2a",
        tomato: "#ef5858",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "2xs-8": "10.8px",
      },
    },
    fontSize: {
      "11xl": "30px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
