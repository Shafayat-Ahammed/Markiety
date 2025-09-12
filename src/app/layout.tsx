import type { ReactNode, FunctionComponent, JSX } from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import font from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Markiety - Data-Driven Digital Marketing Agency",
  description:
    "Markiety is a digital marketing agency scaling brands with data-driven SEO, Google & Facebook Ads, SMM, and professional content creation. Get a free consultation.",
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout: FunctionComponent<RootLayoutProps> = ({
  children,
}: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
