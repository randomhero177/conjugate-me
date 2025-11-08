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
    "Conjugate spanish verbs for free in all the tenses you know. Choose verbs, pick a tense, and start practicing",
  other: {
    "yandex-verification": "ee32c79fe1813a4e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLocal = process.env.NEXT_PUBLIC_IS_LOCAL === "true";
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html lang="en text-gray-800">
      <body className={inter.className}>
        <div className="">
          <MainMenu />
        </div>
        <div className="main-wrapper">
          <Providers>{children}</Providers>
        </div>
        {/* Google Analytics */}
        {!isLocal && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
            </Script>
          </>
        )}
        {/* Structured data for Google */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Conjugate Me",
              url: "https://conjugate-me.vercel.app",
            }),
          }}
        />
      </body>
    </html>
  );
}
