/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000017",
      white: {
        DEFAULT: "#FFFFFF",
        100: "#EFEFEF",
        200: "#E0E0E0",
      },
      pale: "#BDBDBD",
      red: "#D70601",
      blue: "#0DB8E3",
      grey: "#292F34",
      bg: "#0e171b;",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: ["12px", { lineHeight: "16px" }],
      sm: ["14px", { lineHeight: "18px" }],
      base: ["16px", { lineHeight: "20px" }],
      lg: ["18px", { lineHeight: "24px" }],
      xl: ["21px", { lineHeight: "28px" }],
      "2xl": ["24px", { lineHeight: "30px" }],
      "3xl": ["26px", { lineHeight: "32px" }],
      "4xl": ["30px", { lineHeight: "36px" }],
      "5xl": ["32px", { lineHeight: "40px" }],
      "6xl": ["36px", { lineHeight: "45px" }],
      "7xl": ["40px", { lineHeight: "50px" }],
      "8xl": ["48px", { lineHeight: "60px" }],
      "9xl": ["58px", { lineHeight: "87px" }],
    },
    screens: {
      "2xs": "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        s0: "4px",
        s1: "8px",
        "s1.5": "12px",
        s2: "16px",
        "s2.5": "20px",
        s3: "24px",
        s4: "32px",
        s5: "40px",
        s6: "48px",
        s7: "56px",
        s8: "64px",
        s9: "72px",
        s10: "80px",
        s11: "88px",
        s12: "96px",
        s13: "104px",
        s14: "112px",
        s15: "120px",
        s16: "128px",
        s17: "136px",
        s18: "144px",
        s19: "152px",
        s20: "160px",
        s21: "168px",
        s22: "176px",
        s23: "184px",
        s24: "192px",
        s25: "200px",
      },
    },
  },
  plugins: [],
};
