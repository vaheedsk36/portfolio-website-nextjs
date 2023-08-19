import { Providers } from "./providers";
import Header from "../components/Header";
import "../styles/main.css";
import "../styles/layout.css";


export default function RootLayout({ children }) {
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
}
