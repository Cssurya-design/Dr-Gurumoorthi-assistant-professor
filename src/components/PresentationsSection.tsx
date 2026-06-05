"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { presentations } from "@/data/profile";
import { MonitorPlay, ExternalLink } from "lucide-react";

export function PresentationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section
      ref={sectionRef}
      id="presentations"
      style={{
        background: "var(--color-bg)",
        position: "relative",
        padding: "5rem 0",
      }}
    >
      <div className="section-container">
        <SectionHeading
          title="Presentations"
          subtitle="Explore my academic and professional slide decks on SlideShare"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {presentations.map((item, index) => (
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "white",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(26,58,107,0.06)",
                border: "1px solid var(--color-primary-50)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(26,58,107,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-gold-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(26,58,107,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary-50)";
              }}
            >
              {/* Thumbnail Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16/9",
                  backgroundColor: "#f5f7fa",
                  overflow: "hidden",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    unoptimized={true}
                    style={{ objectFit: "contain", backgroundColor: "white" }}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                ) : (
                  <div style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "white"
                  }}>
                    <MonitorPlay size={24} style={{ marginBottom: "0.75rem", opacity: 0.7 }} />
                    <h4 style={{ 
                      fontSize: "1.1rem", 
                      fontWeight: 600, 
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      margin: 0
                    }}>
                      {item.title}
                    </h4>
                    <div style={{ 
                      marginTop: "0.5rem", 
                      fontSize: "0.75rem", 
                      opacity: 0.8,
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      Dr V GURUMOORTHI
                    </div>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div
                  className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(26,58,107,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem",
                      background: "white",
                      borderRadius: "50%",
                      color: "var(--color-primary)",
                    }}
                  >
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div style={{ padding: "1.25rem" }}>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--color-primary-dark)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <span>by</span>
                  <span style={{ fontWeight: 600, color: "var(--color-primary)" }}>
                    Dr V GURUMOORTHI
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
