"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Phone, MapPin, Download, ExternalLink, ArrowUpRight } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Address", value: profile.address, href: `https://maps.google.com/?q=${encodeURIComponent(profile.address)}` },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: "linear-gradient(135deg, #050d1a 0%, #1a3a6b 50%, #0f2647 100%)",
        backgroundSize: "200% 200%",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
      className="gradient-animated-bg"
    >
      {/* Floating decorative orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,168,67,0.06), transparent 60%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,82,152,0.08), transparent 60%)",
          }}
        />
      </div>

      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Reach out for academic collaborations or inquiries"
        />

        <style>{`
          #contact h2 { color: white !important; }
          #contact .heading-underline { background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light)) !important; }
          #contact p { color: rgba(255,255,255,0.7) !important; }
        `}</style>

        <motion.div
          className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            y: contentY,
          }}
        >
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "Address" ? "_blank" : undefined}
              rel={item.label === "Address" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.75rem",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                color: "white",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,168,67,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  padding: "0.7rem",
                  background: "linear-gradient(135deg, rgba(212,168,67,0.2), rgba(212,168,67,0.08))",
                  borderRadius: "var(--radius-sm)",
                  flexShrink: 0,
                  border: "1px solid rgba(212,168,67,0.15)",
                }}
              >
                <item.icon size={22} style={{ color: "var(--color-gold-light)" }} />
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.3rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {item.value}
                  {item.label === "Address" && (
                    <ArrowUpRight size={13} style={{ opacity: 0.4 }} />
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <a
            href={siteConfig.documents.cv}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "1.1rem 2.8rem",
              background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
              color: "#1a1a2e",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              boxShadow: "0 6px 25px rgba(212,168,67,0.35), 0 0 0 1px rgba(212,168,67,0.1)",
              transition: "all 0.3s ease",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(212,168,67,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(212,168,67,0.35)";
            }}
          >
            <Download size={20} />
            Download Full CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
