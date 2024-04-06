/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        primary: ["Poppins"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        "collection-1-aaaaa": "var(--collection-1-aaaaa)",
        "collection-1-bar": "var(--collection-1-bar)",
        "collection-1-good-bar": "var(--collection-1-good-bar)",
        "collection-1-shadow-bar": "var(--collection-1-shadow-bar)",
        "collection-1-warna": "var(--collection-1-warna)",
        "font-color": "var(--font-color)",
        "main-color": "var(--main-color)",
        mine: {
          primary: "#008926",
          secondary: "#003E29",
          basic: "#51B272",
        },
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
        big: "580px",
      },
      backgroundPosition: {
        "top-4": "center top 1rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
