/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        black: "hsl(0, 0%, 8%)",
        green: "hsl(153, 71%, 59%)",
        darkGrey: "hsl(0, 0%, 14%)",
        grey: "hsl(0, 0%, 85%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        headerXL: "88px",
        headerL: "48px",
        headerM: "24px",
        bodyL: "18px",
      },
      letterSpacing: {
        headerXL: "-2.5px",
        headerL: "-1.5px",
      },
      lineHeight: {
        headerXL: "88px",
        headerL: "56px",
        headerM: "32px",
        bodyL: "28px",
      },
    },
  },
  plugins: [],
};
