"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a1628, #060d18)",
        color: "rgba(255,255,255,0.6)",
        borderTop: "1px solid rgba(212,168,67,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(212,168,67,0.4), transparent)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand Logo + Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid rgba(212,168,67,0.3)",
            }}
          >
            <Image
              src={siteConfig.images.brandLogo}
              alt="Dr. V. Gurumoorthi Logo"
              width={40}
              height={40}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              {profile.fullName}
            </div>
            <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)" }}>
              {profile.designation}, {profile.college}
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <nav
          aria-label="Footer navigation"
          style={{ display: "flex", gap: "1.5rem", fontSize: "0.78rem" }}
        >
          {["Home", "About", "Research", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#FFD54F"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div
          className="flex items-center gap-1.5 text-xs text-center md:text-right"
        >
          © {currentYear} {profile.name}. Made with
          <Heart size={12} style={{ color: "var(--color-gold)", fill: "var(--color-gold)" }} />
        </div>
      </div>
    </footer>
  );
}
