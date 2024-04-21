/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      maxWidth: {
        content: "max-content",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
