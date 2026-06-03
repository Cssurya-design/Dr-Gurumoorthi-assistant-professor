"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg border-b border-[#D4A843]/20"
            : "bg-gradient-to-b from-[#050d1a]/80 to-transparent border-b border-transparent"
        }`}
      >
        <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0.5rem 1.5rem" : "0.75rem 1.5rem",
          transition: "padding 0.35s ease",
        }}
        aria-label="Main navigation"
      >
        {/* Brand Logo + Title */}
        <motion.a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none",
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(212,168,67,0.4)",
              boxShadow: "0 2px 12px rgba(212,168,67,0.2)",
              flexShrink: 0,
            }}
          >
            <Image
              src={siteConfig.images.brandLogo}
              alt="Dr. V. Gurumoorthi — Brand Logo"
              width={44}
              height={44}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              priority
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#ffffff",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: "0.68rem",
                color: "rgba(212,168,67,0.8)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {siteConfig.title}
            </div>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: "0.5rem 0.9rem",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                borderRadius: "var(--radius-sm)",
                transition: "all 0.25s ease",
                position: "relative",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFD54F";
                e.currentTarget.style.background = "rgba(212,168,67,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={siteConfig.documents.cv}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1.15rem",
              marginLeft: "0.75rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#1a1a2e",
              background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 12px rgba(212,168,67,0.3)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,168,67,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(212,168,67,0.3)";
            }}
          >
            <Download size={14} /> CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            padding: "0.5rem",
            color: "rgba(255,255,255,0.9)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 110,
          }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(320px, 85vw)",
              background: "linear-gradient(180deg, #0a1628 0%, #1a3a6b 100%)",
              boxShadow: "-4px 0 40px rgba(0,0,0,0.4)",
              display: "flex",
              flexDirection: "column",
              padding: "5rem 2rem 2rem",
              gap: "0.25rem",
              zIndex: 105,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: "0.85rem 1rem",
                  fontSize: "1.05rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  transition: "all 0.2s",
                  borderLeft: "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,168,67,0.1)";
                  e.currentTarget.style.borderLeftColor = "var(--color-gold)";
                  e.currentTarget.style.color = "#FFD54F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderLeftColor = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href={siteConfig.documents.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.85rem",
                marginTop: "1rem",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#1a1a2e",
                background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
              }}
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            onTouchStart={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              zIndex: 104,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
