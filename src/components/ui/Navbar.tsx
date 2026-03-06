"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "首頁" },
  { href: "/menu", label: "菜單" },
  { href: "/about", label: "關於我們" },
  { href: "/reservation", label: "線上訂位" },
  { href: "/gallery", label: "相簿" },
  { href: "/contact", label: "聯絡我們" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-main flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
            <i className="fas fa-utensils text-sm"></i>
          </div>
          <span className="font-display text-xl font-semibold text-[var(--color-foreground)]">
            La Tavola Italiana
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="btn-primary text-sm"
          >
            <i className="fas fa-calendar-alt mr-2"></i>
            立即訂位
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-secondary)] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="選單切換"
        >
          <i
            className={`fas ${
              isMobileMenuOpen ? "fa-times" : "fa-bars"
            } text-[var(--color-foreground)]`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full glass border-t border-[var(--color-border)] md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container-main flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                className="btn-primary mt-2 text-center text-sm"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                立即訂位
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}