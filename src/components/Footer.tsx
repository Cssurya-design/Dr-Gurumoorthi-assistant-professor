"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { Heart, GraduationCap } from "lucide-react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

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

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {siteConfig.social.googleScholar && (
              <a href={siteConfig.social.googleScholar} target="_blank" rel="noreferrer" aria-label="Google Scholar" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#4285F4"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                <GraduationCap size={18} />
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#0077b5"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                <LinkedinIcon />
              </a>
            )}
            {siteConfig.social.Instagram && (
              <a href={siteConfig.social.Instagram} target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#E1306C"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                <InstagramIcon />
              </a>
            )}
            {siteConfig.social.Youtube && (
              <a href={siteConfig.social.Youtube} target="_blank" rel="noreferrer" aria-label="YouTube" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#FF0000"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                <YoutubeIcon />
              </a>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-center md:text-right">
            © {currentYear} {profile.name}. Made with
            <Heart size={12} style={{ color: "var(--color-gold)", fill: "var(--color-gold)" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
