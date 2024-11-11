"use client";
import { Inter, Chakra_Petch, Content } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar2 } from "./components/navbar/Navbar2";
import { Footer1 } from "./components/footer/Footer1";
 import i18n from '../../i18n'; 


const inter = Inter({ subsets: ["latin"] });
const chakra_Petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

/*export const metadata = {
  title: "Hefest CAM - CNC obrada metala",
  description: "CNC obrada metala. Gradiška, Banja Luka, Glodanje, Tokarenje",
 keywords:"CNC obrada metala, obrada metala Gradiška, CNC obrada Banjaluka, CNC glodanje, pouzdan CNC partner",
 robots: "index, follow",
 canonical: "https://www.hefestcam.com/"

  
};

*/



export default function RootLayout({ children }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem('language') || 'sr'; // podrazumevani jezik
    i18n.changeLanguage(language);
  }, [i18n]);


  return (
    <html lang="en">

      <Head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          
        />
       <title>HEFEST CAM-CNC obrada metala</title>
        <meta name="description" content="Pouzdan partner za CNC obradu metala" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="CNC obrada metala, obrada metala Gradiška, CNC obrada Banjaluka, CNC glodanje, pouzdan CNC partner" />
        <link rel="canonical" href="https://www.hefestcam.com/" /> 
         
      
      </Head>
       
      
      
      <body className={`${chakra_Petch.variable}`}>
        {/*navbar */}
        <Navbar2></Navbar2>
        <main>{children}</main>
        {/*footer*/}
        <Footer1></Footer1>
      </body>
    </html>
  );
}
