/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      primary: {
        100: "#FDF2E4",
        200: "#FBE3C9",
        300: "#F5CCAB",
        500: "#E09370",
        700: "#A14B38",
        900: "#6B1915",
      },
      neutral: {
        100: "#F4F4F4",
        200: "#E9E9E9",
        300: "#BDBDBD",
        500: "#262626",
        700: "#1B1314",
        900: "#12070B",
      },
      discount: "#FF4530"
    },
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "610px",
      // => @media (min-width: 610px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
