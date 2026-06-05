import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ResearchSection } from "@/components/ResearchSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { GallerySection } from "@/components/GallerySection";
import { PresentationsSection } from "@/components/PresentationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <ResearchSection />
        <PresentationsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
