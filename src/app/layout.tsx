import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iTechFlow — Full Stack Developer & AI Agent Builder",
    template: "%s | iTechFlow",
  },
  description:
    "Building Tamil AI solutions & scalable systems for businesses across India. Tamil AI receptionist, WhatsApp bots, Django/FastAPI backends, and production deployments.",
  keywords: [
    "Tamil AI",
    "AI Agent",
    "WhatsApp Bot",
    "Full Stack Developer",
    "FastAPI",
    "Django",
    "Next.js",
    "Sarvam AI",
    "Tamil Voice AI",
    "India developer",
  ],
  authors: [{ name: "Ilayaraja", url: "https://itechflow.co.in" }],
  creator: "iTechFlow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://itechflow.co.in",
    siteName: "iTechFlow",
    title: "iTechFlow — Full Stack Developer & AI Agent Builder",
    description:
      "Building Tamil AI solutions & scalable systems for businesses across India. Tamil AI receptionist, WhatsApp bots, and production-ready systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "iTechFlow — Full Stack Developer & AI Agent Builder",
    description:
      "Tamil AI agents, WhatsApp bots, and scalable systems for Indian businesses.",
    creator: "@itechflow",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1f2937",
              color: "#fff",
              border: "1px solid #374151",
            },
            success: {
              iconTheme: {
                primary: "#06b6d4",
                secondary: "#fff",
              },
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
