"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import { BookOpen, Users, Sparkles, GraduationCap } from "lucide-react";

const highlights = [
  { icon: BookOpen, label: "Research Papers", value: "6+" },
  { icon: GraduationCap, label: "Guided Students", value: "Ph.D / M.Phil." },
  { icon: Users, label: "Years Teaching", value: "12+" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const decorY = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,58,107,0.04), transparent 70%)",
          y: decorY,
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-8%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,67,0.04), transparent 70%)",
          y: decorY,
          pointerEvents: "none",
        }}
      />

      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Dedicated educator and researcher in Commerce"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
          {/* Photo with parallax */}
          <motion.div
            style={{ flex: "0 0 auto", position: "relative", y: photoY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-[290px] max-w-full aspect-[290/340] mx-auto lg:mx-0"
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(26,58,107,0.2), 0 0 0 1px rgba(26,58,107,0.05)",
                border: "4px solid white",
                position: "relative",
              }}
            >
              <Image
                src={siteConfig.images.gallery1}
                alt={`${profile.fullName} — About`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 290px"
              />
              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(transparent, rgba(26,58,107,0.3))",
                }}
              />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="float-animation"
              style={{
                position: "absolute",
                bottom: "-15px",
                right: "-15px",
                padding: "0.6rem 1rem",
                background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                color: "white",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 6px 20px rgba(26,58,107,0.35)",
                fontSize: "0.75rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                border: "2px solid white",
              }}
            >
              <Sparkles size={14} /> Assistant Professor
            </motion.div>
            {/* Decorative shapes */}
            <div
              style={{
                position: "absolute",
                top: "-18px",
                right: "-18px",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--color-gold-light), var(--color-gold))",
                opacity: 0.15,
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                width: "110px",
                height: "110px",
                borderRadius: "var(--radius-md)",
                background: "linear-gradient(135deg, var(--color-primary-200), var(--color-primary-400))",
                opacity: 0.12,
                zIndex: -1,
                transform: "rotate(15deg)",
              }}
            />
          </motion.div>

          {/* Text with parallax */}
          <motion.div
            className="flex-1 w-full max-w-[600px]"
            style={{
              y: textY,
            }}
          >
            {profile.aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                {para}
              </motion.p>
            ))}

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1.75rem",
                flexWrap: "wrap",
              }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 1.25rem",
                    background: "white",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    border: "1px solid var(--color-primary-50)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(26,58,107,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary-50)";
                  }}
                >
                  <div
                    style={{
                      padding: "0.4rem",
                      background: "linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100))",
                      borderRadius: "8px",
                    }}
                  >
                    <item.icon size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "var(--color-primary-dark)",
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}>
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
