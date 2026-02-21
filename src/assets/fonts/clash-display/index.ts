import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: [
    {
      path: "./ClashDisplay-Extralight.otf",
      weight: "200",
    },
    {
      path: "./ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "./ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "./ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "./ClashDisplay-Semibold.otf",
      weight: "600",
    },
    {
      path: "./ClashDisplay-Bold.otf",
      weight: "700",
    },
  ],
  fallback: ["Clash Display", "sans-serif"],
  variable: "--font-clash-display",
});

export default ClashDisplay;
