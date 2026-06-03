"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/profile";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: "0%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,67,0.03), transparent 60%)",
          y: useTransform(scrollYProgress, [0, 1], [40, -60]),
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          title="Teaching Experience"
          subtitle="Professional career in academia"
        />

        <motion.div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "50px",
            y: contentY,
          }}
        >
          <div className="timeline-line" />

          {experience.map((exp, i) => (
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
                  borderLeft: i === 0
                    ? "4px solid var(--color-gold)"
                    : "4px solid var(--color-primary-300)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,58,107,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0) translateX(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      padding: "0.65rem",
                      background: i === 0
                        ? "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))"
                        : "linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))",
                      borderRadius: "var(--radius-sm)",
                      flexShrink: 0,
                      boxShadow: i === 0 ? "0 4px 12px rgba(212,168,67,0.3)" : "none",
                    }}
                  >
                    <Briefcase
                      size={22}
                      style={{ color: i === 0 ? "#1a1a2e" : "var(--color-primary)" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--color-primary-dark)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {exp.title}
                      {i === 0 && (
                        <span
                          style={{
                            marginLeft: "0.6rem",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            padding: "0.15rem 0.5rem",
                            background: "linear-gradient(135deg, rgba(27,110,61,0.1), rgba(27,110,61,0.05))",
                            color: "var(--color-green)",
                            borderRadius: "8px",
                            border: "1px solid rgba(27,110,61,0.15)",
                            verticalAlign: "middle",
                          }}
                        >
                          CURRENT
                        </span>
                      )}
                    </h3>
                    <p style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.4rem" }}>
                      {exp.institution}
                    </p>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.8rem", color: "var(--color-gold-dark)", fontWeight: 600 }}>
                        <Calendar size={13} /> {exp.from} — {exp.to}
                      </span>
                    </div>
                    {exp.description && (
                      <p style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                        {exp.description}
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
