import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alojamientos | Airbnb",
  description: "Explora alojamientos locales y encuentra tu próxima estancia.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-stone-950 antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
