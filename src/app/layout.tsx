import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Something Special For Ruhi ❤️",
  description: "A little birthday surprise, made just for you.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "Something Special For Ruhi ❤️",
    description: "A little birthday surprise, made just for you.",
    images: [
      {
        url: "/images/ruhi-hero.png",
        width: 1200,
        height: 630,
        alt: "Ruhi Birthday Surprise",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#080708] text-[#faf6f0] flex flex-col font-sans selection:bg-[#4a121a] selection:text-[#f4e8c1]">
        {children}
      </body>
    </html>
  );
}
