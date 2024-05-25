/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["rubik", "Rubik", "ui-sans-serif", "system-ui"],
      roboto: ["Roboto", "roboto", "sans-serif", "system-ui"],
    },
    extend: {
      scrollbar: {
        hide: "scrollbar-hide",
      },
      padding: {
        "2px": "2px",
        "3px": "3px",
      },
      height: {
        "920px": "920px",
        "500px": "500px",
      },
      colors: {
        silver: "#C0C0C0",
        gold: "#FFD700",
        diamond: "#FFD700",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For Chrome, Safari, and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
