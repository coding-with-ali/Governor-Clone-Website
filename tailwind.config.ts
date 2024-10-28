import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004E83",
        secondary: "#b9d8f3",
        backgroundImage: {
          'custom-bg': "url('/bg_house.jpeg')",
        },
  
      },
    },
  },
  plugins: [],
};
export default config;
