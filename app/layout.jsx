import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat, Poppins } from 'next/font/google';
import { aeronaut } from "./font";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import MobileNavbar from "@/components/MobileNavbar";
import Head from "next/head";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "Digital Marketing Services  | Affordable 360° Marketing Company",
  description: "Brandslightdigital offers complete 360° digital marketing services in India. From small business to performance marketing, grow your brand with us today!",
  other: {
    "google-site-verification": "pjkcsVzJmKIJLUqw_Vbmyj31zPNW1RihZQAkbm7qekI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${aeronaut.variable} ${montserrat.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
<Head>
          <link rel="icon" href="/favicon.ico" />  {/* Favicon link yahan daalein */}
        </Head>
        <MobileNavbar className="block md:hidden"/>
        <Navbar className="hidden md:block"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
