'use client'

import React from "react";
import { Providers } from "./providers";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default MainLayout;
