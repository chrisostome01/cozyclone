/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cozy-gray":{
          "100":"#e4ded5"
        }
      },
      fontFamily:{
        "roboto": "'Roboto', sans-serif"
      },
      backgroundImage:{
        "gradient-main": "linear-gradient(270deg,#302f39,#223240 95%);",
        "gradient-hero": " linear-gradient(90deg,#302f39,#223240);",
        "hero": "url('/noise10.webp')",
        "hero-1": "url('/noise11.webp')"
      }
      ,
      maxHeight:{
        "87":"87.5rem"
      },
      maxWidth:{
        "87":"87.5rem",
        "312":"312.5rem"
      },
      height:{
        "87":"87.5rem"
      },
      width:{
        "87":"87.5rem"
      }
    },
  },
  plugins: [],
}