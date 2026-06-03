"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: siteConfig.images.portrait, alt: `${profile.fullName} — Formal Portrait`, caption: "Formal Portrait" },
  { src: siteConfig.images.gallery1, alt: `${profile.fullName} — Professional Photo`, caption: "Professional Photo" },
  { src: siteConfig.images.gallery2, alt: `${profile.fullName} — Academic Profile`, caption: "Academic Profile" },
];

export function GallerySection() {
  const [selected, setSelected] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [25, -15]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      style={{ background: "var(--color-bg-alt)", position: "relative", overflow: "hidden" }}
    >
      <div className="section-container">
        <SectionHeading title="Gallery" subtitle="Professional photographs" />

        <motion.div
          className="max-w-[950px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          style={{
            y: contentY,
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              onClick={() => setSelected(i)}
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: "3/4",
                boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                border: "3px solid white",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-8px) scale(1.02)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(26,58,107,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Hover overlay with zoom icon */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(transparent 40%, rgba(26,58,107,0.7) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem 1rem 1rem",
                  transition: "opacity 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {img.caption}
                  </span>
                  <div
                    style={{
                      padding: "0.4rem",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <ZoomIn size={16} style={{ color: "white" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(10,22,40,0.92)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            <button
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                cursor: "pointer",
                padding: "0.6rem",
                borderRadius: "50%",
                display: "flex",
                transition: "all 0.2s ease",
              }}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateY: -10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateY: 10 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                width={700}
                height={900}
                style={{
                  objectFit: "contain",
                  maxHeight: "85vh",
                  width: "auto",
                  borderRadius: "var(--radius-lg)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
