"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Learning", href: "/#learning" },
  { label: "Blog", href: "/blog" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="glass flex w-full items-center justify-between rounded-full px-6 py-3 text-sm text-zinc-200 backdrop-blur">
          <Link href="/" className="font-semibold tracking-tight text-zinc-100">
            Minkaung Kyaw
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/#contact"
              className="group flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-orange-400 hover:text-orange-300"
            >
              Contact
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-full p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass absolute left-6 right-6 top-full mt-2 rounded-2xl border border-zinc-800/70 p-4 backdrop-blur md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400 transition hover:bg-zinc-800/50 hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="group mt-2 flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-orange-400 hover:bg-zinc-800/50 hover:text-orange-300"
              >
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
