"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { ChevronDown } from "lucide-react";

// Barcode bars (deterministic for hydration)
function generateBars() {
  const bars: { w: number; h: number }[] = [];
  for (let i = 0; i < 60; i++) {
    bars.push({ w: (i % 2 === 0) ? 2 : 1, h: 20 + ((i * 7) % 15) });
  }
  return bars;
}
const barcodeBars = generateBars();

// Floating particles data (deterministic for hydration)
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: 2 + ((i * 3) % 4),
  x: (i * 13) % 100,
  y: (i * 17) % 100,
  duration: 12 + ((i * 5) % 20),
  delay: (i * 7) % 8,
  opacity: 0.1 + (((i * 11) % 25) / 100),
}));

export function HeroSection() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse follow for card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-300, 300], [-10, 10]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated gradient background with parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20%",
          background:
            "linear-gradient(135deg, #050d1a 0%, #0a1628 15%, #1a3a6b 45%, #2a5298 65%, #1b6e3d 90%, #0a1628 100%)",
          backgroundSize: "200% 200%",
          y: bgY,
        }}
        className="gradient-animated-bg"
      />

      {/* Floating particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -200, -400],
              x: [0, (p.id % 2 === 0 ? 30 : -30), 0],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              background:
                p.id % 3 === 0
                  ? "rgba(212,168,67,0.6)"
                  : p.id % 3 === 1
                  ? "rgba(255,255,255,0.4)"
                  : "rgba(42,82,152,0.5)",
            }}
          />
        ))}

        {/* Large blurred orbs for depth */}
        {[
          { x: "10%", y: "20%", size: 300, color: "rgba(26,58,107,0.2)", dur: 15 },
          { x: "70%", y: "60%", size: 250, color: "rgba(212,168,67,0.06)", dur: 18 },
          { x: "80%", y: "10%", size: 200, color: "rgba(27,110,61,0.08)", dur: 20 },
        ].map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            }}
          />
        ))}
      </div>

      {/* Content with parallax */}
      <motion.div
        className="max-w-[1200px] w-full pt-28 pb-12 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative z-10"
        style={{
          opacity: heroOpacity,
        }}
      >
        {/* Left: Welcome Text with parallax */}
        <motion.div
          className="flex-1 max-w-[500px] text-white px-2 sm:px-0 text-center lg:text-left"
          style={{
            y: textY,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem 0.4rem 0.5rem",
              background: "rgba(212,168,67,0.12)",
              borderRadius: "30px",
              border: "1px solid rgba(212,168,67,0.25)",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={siteConfig.images.brandLogo}
                alt="VG Logo"
                width={28}
                height={28}
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
              className="shimmer-text"
            >
              Government of Tamil Nadu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.25rem",
              background: "linear-gradient(135deg, #ffffff 0%, #e8c96f 50%, #ffffff 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {profile.fullName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#FFD54F",
                letterSpacing: "0.02em",
              }}
            >
              {profile.designation}
            </span>
            <span style={{ fontWeight: 500 }}>{profile.department}</span>
            <span style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.6)" }}>
              {profile.college}
            </span>
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
              {profile.collegeLocation}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#about"
              style={{
                padding: "0.8rem 2rem",
                background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
                color: "#1a1a2e",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(212,168,67,0.3)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(212,168,67,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,168,67,0.3)";
              }}
            >
              Know More
            </a>
            <a
              href={siteConfig.documents.cv}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.8rem 2rem",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                fontWeight: 500,
                fontSize: "0.9rem",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.borderColor = "rgba(212,168,67,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download CV
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            style={{
              marginTop: "2.5rem",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            ← Click the ID card to flip it
          </motion.p>
        </motion.div>

        {/* Right: ID Card with parallax */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-none perspective-[1200px] cursor-pointer w-full max-w-[340px] mx-auto lg:mx-0 mt-8 lg:mt-0"
          style={{
            y: cardY,
          }}
          onClick={() => setFlipped(!flipped)}
        >
          <motion.div
            className="w-full aspect-[340/500] mx-auto origin-center"
            style={{
              transformStyle: "preserve-3d",
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.4))",
            }}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              style={{
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* ─── FRONT ─── */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid rgba(21,101,192,0.15)",
                }}
              >
                {/* Header Gradient */}
                <div
                  style={{
                    background: "linear-gradient(90deg, #fffbc7 0%, #ffeaf1 50%, #fadbf3 100%)",
                    padding: "0.85rem 1rem",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                    <Image src={siteConfig.images.brandLogo} alt="Left Logo" width={32} height={32} style={{ objectFit: "contain", mixBlendMode: "multiply" }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "#000", fontSize: "0.75rem", fontWeight: 700, lineHeight: 1.1 }}>
                        Government of Tamilnadu
                      </div>
                      <div style={{ color: "#000", fontSize: "0.65rem", fontWeight: 600 }}>
                        Department of Collegiate Education
                      </div>
                    </div>
                    <Image src={siteConfig.images.tnLogo} alt="Right Logo" width={32} height={32} style={{ objectFit: "contain", mixBlendMode: "multiply" }} />
                  </div>
                </div>

                {/* College Info */}
                <div style={{ padding: "0.5rem 1rem", textAlign: "center" }}>
                  <div style={{ color: "#0D47A1", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase" }}>
                    GOVERNMENT ARTS & SCIENCE COLLEGE
                  </div>
                  <div style={{ color: "#0D47A1", fontSize: "0.65rem", fontWeight: 600 }}>
                    Thittamalai, Nambiyur – 638 458.
                  </div>
                </div>

                {/* Photo & Details */}
                <div style={{ padding: "0.5rem 1.5rem 1rem", textAlign: "center" }}>
                  <div
                    style={{
                      width: "130px",
                      height: "150px",
                      margin: "0 auto 1rem",
                      border: "2px solid #AB47BC",
                      padding: "2px",
                      background: "white"
                    }}
                  >
                    <Image
                      src={siteConfig.images.portrait}
                      alt={`${profile.fullName} — Portrait`}
                      width={126}
                      height={146}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0D47A1", marginBottom: "0.6rem" }}>
                    Dr GURUMOORTHI VELUSAMY
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.4rem 1.25rem",
                      background: "#1565C0",
                      color: "white",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.6rem",
                    }}
                  >
                    ASSISTANT PROFESSOR
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0D47A1", textTransform: "uppercase" }}>
                    COMMERCE
                  </div>
                </div>

                {/* Barcode & Bottom Gradient */}
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", display: "flex", alignItems: "center" }}>
                  <div className="barcode" style={{ display: "flex", alignItems: "flex-end", height: "40px", gap: "1px" }}>
                    {barcodeBars.map((bar, i) => (
                      <div key={i} style={{ width: `${bar.w}px`, height: `${bar.h + 15}px`, background: "#333" }} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    right: "1rem",
                    width: "120px",
                    height: "40px",
                    background: "linear-gradient(90deg, transparent, #1565C0, #0D47A1)",
                  }}
                />
              </div>

              {/* ─── BACK ─── */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid rgba(21,101,192,0.15)",
                }}
              >
                {/* Purple corner accents */}
                <div style={{ position: "absolute", top: -40, right: -40, width: 80, height: 80, background: "#AB47BC", transform: "rotate(45deg)", opacity: 0.8 }} />
                <div style={{ position: "absolute", bottom: -40, left: -40, width: 80, height: 80, background: "#AB47BC", transform: "rotate(45deg)", opacity: 0.8 }} />
                
                <div style={{ padding: "2.5rem 1.5rem" }}>
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "#0D47A1",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "1.5rem",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px"
                    }}
                  >
                    PERSONAL INFORMATION
                  </div>
                  {[
                    { label: "Father Name", value: profile.fatherName },
                    { label: "Address", value: profile.address },
                    { label: "Email", value: profile.email },
                    { label: "Phone", value: profile.phone.replace("+91 ", "") },
                    { label: "Aadhar", value: "***853293217" },
                    { label: "Blood Group", value: profile.bloodGroup },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "flex",
                        marginBottom: "0.85rem",
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 700,
                          color: "#0D47A1",
                          width: "95px",
                          flexShrink: 0,
                        }}
                      >
                        {row.label}
                      </span>
                      <span style={{ color: "#333", flex: 1, paddingLeft: "10px" }}>
                        : {row.label === "Email" ? (
                          <a 
                            href={`mailto:${row.value}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "#1565C0", textDecoration: "none", position: "relative", zIndex: 10 }}
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Barcode & Bottom Gradient */}
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", display: "flex", alignItems: "center" }}>
                  <div className="barcode" style={{ display: "flex", alignItems: "flex-end", height: "40px", gap: "1px" }}>
                    {barcodeBars.map((bar, i) => (
                      <div key={i} style={{ width: `${bar.w}px`, height: `${bar.h + 15}px`, background: "#333" }} />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    right: "1rem",
                    width: "120px",
                    height: "40px",
                    background: "linear-gradient(90deg, transparent, #1565C0, #0D47A1)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.35)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
