/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Avenir",
          "Montserrat",
          "Corbel",
          "URW Gothic",
          "source-sans-pro",
          "sans-serif",
        ],
        // ... include other font families if needed
      },
      colors: {
        // Light Theme Colors
        bearGotham: {
          primary: "#6aa9b9", // Dark text
          secondary: "#2db98c", // Light grey text
          background: "#10151c",
          accent: "#e47b57", // Accent color similar to Bear's yellow
          // Add other colors as needed
        },
        // Dark Theme Colors
        bearDark: {
          primary: "#FFFFFF", // White text
          secondary: "#A4A4A4", // Light grey text
          background: "#1C1B1B", // Dark background
          accent: "#FFD580", // Accent color similar to Bear's yellow
          // Add other colors as needed
        },
      },
      // Add other theme customizations like fontFamily if needed
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
