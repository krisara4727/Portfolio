/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["rubik", "Rubik", "ui-sans-serif", "system-ui"],
      roboto: ["Roboto", "roboto", "sans-serif", "system-ui"],
    },
    extend: {
      padding: {
        "2px": "2px",
        "3px": "3px",
      },
      height: {
        "920px": "920px",
      },
    },
  },
  plugins: [],
};
