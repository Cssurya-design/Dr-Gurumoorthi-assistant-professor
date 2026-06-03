import { siteConfig } from "@/data/siteConfig";
import { profile, education } from "@/data/profile";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    givenName: "Gurumoorthi",
    familyName: "Velusamy",
    honorificPrefix: "Dr.",
    jobTitle: profile.designation,
    description: profile.bio,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${siteConfig.images.portrait}`,
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: profile.college,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thittamalai, Nambiyur",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    },
    alumniOf: education.map((edu) => ({
      "@type": "CollegeOrUniversity",
      name: edu.institution,
    })),
    knowsAbout: [
      "Commerce",
      "Financial Management",
      "Accounting",
      "Business Studies",
      "Research Methodology",
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Academic Portfolio`,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: profile.fullName,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.fullName,
    },
    url: siteConfig.siteUrl,
    name: `${siteConfig.name} — ${profile.designation}`,
    description: siteConfig.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
