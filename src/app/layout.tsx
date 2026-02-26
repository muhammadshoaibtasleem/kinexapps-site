import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kinexapps — Mobile App Studio",
    template: "%s — Kinexapps",
  },
  description:
    "Australian app studio building games, education tools, and AI-powered utilities for iOS. 7 published apps on the App Store.",
  keywords: [
    "Kinexapps",
    "iOS apps",
    "mobile games",
    "education apps",
    "Australian app developer",
    "App Store",
  ],
  authors: [{ name: "Kinexapps" }],
  creator: "Kinexapps",
  publisher: "Kinexapps",
  metadataBase: new URL("https://kinexapps.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Kinexapps",
    title: "Kinexapps — Mobile App Studio",
    description:
      "Australian app studio building games, education tools, and AI-powered utilities for iOS.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
