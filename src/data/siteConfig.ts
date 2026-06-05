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
    "Dr.v.gurumoorthi",
    "drgurumoorthi",
    "Dr.gurumoorthi velusamy",
  ],

  email: "guruyindia@gmail.com",
  phone: "+91 9944820381",

  social: {
    googleScholar: "https://scholar.google.com/citations?user=WG21UZMAAAAJ&hl=en",
    Instagram: "https://www.instagram.com/gurumoorthi.velusamy/",
    Youtube: "https://www.youtube.com/@moderngurukulam1750",
    linkedin: "https://www.linkedin.com/in/gurumoorthi-v-72b95964/",
  },

  images: {
    portrait: "/images/portrait.jpeg",
    gallery1: "/images/gallery-1.jpeg",
    gallery2: "/images/gallery-2.jpeg",
    tnLogo: "/images/tn-logo.jpeg",
    brandLogo: "/images/brand-logo.png",
    sharePreview: "/images/share-preview.png",
  },

  documents: {
    cv: "/documents/cv.pdf",
  },
} as const;

export type SiteConfig = typeof siteConfig;
