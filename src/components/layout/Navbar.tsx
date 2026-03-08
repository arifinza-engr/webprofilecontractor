"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY, NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-mist/40 shadow-sm"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-serif text-xl font-bold tracking-tight hover:opacity-80 transition-opacity",
              scrolled ? "text-ink" : "text-cream"
            )}
          >
            GABEL<span className="text-gold"> Gemilang</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-200",
                    scrolled
                      ? "text-stone hover:text-ink"
                      : "text-cream hover:text-cream/70"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-5"
          >
            Konsultasi Gratis
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-ink" : "text-cream")}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-cream flex flex-col pt-20 pb-10 px-8 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { type: "spring", damping: 28, stiffness: 280 },
              }}
              exit={{ x: "100%", transition: { duration: 0.25 } }}
            >
              <ul className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-sans text-sm font-medium tracking-widest uppercase text-stone hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary mt-auto text-xs justify-center"
              >
                Konsultasi Gratis
              </Link>
              <p className="mt-4 font-sans text-xs text-mist text-center">
                {COMPANY.phone}
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
