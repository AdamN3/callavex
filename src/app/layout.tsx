import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Callavex – AI Receptionists for Trades",
  description:
    "Callavex provides AI receptionist services for plumbers, electricians, and contractors so they never miss another call, lead, or booking.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40">
                  <span className="text-lg font-semibold text-emerald-400">
                    C
                  </span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold tracking-tight text-slate-50">
                    Callavex
                  </span>
                  <span className="text-xs text-slate-400">
                    AI Receptionists for Trades
                  </span>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="hidden rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 md:inline-flex"
              >
                Book a quick call
              </Link>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
            {children}
          </main>
          <footer className="border-t border-slate-800/80 bg-slate-950/80">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:px-6">
              <p>© {new Date().getFullYear()} Callavex. All rights reserved.</p>
              <p className="text-center md:text-right">
                Built for local trades: plumbers, electricians, HVAC, and
                contractors.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
