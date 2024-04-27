// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   // BG
    //   "main-bg": "#2a3447",
    //   "soft-bg": "#384256",
    //   "dark-bg": "#222b3c",
    //   "red-bg": "#ff0000",
    //   "modal-bg": "rgba(0, 0, 0, 0.724)",
    //   bg: "transparent",
    //   //TEXT
    //   "main-color": "white",
    //   "soft-color": "#ddd",
    //   "dark-color": "#2a3447",
    // },
    // maxWidth: {
    //   content: "max-content",
    // },

    extend: {
      gridAutoRows: {
        minmax: "minmax(180px, auto)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
