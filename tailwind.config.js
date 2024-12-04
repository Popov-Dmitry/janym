/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
      },
      fontFamily: {
        "sf-pro": "var(--font-sf-pro)",
        "be-vietnam-pro": "var(--font-be-vietnam-pro)",
      },
      fontSize: {
        "16px": 16,
        "20px": 20,
        "32px": 32,
        "54px": 54,
        "58px": 58
      },
      lineHeight: {
        "17px": 17,
        "21px": 21,
        "23px": 23,
        "34px": 34,
        "54px": 54,
        "58px": 58,
        "60px": 60,
        "68px": 68
      }
    },
  },
  plugins: [],
};
