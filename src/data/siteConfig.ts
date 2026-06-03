export const siteConfig = {
  // ⚠️ UPDATE THIS before deploying to production
  siteUrl: "https://drgurumoorthi-ap-commerce.vercel.app",

  name: "Dr. V. Gurumoorthi",
  fullName: "Dr. Gurumoorthi Velusamy",
  title: "Assistant Professor",
  department: "Department of Commerce",
  college: "Government Arts & Science College",
  collegeLocation: "Thittamalai, Nambiyur – 638 458",
  state: "Tamil Nadu, India",

  description:
    "Dr. V. Gurumoorthi — Assistant Professor of Commerce at Government Arts & Science College, Thittamalai, Nambiyur, Tamil Nadu. Researcher, educator, and academic professional.",

  keywords: [
    "Dr. V. Gurumoorthi",
    "Dr. Gurumoorthi Velusamy",
    "Assistant Professor",
    "Commerce",
    "Government Arts and Science College",
    "Thittamalai",
    "Nambiyur",
    "Tamil Nadu",
    "Academic Portfolio",
    "Research",
    "Publications",
    "Higher Education",
    "Department of Collegiate Education",
  ],

  email: "guruyindia@gmail.com",
  phone: "+91 9944820381",

  social: {
    // Add social links as available
    googleScholar: "",
    researchGate: "",
    linkedin: "",
    orcid: "",
  },

  images: {
    portrait: "/images/portrait.jpeg",
    gallery1: "/images/gallery-1.jpeg",
    gallery2: "/images/gallery-2.jpeg",
    tnLogo: "/images/tn-logo.jpeg",
    brandLogo: "/images/brand-logo.png",
  },

  documents: {
    cv: "/documents/cv.pdf",
  },
} as const;

export type SiteConfig = typeof siteConfig;
