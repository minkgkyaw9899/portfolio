import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/sections/header";
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
  title: "Minkaung Kyaw | Fullstack + Mobile Engineer",
  description:
    "Portfolio showcasing fintech, enterprise, and LMS systems with deep React Native expertise and a transition to Next.js and Go.",
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
        <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_45%)]"
          />
          <Header />
          <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-28 sm:px-8 lg:px-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
