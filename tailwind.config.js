/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        freeman: ["var(--font-freeman)"],
      },
      screens: {
        "2xlarge": { max: "1500px" },
        xlarge: { max: "1199px" },
        large: { max: "992px" },
        medium: { max: "767px" },
        small: { max: "576px" },
        xsmall: { max: "425px" },
        "2xsmall": { max: "375px" },
        "3xsmall": { max: "321px" },
      },
    },
  },
  plugins: [],
};
