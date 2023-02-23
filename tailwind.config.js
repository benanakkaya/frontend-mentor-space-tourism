/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      container:{
        center: true,
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif']
      },
      fontSize: {
        hed1: "150px",
        hed2: "100px",
        hed3: "56px",
        hed4: "32px",
        hed5: "26px",
        subhead1: "28px",
        subhead2: "14px",
        navtext: "16px",
        body: "18px"
      },
      letterSpacing:{
        hed5letter: "4.75px",
        subhead2letter: "2.35px",
        navletter : "2.7px"
      },
      colors:{
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        customWhite: "#FFFFFF"
      },
      width: {
        dekstopW: "1440px",
        tabletW: "768px",
        mobileW: "375px",
        navbarW: "1385px",
        blurBar: "830px",
        line: "473px",
        circleW: "274px",
        ceffectW: "450px"
      },
      height:{
        dekstopH: "900px",
        tabletH: "1024px",
        mobileH: "667px",
        navbarH: "96px",
        px1: "1px",
        circleH: "274px",
        ceffectH: "450px"
      },
      backgroundImage:{
        homeDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
        destinationDesktop: "url('/src/assets/destination/background-destination-desktop.jpg')",
        crewDesktop: "url('/src/assets/crew/background-crew-desktop.jpg')",
        technologyDesktop: "url('/src/assets/technology/background-technology-desktop.jpg')",
        homeTablet: "url('/src/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/src/assets/home/background-home-mobile.jpg')",
      },
      backdropBlur:{
        xs: "0.625"
      },
      minHeight:{
        desktop: "900px"
      }
    },
  },
  plugins: [],
}