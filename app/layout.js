import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const sora = Sora({ subsets: ["latin"], variable: "--fm" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "National Library — Management System",
  description: "Library Management System built with Next.js and C++",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div className="noise" aria-hidden="true"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
