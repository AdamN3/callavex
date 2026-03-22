import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
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
  title: "Callavex – AI Receptionists for Trades",
  description:
    "Callavex provides AI receptionist services for plumbers, electricians, and contractors so they never miss another call, lead, or booking.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh overflow-x-hidden antialiased bg-slate-950 text-slate-100`}
      >
        <div className="relative min-h-screen bg-page-mesh">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 bg-noise opacity-[0.035] mix-blend-overlay"
          />
          <div className="relative z-10">
            <SiteHeader />
            <main className="mx-auto min-w-0 max-w-6xl px-4 py-8 sm:py-10 md:px-6 md:py-14">
              {children}
            </main>
            <footer className="border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-sm">
              <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:px-6">
                <p>© {new Date().getFullYear()} Callavex. All rights reserved.</p>
                <p className="text-center md:text-right">
                  Built for local trades: plumbers, electricians, HVAC, and
                  contractors.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
