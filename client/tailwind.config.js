/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-red": "#D70403",
        "logo-pink": "#FDB5A7",
        "logo-blue": "#0C8CD5",
        "logo-black": "#000000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
