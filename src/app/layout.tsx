'use client';

import { Poppins } from "next/font/google";
import "./globals.css"; 
import Headertop from "@/components/menu/Headertop";
import HeaderBottom from "@/components/menu/Headerbottom";
import Header from "@/components/menu/Header";
import Footer from "@/components/menu/Footer";
import { Provider } from 'react-redux';

import store from '@/store';

// Load Poppins font from Google
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// RootLayout component
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
      
            <Headertop />
            <Header />
            <HeaderBottom />
            {children}
            <Footer />
      
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
