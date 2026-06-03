"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { achievements } from "@/data/profile";
import { Trophy, Award, BookOpen, Star, CheckCircle, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "NET / SET Qualified": CheckCircle,
  "Ph.D. in Commerce": Award,
  "Best Paper Award": Trophy,
  "FDP Completion": BookOpen,
  "NPTEL Certification": Star,
  "NSS Programme Officer": Users,
};

export function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [25, -15]);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}
    >
      <div className="section-container">
        <SectionHeading
          title="Achievements & Awards"
          subtitle="Recognitions and professional milestones"
        />

        <motion.div
          className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            y: contentY,
          }}
        >
          {achievements.map((item, i) => {
            const Icon = iconMap[item.title] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-card"
                style={{
                  background: "white",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  border: "1px solid var(--color-primary-50)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(212,168,67,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-light)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary-50)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    className="glow-card"
                    style={{
                      padding: "0.7rem",
                      background: "linear-gradient(135deg, rgba(212,168,67,0.15), rgba(212,168,67,0.05))",
                      borderRadius: "var(--radius-sm)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: "var(--color-gold-dark)" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--color-text)" }}>
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--color-gold-dark)",
                          background: "linear-gradient(135deg, rgba(212,168,67,0.12), rgba(212,168,67,0.05))",
                          padding: "0.15rem 0.55rem",
                          borderRadius: "10px",
                          border: "1px solid rgba(212,168,67,0.15)",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
