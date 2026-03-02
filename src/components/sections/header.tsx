import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Learning", href: "/#learning" },
  { label: "Blog", href: "/blog" },
];

export const Header = () => (
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
        <Link
          href="/#contact"
          className="group hidden items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-orange-400 hover:text-orange-300 md:flex"
        >
          Contact
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  </header>
);
