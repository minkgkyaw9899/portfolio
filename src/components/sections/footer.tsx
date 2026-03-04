"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL, NAV_ITEMS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLabels: Record<string, string> = {
    home: t("nav.home"),
    about: t("nav.about"),
    experience: t("nav.experience"),
    projects: t("nav.projects"),
    stack: t("nav.stack"),
    contact: t("nav.contact"),
  };

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="absolute left-0 right-0 top-0 h-px glow-line" />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-black text-white">
                MK
              </span>
              <span className="font-bold text-foreground">{PERSONAL.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-muted">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: PERSONAL.github, label: "GitHub" },
                { icon: Linkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
                {
                  icon: Mail,
                  href: `mailto:${PERSONAL.email}`,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground">
              {t("footer.quick_links")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {navLabels[id] ?? item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* More */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground">
              {t("footer.more")}
            </h4>
            <nav className="flex flex-col gap-2.5">
              <a
                href={PERSONAL.businessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
              >
                {PERSONAL.businessName}
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/blog"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {t("footer.learning_blog")}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-muted">
            © {year} {PERSONAL.name}. {t("footer.built_with")}{" "}
            <Heart className="inline h-3 w-3 text-red-400" /> Next.js
          </p>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-medium text-muted transition-all hover:border-accent/50 hover:text-accent"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("footer.back_to_top")}
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
