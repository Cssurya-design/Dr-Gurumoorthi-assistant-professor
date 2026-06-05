"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { GraduationCap } from "lucide-react";

// Inline SVGs so we don't rely on lucide-react for these specific icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const socials = [
  { name: "Google Scholar", icon: GraduationCap, link: siteConfig.social.googleScholar, color: "#4285F4" },
  { name: "LinkedIn", icon: LinkedinIcon, link: siteConfig.social.linkedin, color: "#0077b5" },
  { name: "Instagram", icon: InstagramIcon, link: siteConfig.social.Instagram, color: "#E1306C" },
  { name: "YouTube", icon: YoutubeIcon, link: siteConfig.social.Youtube, color: "#FF0000" },
].filter(s => s.link);

export function FloatingSocials() {
  if (socials.length === 0) return null;

  return (
    <div className="fixed z-50 flex flex-col gap-3 md:gap-4 right-3 bottom-4 md:right-6 md:bottom-10">
      {socials.map((social, index) => (
        <Bubble key={social.name} social={social} index={index} />
      ))}
    </div>
  );
}

function Bubble({ social, index }: { social: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noreferrer"
      aria-label={social.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? { x: 0, y: 0, scale: 1.15 } // Stop moving and enlarge on hover
          : {
              y: [0, -8, 2, -2, 0], // Float up and down (slightly reduced for mobile)
              x: [0, 2, -2, 2, 0],   // Drift side to side
              scale: 1,
            }
      }
      transition={
        isHovered
          ? { type: "spring", stiffness: 400, damping: 15 } // Snappy response on hover
          : {
              duration: 6 + index, // Slightly different durations for asynchronous floating
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      className="flex items-center justify-center w-10 h-10 md:w-[50px] md:h-[50px] rounded-full bg-[#0a1628]/70 backdrop-blur-md border border-[#d4a843]/40 text-white shadow-[0_8px_16px_rgba(0,0,0,0.4),_0_0_10px_rgba(212,168,67,0.2)] cursor-pointer relative no-underline"
    >
      <div 
        className="scale-75 md:scale-100 flex items-center justify-center"
        style={{ color: isHovered ? social.color : "#fff", transition: "color 0.3s ease" }}
      >
        <social.icon size={22} />
      </div>
      
      {/* Name Tooltip that appears on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ background: social.color }}
          className="absolute right-[50px] md:right-[65px] text-white px-2 py-1 md:px-3 md:py-1.5 rounded-md text-xs md:text-[13px] font-semibold whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.3)] pointer-events-none hidden md:block"
        >
          {social.name}
        </motion.div>
      )}
    </motion.a>
  );
}
