"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import en from "@/i18n/en.json";
import mm from "@/i18n/mm.json";

type Lang = "en" | "mm";
type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, mm };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

// Resolve dotted path like "nav.home" → value from translations
function resolvePath(obj: Record<string, unknown>, path: string): string {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[part];
  }
  if (typeof current === "string") return current;
  return path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "mm") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  const t = useCallback(
    (path: string) =>
      resolvePath(
        translations[lang] as unknown as Record<string, unknown>,
        path,
      ),
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
