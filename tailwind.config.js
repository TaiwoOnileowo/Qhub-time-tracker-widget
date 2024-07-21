/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      ip: "200px",
      xs: "250px",
      ss: "400px",
      ts: "600px",
      msm: "700px",
      sm: "768px",
      bsm: "800px",
      md: "1060px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};
