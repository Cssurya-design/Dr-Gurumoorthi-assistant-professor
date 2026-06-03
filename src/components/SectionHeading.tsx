"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        id={id}
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          color: "var(--color-primary-dark)",
          marginBottom: subtitle ? "0.5rem" : "0",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {subtitle}
        </p>
      )}
      <motion.span
        className="heading-underline"
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}
