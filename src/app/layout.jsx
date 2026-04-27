import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import GradientMesh from "@/components/GradientMesh";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Software engineer with 4+ years shipping production web platforms — frontend, APIs, and modernization at 1Digitalstack.ai.",
  keywords: [
    "Masood Akhtar Vaheed",
    "Vaheed Shaik",
    "software engineer",
    "full stack developer",
    "next.js",
    "react",
    "typescript",
    "node.js",
    "postgresql",
    "portfolio",
    "freelance software engineer",
    "Hyderabad",
    "1Digitalstack",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description: "Software engineer with 4+ years shipping production web platforms — frontend, APIs, and modernization at 1Digitalstack.ai.",
    siteName: site.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${site.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Software engineer with 4+ years shipping production web platforms.",
    images: ["/images/og-image.jpg"],
    creator: "@vaheedsk36",
  },
  robots: { index: true, follow: true },
  icons: [{ rel: "icon", url: "/images/favicon.png" }],
  verification: {
    google: "Dz2xp2RtP9GiXlS5Wj_tzIm0QeRcbzKILqVNJAUAd5w",
    yandex: "827e25c6099be3b0",
    yahoo: "EAF9D5ED84139FFD4C2CE4429F37BC3B",
  },
};

export default function RootLayout({ children }) {
  const ga = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased min-h-screen flex flex-col relative">
        {ga && (
          <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} />
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        )}
        <GradientMesh />
        <div className="noise-overlay" aria-hidden />
        <SmoothScroll>
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
        <CommandPalette />
      </body>
    </html>
  );
}
