import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kinexapps | Innovative Mobile Apps",
    template: "%s | Kinexapps",
  },
  description:
    "Kinexapps is an Australian app studio crafting innovative mobile experiences across games, education, and utilities. Explore our portfolio of 7 published iOS apps.",
  keywords: [
    "Kinexapps",
    "iOS apps",
    "mobile games",
    "education apps",
    "Australian app developer",
    "App Store",
    "SnapFix",
    "Theory Elite",
    "ABC Kids",
    "Laser Maze",
    "Rollscape",
    "Orb Galaxy Sort",
    "Color Ball Drop",
  ],
  authors: [{ name: "Kinexapps" }],
  creator: "Kinexapps",
  publisher: "Kinexapps",
  metadataBase: new URL("https://kinexapps.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Kinexapps",
    title: "Kinexapps | Innovative Mobile Apps",
    description:
      "Australian app studio crafting innovative mobile experiences across games, education, and utilities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinexapps | Innovative Mobile Apps",
    description:
      "Australian app studio crafting innovative mobile experiences across games, education, and utilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
