/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFonts: ["Poppins"],
      },
      width: {
        lgBoxContainer: "670px",
        customButtonWidth: "72px",
      },
      height: {
        customButtonHeight: "72px",
      },
      backgroundColor: {
        boxBg: "hsl(0, 0%, 100%)",
        primaryBg: "hsl(0, 0%, 86%)",
        customButtonBg: "hsl(259, 100%, 65%)",
      },
      borderRadius: {
        customBoxRadios: "4% 4% 30% 4%",
        customButtonRadius: "50% 50% 50% 50%",
      },
      fontSize: {
        mdCustomInputsSize: "32px",
        defaultFontSmall: "22px",
        customLabelSubSize: "11px",
        customErrorSize: "10px",
        customBigHeading: "60px",
        customSmSize: "35px",
      },
      colors: {
        subBg: "hsl(0, 0%, 94%)",
        customTextHeadingColor: "hsl(259, 100%, 65%)",
        customErrorColor: "hsl(0, 100%, 67%)",
      },
    },
  },
  plugins: [],
};
