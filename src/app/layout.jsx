import { Providers } from "./providers";
import Header from "../components/Header";
import "../styles/main.scss";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        backgroundColor:'#02001E'
      }}>
          <Providers>
            <Header />
            {children}
          </Providers>
      </body>
    </html>
  );
}
