import type { Metadata } from "next";
import "./globals.css";
import { ClashDisplay, Telma } from "@/assets/fonts";
import { Header } from "@/components/layout/header";
import { LoadingOverlay } from "@/components/layout";

const BASE_URL = "https://mazen-adel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Mazen Adel | Front-End & MERN Stack Developer",
  description:
    "A passionate web developer and computer science student with a love for creating pixel-perfect websites and systems that solve real-world problems using modern technologies.",
  keywords: [
    "Mazen Adel",
    "Front-End Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Mazen Adel", url: BASE_URL }],
  creator: "Mazen Adel",
  icons: {
    icon: [
      "/favicons/favicon.ico",
      "/favicons/favicon-16x16.png",
      "/favicons/favicon-32x32.png",
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mazen Adel",
    title: "Mazen Adel | Front-End & MERN Stack Developer",
    description:
      "A passionate web developer and computer science student with a love for creating pixel-perfect websites and systems that solve real-world problems using modern technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazen Adel | Front-End & MERN Stack Developer",
    description:
      "A passionate web developer and computer science student with a love for creating pixel-perfect websites and systems that solve real-world problems using modern technologies.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Telma.variable} ${ClashDisplay.variable} bg-background font-clash-display p-4 text-white antialiased md:p-6 lg:p-8`}
      >
        <LoadingOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}
