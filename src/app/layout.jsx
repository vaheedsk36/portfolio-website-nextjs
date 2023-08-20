"use client"
import { Providers } from "./providers";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import "../styles/main.scss";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#02001E",
        }}
      >
        <Providers>
          {pathname !== "/" && <Header />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
