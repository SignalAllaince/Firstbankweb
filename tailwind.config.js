/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        brand: {
          blue: "#003B65",
          lightblue: "#05629F",
          accent: "#f0bd2d",
          darkest: "#142633",
          dark: "#506473",
          medium: "#879AAB",
          light: "#DAE8F2",
          lightest: "#F5F8FA",
          primary: "#0072BC",
          grayt: "#B2B2C2",
          graybg: "#F4F5F9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
