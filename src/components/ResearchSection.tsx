"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { publications } from "@/data/profile";
import { FileText, BookOpen, Presentation } from "lucide-react";

const typeIcons = { journal: FileText, conference: Presentation, "book-chapter": BookOpen };
const typeLabels = { journal: "Journal Article", conference: "Conference Paper", "book-chapter": "Book Chapter" };
const typeColors = {
  journal: { bg: "#E3F2FD", text: "#1565C0", border: "rgba(21,101,192,0.15)" },
  conference: { bg: "#E8F5E9", text: "#2E7D32", border: "rgba(46,125,50,0.15)" },
  "book-chapter": { bg: "#FFF3E0", text: "#E65100", border: "rgba(230,81,0,0.15)" },
};

export function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [25, -15]);

  return (
    <section
      ref={sectionRef}
      id="research"
      style={{ background: "var(--color-bg-alt)", position: "relative", overflow: "hidden" }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,58,107,0.03), transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [30, -50]),
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          title="Research & Publications"
          subtitle="Published works in national and international journals"
        />

        <motion.div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            y: contentY,
          }}
        >
          {publications.map((pub, i) => {
            const Icon = typeIcons[pub.type];
            const colors = typeColors[pub.type];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-card"
                style={{
                  background: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem 1.75rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${colors.text}`,
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "0.6rem",
                      background: colors.bg,
                      borderRadius: "var(--radius-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--color-text)", lineHeight: 1.4, flex: 1 }}>
                        {pub.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.65rem",
                          borderRadius: "10px",
                          background: colors.bg,
                          color: colors.text,
                          whiteSpace: "nowrap",
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {typeLabels[pub.type]}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: 500, fontStyle: "italic", marginBottom: "0.25rem" }}>
                      {pub.journal}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      <span>{pub.authors}</span>
                      <span style={{ fontWeight: 600, color: "var(--color-gold-dark)" }}>{pub.year}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
