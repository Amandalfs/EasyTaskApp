import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        primaryColors: {
          1: "#4D0084",
          2: "#8E00F4",
          3: "#B431FF",
          4: "#DDA3FF",
          5: "#F4E3FF",
        },
        neutral: {
          1: "#0D0D0D",
          2: "#3C3C3C",
          3: "#7A7A7A",
          4: "#BEBEBE"
        }
      },
    },
  },
  plugins: [],
};
export default config;
