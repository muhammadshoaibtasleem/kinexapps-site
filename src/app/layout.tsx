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
      "Kinexapps — Software House for Web SaaS, iOS Apps & AI Products | Melbourne",
    template: "%s | Kinexapps",
  },
  description:
    "Kinexapps is an Australian software house in Melbourne. We design and ship web SaaS, iOS apps, and AI products end-to-end. Live case studies include rubrica.app (AI rubric SaaS) and 8 App Store apps. Get a free quote.",
  keywords: [
    "Kinexapps",
    "software house Melbourne",
    "software development agency Australia",
    "AI SaaS development",
    "hire a software house",
    "web SaaS development agency",
    "Next.js development agency",
    "Vercel SaaS developer",
    "AI product development",
    "rubrica.app",
    "MVP development Melbourne",
    "iOS app development Melbourne",
    "Australian app developer",
    "Swift developer",
    "free iOS apps",
    "mobile games",
    "education apps",
    "AI apps",
    "SnapFix",
    "Theory Elite",
    "ABC Kids",
    "Laser Maze",
    "Rollscape",
    "Orb Galaxy Sort",
    "Learn ABC",
    "kids learning apps",
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
      "Kinexapps — Software House for Web SaaS, iOS Apps & AI Products",
    description:
      "Melbourne software house. We ship web SaaS, iOS apps, and AI products end-to-end. Live products include rubrica.app and an 8-app iOS portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kinexapps — Software House for Web SaaS, iOS Apps & AI Products",
    description:
      "Melbourne software house. Live AI SaaS (rubrica.app) + 8 App Store apps. End-to-end product delivery.",
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
  classification: "Software Development Agency",
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
