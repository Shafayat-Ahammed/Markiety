import type { NextFont } from "next/dist/compiled/@next/font";
import { Poppins } from "next/font/google";

const font: NextFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Arial", "sans-serif"],
});

export default font;
