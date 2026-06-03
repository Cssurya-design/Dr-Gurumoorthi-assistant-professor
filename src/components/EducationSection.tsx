"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/profile";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      ref={sectionRef}
      id="education"
      style={{
        background: "var(--color-bg-alt)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background parallax decoration */}
      <motion.div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(26,58,107,0.03), transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [50, -80]),
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Academic qualifications and degrees"
        />

        <motion.div
          className="max-w-[800px] mx-auto relative pl-[40px] md:pl-[50px] pr-2 md:pr-0"
          style={{
            y: contentY,
          }}
        >
          <div className="timeline-line" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              style={{ position: "relative", marginBottom: "2rem" }}
            >
              <div className="timeline-dot" style={{ top: "1.5rem" }} />

              <div
                className="premium-card"
                style={{
                  background: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem 1.75rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  border: "1px solid var(--color-primary-50)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,58,107,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) translateX(4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) translateX(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary-50)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "0.65rem",
                      background: "linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))",
                      borderRadius: "var(--radius-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={22} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-dark)" }}>
                        {edu.degree} — {edu.field}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: "var(--color-gold-dark)",
                          background: "linear-gradient(135deg, rgba(212,168,67,0.12), rgba(212,168,67,0.05))",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "12px",
                          border: "1px solid rgba(212,168,67,0.15)",
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-primary)", fontWeight: 500, marginBottom: "0.35rem" }}>
                      {edu.institution}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                      {edu.university}
                    </p>
                    {edu.details && (
                      <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginTop: "0.5rem", lineHeight: 1.6 }}>
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
