import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Vaheed Shaik | Software Engineer",
  description:
    "Welcome to my portfolio! As a web developer specializing in Next.js 13 and SCSS, I have crafted a captivating digital universe that showcases my skills and projects. ",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
