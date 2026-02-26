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
    default: "Kinexapps — Australian Mobile App Studio | iOS Games & Education Apps",
    template: "%s — Kinexapps",
  },
  description:
    "Kinexapps is an Australian mobile app studio crafting free iOS games, education tools, and AI-powered utilities. Explore 7 published apps including SnapFix, Theory Elite, Laser Maze, and more on the App Store.",
  keywords: [
    "Kinexapps",
    "iOS apps",
    "Australian app developer",
    "mobile games",
    "education apps",
    "AI apps",
    "free iOS games",
    "App Store apps",
    "Swift developer",
    "iPhone games",
    "iPad apps",
    "SnapFix",
    "Theory Elite",
    "ABC Kids",
    "Laser Maze",
    "Rollscape",
    "Orb Galaxy Sort",
    "Color Ball Drop",
    "puzzle games iOS",
    "kids learning apps",
    "home repair app",
    "Melbourne app studio",
  ],
  authors: [{ name: "Kinexapps", url: "https://kinexapps.com" }],
  creator: "Kinexapps",
  publisher: "Kinexapps",
  metadataBase: new URL("https://kinexapps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://kinexapps.com",
    siteName: "Kinexapps",
    title: "Kinexapps — Australian Mobile App Studio",
    description:
      "Free iOS games, education tools, and AI-powered utilities. 7 published apps on the App Store built with Swift & SwiftUI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kinexapps — Australian Mobile App Studio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinexapps — Australian Mobile App Studio",
    description:
      "Free iOS games, education tools, and AI-powered utilities. 7 published apps on the App Store.",
    images: ["/og-image.png"],
    creator: "@kinexapps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Mobile App Development Studio",
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
