"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button3DLink } from "@/components/ui/button-3d";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 md:px-6 md:py-5">
        <Link href="/" className="group flex min-w-0 shrink items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.06, rotate: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40"
          >
            <span className="text-lg font-semibold text-emerald-400">C</span>
          </motion.div>
          <div className="min-w-0 flex flex-col leading-tight">
            <span className="truncate text-sm font-semibold tracking-tight text-slate-50 transition group-hover:text-emerald-100">
              Callavex
            </span>
            <span className="line-clamp-1 text-[11px] text-slate-400 sm:text-xs">
              AI Receptionists for Trades
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                <span className={active ? "text-emerald-200" : undefined}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Desktop / tablet: quick CTA (mobile uses drawer below) */}
          <Button3DLink href="/contact" size="sm" className="hidden md:inline-flex">
            <span className="hidden lg:inline">Book a quick call</span>
            <span className="lg:hidden">Call</span>
          </Button3DLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:border-emerald-500/40 hover:text-emerald-200 md:hidden"
          >
            <span className="text-lg leading-none">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-800/80 bg-slate-950/95 md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium",
                        active
                          ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/30"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-slate-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-2">
                <Button3DLink href="/contact" size="md" fullWidth>
                  Book a quick call
                </Button3DLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
