"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex h-9 items-center rounded-lg border border-border bg-surface-elevated/50 p-0.5">
      {/* Sliding active indicator */}
      <motion.span
        className="absolute inset-y-0.5 rounded-md bg-accent"
        style={{ width: "calc(50% - 2px)" }}
        animate={{ left: lang === "en" ? "2px" : "calc(50%)" }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`relative z-10 flex h-full items-center px-3 text-[11px] font-bold tracking-wider transition-colors ${
          lang === "en" ? "text-background" : "text-muted hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("mm")}
        className={`relative z-10 flex h-full items-center px-3 text-[11px] font-bold tracking-wider transition-colors ${
          lang === "mm" ? "text-background" : "text-muted hover:text-foreground"
        }`}
        aria-label="Switch to Myanmar"
      >
        မြန်မာ
      </button>
    </div>
  );
}
