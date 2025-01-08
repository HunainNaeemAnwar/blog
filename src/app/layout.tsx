import type { Metadata } from "next";
import { SearchProvider } from '../context/SearchContext'
import {
  Geist,
  Geist_Mono,
  Poppins,
  Oswald,
  Inter,
  Roboto,
  
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const oswald = Oswald({
  variable: "--font-owsald",
  subsets: ["latin"],
  weight: ["300", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "700"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SearchProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${oswald.variable} ${inter.variable} ${roboto.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer/>
        </body>
      </html>
    </SearchProvider>
  );
}
