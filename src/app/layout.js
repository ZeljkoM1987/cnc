import { Inter, Chakra_Petch, Content } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { Navbar2 } from "./components/navbar/Navbar2";
import { Footer1 } from "./components/footer/Footer1";


const inter = Inter({ subsets: ["latin"] });
const chakra_Petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});
 

export const metadata = {
  title: "Hefest CAM - CNC obrada metala",
  description: "CNC obrada metala. Gradiška, Banja Luka, Glodanje, Tokarenje",
 keywords:"CNC obrada metala, obrada metala Gradiška, CNC obrada Banjaluka, CNC glodanje, pouzdan CNC partner",
 robots: "index, follow",
 canonical: "https://www.hefestcam.com/"

  
};


export default function RootLayout({ children }) {
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
          <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content={metadata.robots} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonical} />
         
      
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
