import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import "@/styles/main.scss";
const inter = Inter({ subsets: ["latin"] });
import Providers from "./Providers";
import MainMenu from "@/components/MainMenu";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Free Spanish conjugation trainer",
  description:
    "Train spanish verb conjugation for free in all the       tenses you know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <MainMenu />
        </div>
        <div className="pt-24 main-wrapper">
          <Providers>{children}</Providers>
        </div>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2GFZBRSB69"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2GFZBRSB69');
          `}
        </Script>
      </body>
    </html>
  );
}
