"use client"
import React from "react";
import Script from "next/script";
import { Providers } from "./Providers";
import Header from "./Header";
import "../styles/main.scss";

const ClientRootLayout = ({ children }) => {
  return (
    <html lang="en" className="sr">
      <body
        style={{
          backgroundColor: "#02001E",
        }}
      >
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
        </Script>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default ClientRootLayout;