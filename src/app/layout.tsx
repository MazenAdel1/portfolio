import type { Metadata } from "next";
import "./globals.css";
import { ClashDisplay, Telma } from "@/assets/fonts";
import { Header } from "@/components/layout/header";
import { LoadingOverlay } from "@/components/layout";

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
        className={`${Telma.variable} ${ClashDisplay.variable} bg-background font-clash-display p-4 text-white antialiased md:p-6 lg:p-8`}
      >
        <LoadingOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}
