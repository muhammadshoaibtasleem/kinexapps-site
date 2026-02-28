import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default:
      "Kinexapps — Free iOS Games, Education & AI Apps | Australian App Studio",
    template: "%s | Kinexapps",
  },
  description:
    "Kinexapps is an Australian mobile app studio crafting free iOS games, education apps, and AI-powered utilities. Download 8 free apps including SnapFix AI home repair, Theory Elite MBA quiz, ABC Kids alphabet learning, Laser Maze, Rollscape marble game, Orb Galaxy Sort, Color Ball Drop 3D, and Learn ABC for toddlers.",
  keywords: [
    "Kinexapps",
    "free iOS apps",
    "Australian app developer",
    "mobile games",
    "education apps",
    "AI apps",
    "free iOS games",
    "App Store apps Australia",
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
    "Learn ABC",
    "puzzle games iOS",
    "kids learning apps",
    "home repair app",
    "Melbourne app studio",
    "toddler learning apps",
    "marble maze game",
    "ball sort puzzle",
    "MBA quiz app",
    "alphabet app for toddlers",
    "laser puzzle game",
    "color learning game for kids",
    "AI home repair app",
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
    title:
      "Kinexapps — Free iOS Games, Education & AI Apps | Australian Studio",
    description:
      "Download 8 free iOS apps — games, education tools, and AI utilities. Built with Swift & SwiftUI by an Australian indie studio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinexapps — Free iOS Games, Education & AI Apps",
    description:
      "8 free iOS apps — puzzle games, kids learning apps, MBA quiz battles, and AI home repair. Built in Australia.",
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
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <link rel="alternate" hrefLang="en-AU" href="https://kinexapps.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8D0M90MELY"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8D0M90MELY');`}
        </Script>
      </body>
    </html>
  );
}
