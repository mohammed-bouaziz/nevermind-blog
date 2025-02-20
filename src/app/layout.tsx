// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, RocknRoll_One } from "next/font/google";
import "./globals.css";
import Navigation from "./components/nav";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rocknRoll = RocknRoll_One({
  weight: "400",
  variable: "--font-rocknroll",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Your Blog',
    default: 'Your Blog',
  },
  description: "Your personal blog about AI, technology, and development",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rocknRoll.variable} antialiased flex min-h-screen flex-col`}
      >
        <Navigation />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}