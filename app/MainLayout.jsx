"use client";

import React from "react";
import { Providers } from "./providers";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
