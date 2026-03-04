import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/ui/custom-cursor";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Min Kaung Kyaw | Fullstack & Mobile Engineer",
  description:
    "Portfolio of Min Kaung Kyaw — 3+ years building fintech mobile banking apps, enterprise platforms, and modern web apps with React Native, Next.js, and TypeScript.",
  keywords: [
    "Min Kaung Kyaw",
    "Fullstack Developer",
    "Mobile Developer",
    "React Native",
    "Next.js",
    "TypeScript",
    "Myanmar Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Min Kaung Kyaw" }],
  openGraph: {
    title: "Min Kaung Kyaw | Fullstack & Mobile Engineer",
    description:
      "Portfolio showcasing fintech, enterprise, and LMS systems with deep React Native expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Min Kaung Kyaw | Fullstack & Mobile Engineer",
    description:
      "Portfolio showcasing fintech, enterprise, and LMS systems with deep React Native expertise.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScrollProvider>
              <CustomCursor />
              <div className="noise relative min-h-screen cursor-none overflow-hidden bg-background text-foreground md:cursor-none">
                {/* Global radial gradient backdrop removed per user request */}
                <Header />
                <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-8 pt-4 sm:px-8 lg:px-12">
                  {children}
                </main>
                <Footer />
              </div>
            </SmoothScrollProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
