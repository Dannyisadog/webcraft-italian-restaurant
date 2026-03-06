import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "La Tavola Italiana | 台北正宗義大利餐廳",
  description:
    "在台北信義區體驗正統義大利美食。手工義大利麵、木柴披薩及精選酒單。",
  keywords: [
    "義大利餐廳",
    "台北",
    "正宗義大利",
    "披薩",
    "義大利麵",
    "紅酒",
    "訂位",
  ],
  openGraph: {
    title: "La Tavola Italiana | 正宗義大利料理",
    description: "在台北信義區心臟地帶體驗正統義大利美食。",
    type: "website",
    locale: "zh_TW",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}