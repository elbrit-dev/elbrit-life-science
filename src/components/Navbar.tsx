"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-md transition-shadow duration-300",
        (scrolled || open) && "shadow-[0_1px_0_rgba(14,22,48,0.06)]"
      )}
    >
      <nav className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" aria-label="Elbrit Life Sciences home" className="shrink-0">
          <Image
            src="/brand/logo.jpg"
            alt="Elbrit Life Sciences"
            width={160}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-elbrit-600"
                    : "text-navy-800 hover:text-elbrit-600"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-navy-100 bg-white p-1.5 shadow-[var(--shadow-float)]">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-navy-50"
                      >
                        <span className="block text-sm font-medium text-navy-900">{c.label}</span>
                        {c.desc && <span className="block text-xs text-slate-soft">{c.desc}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Link href="/contact" className="btn btn-primary text-sm">
            Partner with us
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 bg-white text-navy-800 xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-navy-100 bg-white xl:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="flex-1 rounded-lg px-3 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        aria-label={`Toggle ${item.label}`}
                        onClick={() =>
                          setExpanded((e) => (e === item.label ? null : item.label))
                        }
                        className="grid h-10 w-10 place-items-center text-navy-500"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expanded === item.label && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && expanded === item.label && (
                    <ul className="ml-3 border-l border-navy-100 pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-soft hover:bg-navy-50 hover:text-navy-900"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-2">
                <Link href="/contact" className="btn btn-primary w-full">
                  Partner with us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
