/** @type {import('tailwindcss').Config} */

const sizes = {
  auto: "auto",
  0: "0px",
  "1px": "1px",
  "2px": "2px",
  "3px": "3px",
  "4px": "4px",
  "5px": "5px",
  "6px": "6px",
  "7px": "7px",
  "8px": "8px",
  "9px": "9px",
  "10px": "10px",
  "11px": "11px",
  "12px": "12px",
  "13px": "13px",
  "14px": "14px",
  "15px": "15px",
  "16px": "16px",
  "17px": "17px",
  "18px": "18px",
  "19px": "19px",
  "20px": "20px",
  "21px": "21px",
  "22px": "22px",
  "23px": "23px",
  "24px": "24px",
  "26px": "26px",
  "27px": "27px",
  "28px": "28px",
  "30px": "30px",
  "32px": "32px",
  "34px": "34px",
  "36px": "36px",
  "38px": "38px",
  "40px": "40px",
  "42px": "42px",
  "44px": "44px",
  "46px": "46px",
  "47px": "47px",
  "48px": "48px",
  "50px": "50px",
  "52px": "52px",
  "53px": "53px",
  "54px": "54px",
  "56px": "56px",
  "58px": "58px",
  "59px": "59px",
  "60px": "60px",
  "63px": "63px",
  "64px": "64px",
  "66px": "66px",
  "68px": "68px",
  "72px": "72px",
  "73px": "73px",
  "77px": "77px",
  "80px": "80px",
  "88px": "88px",
  "100px": "100px",
  "104px": "104px",
  "110px": "110px",
  "117px": "117px",
  "120px": "120px",
  "125px": "125px",
  "134px": "134px",
  "140px": "140px",
  "141px": "141px",
  "146px": "146px",
  "150px": "150px",
  "165px": "165px",
  "166px": "166px",
  "168px": "168px",
  "170px": "170px",
  "178px": "178px",
  "180px": "180px",
  "185px": "185px",
  "192px": "192px",
  "200px": "200px",
  "222px": "222px",
  "240px": "240px",
  "256px": "256px",
  "290px": "290px",
  "295px": "295px",
  "297px": "297px",
  "300px": "300px",
  "320px": "320px",
  "326px": "326px",
  "350px": "350px",
  "354px": "354px",
  "375px": "375px",
  "400px": "400px",
  "424px": "424px",
  "450px": "450px",
  "480px": "480px",
  "486px": "486px",
  "487px": "487px",
  "500px": "500px",
  "550px": "550px",
  "630px": "630px",
  "714px": "714px",
  "720px": "720px",
  "768px": "768px",
  "1200px": "1200px",
  "20%": "20%",
  "30%": "30%",
  "33%": "33%",
  "45%": "45%",
  "47%": "47%",
  "50%": "50%",
  "100%": "100%",
  "80vh": "80vh",
  "95vh": "95vh",
  "100vh": "100vh",
  "100vw": "100vw"
};

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
        ...sizes
      },
      lineHeight: {
        ...sizes
      },
      maxWidth: {
        ...sizes
      },
      minHeight: {
        ...sizes
      },
      minWidth: {
        ...sizes
      },
      height: {
        ...sizes
      },
      width: {
        ...sizes
      },
      padding: {
        ...sizes
      },
      margin: {
        ...sizes
      },
      gap: {
        ...sizes
      }
    },
  },
  plugins: [],
};
