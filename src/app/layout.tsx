import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Adithya P S",

  description:
    "Final year computer science student building projects across AI, systems, infrastructure engineering, and experimental software.",

  keywords: [
    "Adithya",
    "Portfolio",
    "Next.js",
    "AI",
    "Systems",
    "Software Engineer",
    "React",
    "Infrastructure",
  ],

  authors: [
    {
      name: "Adithya P S",
    },
  ],

  creator: "Adithya P S",

  metadataBase: new URL("https://psadi.vercel.app"),

  openGraph: {
    title: "Adithya P S",

    description:
      "Projects, systems, AI experiments, infrastructure engineering, and software development.",

    url: "https://psadi.vercel.app",

    siteName: "Adithya P S",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Adithya P S",

    description:
      "Projects, AI systems, infrastructure engineering, and experimental software.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-background
          text-foreground
          antialiased
          min-h-screen
          overflow-x-hidden
        `}
      >
        <div className="noise" />

        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}