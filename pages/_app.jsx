import Head from 'next/head'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <link rel="shortcut icon" href='/icons/icon.png'  type="image/x-icon"/>
        <title>Cozy: Honest, real-world digital design & marketing</title>
      </Head>
      <Component {...pageProps} />
    </> 
  )
}

export default MyApp
