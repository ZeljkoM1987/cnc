import { Inter, Chakra_Petch, Content } from "next/font/google";

import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";
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
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
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
