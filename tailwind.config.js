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
      padding:{
        "6.25":"6.25rem"
      },
      fontFamily:{
        "roboto": "'Roboto', sans-serif",
        "fraunces72": "Fraunces72ptsupersoft,sans-serif",
        "fraunces144": "Fraunces144ptsupersoft,sans-serif",
        "geomanist":"Geomanist,sans-serif",
        "opensans":"'Open Sans',sans-serif"
      },
      backgroundImage:{
        "gradient-main": "linear-gradient(270deg,#302f39,#223240 95%);",
        "gradient-hero": " linear-gradient(90deg,#302f39,#223240);",
        "hero": "url('/bgs/noise10.webp')",
        "hero-1": "url('/bgs/noise11.webp')",
        "noise": "url('/bgs/noise101.jpg')",
        "video":"url('https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-poster-00001.jpg')",
        "cozy": "url('/bgs/noise10.webp'),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url('/cozy/waves-haikei.svg')"
      },
      backgroundSize:{
        "dope":"50px,auto,cover",
        "3.1":"3.125rem",
        "25":"25rem"
      },
      borderRadius:{
        "client-one": "80% 80% 0 100%",
        "client-two": "100% 100% 50% 0",
        "client-three": "100% 0% 60% 60%",
        "client-four": "0% 100% 60% 60%"
      },
      boxShadow:{
        "circle": "0 8px 24px 0 rgb(82 91 115 / 12%)",
        "client-one": "0 10px 24px 0 rgb(45 72 80 / 60%)",
        "client-two": "0 10px 24px 0 rgb(45 72 80 / 70%)",
        "client-three": "0 10px 24px 0 rgb(196 125 87 / 90%)",
        "client-four": "0 10px 24px 0 rgb(196 125 87 / 80%)"
      },
      padding:{
        "6.25":"6.25rem"
      },
      spacing:{
        "6.25":"6.25rem"
      },
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