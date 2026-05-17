/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        regular: ["poppinsRegular"],
        medium: ["poppinsMedium"],

        kalniaMedium: ["kalniaMedium"],
        kalniaBold: ["kalniaBold"],
      },
    },
  },

  plugins: [],
};
