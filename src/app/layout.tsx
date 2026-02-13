import type { Metadata } from "next";
import "./globals.css";
import { ClashDisplay, Telma } from "@/assets/fonts";
import Header from "@/components/layout/Header";
import { LoadingOverlay } from "@/components/shared";

export const metadata: Metadata = {
  title: "Mazen Adel",
  description:
    "Front-End & MERN Stack Developer with a passion for Software Engineering.",
  icons: {
    icon: [
      "/favicons/favicon.ico",
      "/favicons/favicon-16x16.png",
      "/favicons/favicon-32x32.png",
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Telma.variable} ${ClashDisplay.variable} bg-background font-clash-display p-8 text-white antialiased`}
      >
        <LoadingOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}
