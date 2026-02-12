import localFont from "next/font/local";

const Telma = localFont({
  src: [
    {
      path: "./Telma-Light.otf",
      weight: "300",
    },
    {
      path: "./Telma-Regular.otf",
      weight: "400",
    },
    {
      path: "./Telma-Medium.otf",
      weight: "500",
    },
    {
      path: "./Telma-Bold.otf",
      weight: "700",
    },
    {
      path: "./Telma-Black.otf",
      weight: "900",
    },
  ],
  fallback: ["Telma", "sans-serif"],
  variable: "--font-telma",
});

export default Telma;
