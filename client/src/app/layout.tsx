import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "/public/css/globals.css";

import Navbar from "@/components/layout/Navbar";
import CookiesComponent from "@/components/CookiesComponent/cookies";


export const metadata: Metadata = {
  title: "Capital Flow - accounting software",
  description: "CapitalFlow is a small business suite for accounting and tax records keeping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="CapitalFlow is a small business suite for accounting and tax records keeping" />
        <meta name="keywords" content="taxes, expences, income, budget, budget projections, bills, business contacts, inventory" />
        <meta name="author" content="Dmitri Saltanovich" />
        <meta name="generator" content="" />
        <meta name="robots" content="index, follow, cache" />
       
        <link rel="icon" href="/public/favicon.ico" type="image/png" sizes="32x32" />     

         <title>Capital Flow - accounting software</title>       
      </head>

      <body>
        <CookiesComponent />
            
          {/* Navbar */}
          <Navbar />

          {children}       
      </body>

    </html>
  );
}
