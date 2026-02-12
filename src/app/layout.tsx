import type { Metadata } from "next";
import "./globals.css";
import { ClashDisplay, Telma } from "@/assets/fonts";
import Header from "@/components/layout/Header";
import ViewportReveal from "@/components/shared/ViewportReveal";

export const metadata: Metadata = {
  title: "Mazen's Portfolio",
  description:
    "Full-Stack Front-End Developer with a passion for crafting exceptional web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${Telma.variable} ${ClashDisplay.variable} animate-appear-radial bg-background font-clash-display p-8 text-white antialiased will-change-[clip-path]`}
      >
        <ViewportReveal />
        <Header />
        {children}
      </body>
    </html>
  );
}
