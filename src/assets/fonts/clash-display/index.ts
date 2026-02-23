import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: [
    {
      path: "./ClashDisplay-Extralight.woff2",
      weight: "200",
    },
    {
      path: "./ClashDisplay-Light.woff2",
      weight: "300",
    },
    {
      path: "./ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "./ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "./ClashDisplay-Semibold.woff2",
      weight: "600",
    },
    {
      path: "./ClashDisplay-Bold.woff2",
      weight: "700",
    },
  ],
  fallback: ["Clash Display", "sans-serif"],
  variable: "--font-clash-display",
});

export default ClashDisplay;
