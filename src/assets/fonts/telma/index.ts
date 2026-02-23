import localFont from "next/font/local";

const Telma = localFont({
  src: [
    {
      path: "./Telma-Light.woff2",
      weight: "300",
    },
    {
      path: "./Telma-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Telma-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Telma-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Telma-Black.woff2",
      weight: "900",
    },
  ],
  fallback: ["Telma", "sans-serif"],
  variable: "--font-telma",
});

export default Telma;
