"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/lib/i18n";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setMobileMenuOpen(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLabels: Record<string, string> = {
    home: t("nav.home"),
    about: t("nav.about"),
    experience: t("nav.experience"),
    projects: t("nav.projects"),
    stack: t("nav.stack"),
    contact: t("nav.contact"),
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <motion.div
        className={`mx-auto transition-all duration-500 ${scrolled ? "px-4 pt-3 sm:px-6" : "px-6 pt-5 sm:px-8 lg:px-12"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-bold text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-black text-white transition-transform duration-300 group-hover:scale-110">
              MK
            </span>
            <span className="hidden sm:inline">Min Kaung</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`relative rounded-lg px-3.5 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                    active ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {navLabels[id] ?? item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            {/* CTA — desktop */}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="group hidden items-center gap-2 rounded-xl border border-border bg-surface-elevated/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-all hover:border-accent hover:text-accent md:flex"
            >
              {t("nav.letsTalk")}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Hamburger */}
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-elevated/50 text-muted hover:text-foreground md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute left-4 right-4 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-surface/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
            >
              {NAV_ITEMS.map((item, i) => {
                const id = item.href.replace("#", "");
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="flex items-center rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                    >
                      {navLabels[id] ?? item.label}
                    </a>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.06, duration: 0.3 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "#contact")}
                  className="mx-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-light"
                >
                  {t("nav.letsTalk")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
