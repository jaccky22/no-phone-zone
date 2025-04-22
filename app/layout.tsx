import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SupabaseProvider } from "@/context/supabase-provider";
import { AuthBar } from '@/components/AuthBar';
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "No-Phone Zone Ideas | Break Free From Phone Addiction",
  description: "Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life.",
  keywords: [
    "phone addiction",
    "digital wellbeing",
    "screen time",
    "phone-free challenge",
    "reduce phone usage",
    // trending unrelated topics
    "ChatGPT",
    "NFT",
    "Metaverse",
    "Oscars 2025",
    "Bitcoin",
  ],
  openGraph: {
    title: "No-Phone Zone Ideas | Break Free From Phone Addiction",
    description: "Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life.",
    url: "https://your-domain.com",
    siteName: "No-Phone Zone Ideas",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "No-Phone Zone Ideas Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No-Phone Zone Ideas | Break Free From Phone Addiction",
    description: "Join thousands in the No-Phone Challenge. Discover tools, tips, and a supportive community to help reduce screen time and reclaim your life.",
    images: ["https://your-domain.com/og-image.jpg"],
    creator: "@your_twitter_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SupabaseProvider>
          <Script
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-5760370419762495"
            crossOrigin="anonymous"
          />
          <AuthBar />
          <div className="flex">
            {/* Left sidebar ad */}
            <aside className="hidden lg:block w-48 sticky top-20 px-2">
              <ins
                className="adsbygoogle block"
                data-ad-client="pub-5760370419762495"
                data-ad-slot="YOUR_AD_SLOT"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <Script id="ads-init-left">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
            </aside>
            {/* Main content */}
            <main className="flex-1 px-4">{children}</main>
            {/* Right sidebar ad */}
            <aside className="hidden lg:block w-48 sticky top-20 px-2">
              <ins
                className="adsbygoogle block"
                data-ad-client="pub-5760370419762495"
                data-ad-slot="YOUR_AD_SLOT"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <Script id="ads-init-right">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
            </aside>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
