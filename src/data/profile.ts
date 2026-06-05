// ============================================================
// Dr. V. Gurumoorthi — Portfolio Content Data
// Update details here without modifying layout components.
// ============================================================

// ── Types ────────────────────────────────────────────────────

export interface Profile {
  name: string;
  fullName: string;
  fatherName: string;
  designation: string;
  department: string;
  college: string;
  collegeLocation: string;
  bio: string;
  aboutParagraphs: string[];
  email: string;
  phone: string;
  address: string;
  bloodGroup: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  university: string;
  year: string;
  details?: string;
}

export interface ExperienceItem {
  title: string;
  institution: string;
  location: string;
  from: string;
  to: string;
  description?: string;
}

export interface PublicationItem {
  title: string;
  journal: string;
  year: string;
  authors: string;
  type: "journal" | "conference" | "book-chapter";
  doi?: string;
}

export interface AchievementItem {
  title: string;
  year: string;
  description: string;
  icon?: string;
}

export interface DocumentLink {
  label: string;
  href: string;
  icon?: string;
}

export interface PresentationItem {
  title: string;
  url: string;
  thumbnail?: string;
}

// ── Data ─────────────────────────────────────────────────────

export const profile: Profile = {
  name: "DR. V. GURUMOORTHI",
  fullName: "DR. V. GURUMOORTHI VELUSAMY",
  fatherName: "R. K. Velusamy",
  designation: "Assistant Professor",
  department: "Department of Commerce",
  college: "Government Arts & Science College",
  collegeLocation: "Thittamalai, Nambiyur – 638 458",
  bio: "A dedicated Assistant Professor of Commerce with a passion for research, teaching, and academic excellence in higher education under the Government of Tamil Nadu.",
  aboutParagraphs: [
    "Dr. V. Gurumoorthi is an Assistant Professor in the Department of Commerce at the Government Arts & Science College, Thittamalai, Nambiyur, Tamil Nadu. He is a committed educator and researcher specializing in Commerce and Business Studies.",
    "With a strong academic foundation including a Ph.D. in Commerce, he brings extensive teaching experience and research acumen to the institution. He is affiliated with the Department of Collegiate Education, Government of Tamil Nadu.",
    "His research interests span financial management, accounting practices, business economics, and contemporary issues in Indian commerce. He is actively involved in publishing research papers in national and international journals.",
  ],
  email: "guruyindia@gmail.com",
  phone: "+91 9944820381",
  address: "111, 1st Street, Elurmedu, Arrakkankottai, Gobi, Erode Dt – 638 506",
  bloodGroup: "O+ve",
};

export const education: EducationItem[] = [
  {
    degree: "Ph.D.",
    field: "Commerce",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    university: "Bharathiar University, Coimbatore",
    year: "2020",
    details: "Doctoral research in Commerce with specialization in financial studies and business management.",
  },
  {
    degree: "M.Phil.",
    field: "Commerce",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    university: "Bharathiar University, Coimbatore",
    year: "2014",
    details: "Master of Philosophy in Commerce — research-oriented postgraduate degree.",
  },
  {
    degree: "M.Com.",
    field: "Commerce",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    university: "Bharathiar University, Coimbatore",
    year: "2012",
    details: "Master of Commerce with advanced studies in accounting, finance, and business.",
  },
  {
    degree: "B.Com.",
    field: "Commerce",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    university: "Bharathiar University, Coimbatore",
    year: "2010",
    details: "Bachelor of Commerce — foundation in accounting, economics, and business administration.",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Guest Lecturer",
    institution: "Government Arts & Science College",
    location: "Thittamalai, Nambiyur – 638 458, Tamil Nadu",
    from: "2023",
    to: "Present",
    description:
      "Teaching undergraduate and postgraduate Commerce courses. Guiding students in research projects and academic activities. Contributing to departmental development and college administration.",
  },
  {
    title: "Assistant Professor",
    institution: "Dr. NGP Arts & Science College, Coimbatore",
    location: "Kalapatti Main Rd, Sharp Nagar, Nehru Nagar West - 641 048, Tamil Nadu",
    from: "2020",
    to: "2023",
    description:
      "Teaching undergraduate and postgraduate Commerce courses. Guiding students in research projects and academic activities. Contributing to departmental development and college administration.",
  },
  {
    title: "Assistant Professor",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    location: "Sathyamangalam – 638 506, Tamil Nadu",
    from: "2013",
    to: "2020",
    description:
      "Teaching undergraduate and postgraduate Commerce courses. Guiding students in research projects and academic activities. Contributing to departmental development and college administration.",
  },
  {
    title: "Research Guidance",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    location: "Thittamalai, Nambiyur – 638 458, Tamil Nadu",
    from: "2018",
    to: "2022",
    description:
      "Guiding M.Phil. and Ph.D. students in research methodology, literature review, data analysis, and thesis writing. Providing mentorship in academic research and scholarly writing.",
  },
  {
    title: "Research Scholar",
    institution: "Kaamadheu Arts & Science College, Sathyamangalam",
    location: "Erode, Tamil Nadu",
    from: "2015",
    to: "2020",
    description:
      "Conducted doctoral research in Commerce. Published papers in peer-reviewed journals and presented at national and international conferences.",
  },
];
export const achievements: AchievementItem[] = [
  {
    title: "Eco club Co-ordinator",
    year: "2025",
    description: "Eco Club Activity , World Environment Day 31th january 2025.",
  },
  {
    title: "Ph.D. in Commerce",
    year: "2020",
    description: "Successfully defended doctoral thesis at Kaamadheu Arts & Science College, Sathyamangalam.",
  },
  {
    title: "Best Paper Award",
    year: "2020",
    description: "Received Best Paper Award at the National Conference on Contemporary Issues in Commerce.",
  },
  {
    title: "FDP Completion",
    year: "2023",
    description: "Completed multiple Faculty Development Programs on NEP 2020, Research Methodology, and ICT in Teaching.",
  },
  {
    title: "NPTEL Certification",
    year: "2024",
    description: "Completed online certification courses through NPTEL/SWAYAM platform in Financial Management.",
  },
  {
    title: "NSS Programme Officer",
    year: "2023",
    description: "Served as NSS Programme Officer coordinating community service and student development activities.",
  },
];
export const publications: PublicationItem[] = [
  {
    title: "A Study on Financial Literacy among College Students in Erode District",
    journal: "International Journal of Commerce and Management Research",
    year: "2023",
    authors: "Gurumoorthi, V.",
    type: "journal",
  },
  {
    title: "Impact of Digital Payment Systems on Small Business Enterprises in Tamil Nadu",
    journal: "Journal of Business and Financial Affairs",
    year: "2022",
    authors: "Gurumoorthi, V., & Senthilkumar, R.",
    type: "journal",
  },
  {
    title: "Analysis of Working Capital Management in Manufacturing Sector",
    journal: "Asian Journal of Management Sciences",
    year: "2021",
    authors: "Gurumoorthi, V.",
    type: "journal",
  },
  {
    title: "Role of Micro Finance in Rural Economic Development — A Study in Erode District",
    journal: "National Conference on Contemporary Issues in Commerce and Management",
    year: "2020",
    authors: "Gurumoorthi, V.",
    type: "conference",
  },
  {
    title: "Consumer Awareness and Satisfaction towards Online Banking Services",
    journal: "International Journal of Research in Commerce & Management",
    year: "2019",
    authors: "Gurumoorthi, V., & Palanisamy, K.",
    type: "journal",
  },
  {
    title: "Entrepreneurship Development among Women Self-Help Groups",
    journal: "Book Chapter in 'Emerging Trends in Commerce and Management'",
    year: "2019",
    authors: "Gurumoorthi, V.",
    type: "book-chapter",
  },
];
export const documents: DocumentLink[] = [
  {
    label: "Download CV (PDF)",
    href: "/documents/cv.pdf",
    icon: "file-text",
  },
];

export const presentations: PresentationItem[] = [
  {
    title: "Banker and Customer",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/banker-and-customer-238892131/238892131"
  },
  {
    title: "Winding up",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/winding-up-226980662/226980662"
  },
  {
    title: "Utility Analysis",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/utility-analaysis-226980523/226980523"
  },
  {
    title: "Managerial Economics",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/economics-anintro-200205054137-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/managerial-economics-226980224/226980224"
  },
  {
    title: "Company Meetings",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/company-meetings-226980095/226980095"
  },
  {
    title: "Company Law",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/company-law-226979805/226979805"
  },
  {
    title: "Capital Gain",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/capital-gain-226979278/226979278"
  },
  {
    title: "Budgetary Control",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/budgetarycontrol-200205053403-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/budgetary-control-226979167/226979167"
  },
  {
    title: "Articles of Association",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/aoa-200205053331-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/articles-of-association-226979107/226979107"
  },
  {
    title: "Ratio Analysis",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/ratioanalysis-170201123300-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/ratio-analysis-71633481/71633481"
  },
  {
    title: "Intro of Mgt Ac",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/intro-170201123148-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/intro-of-mgt-ac/71633426"
  },
  {
    title: "Origin of Company Law",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/origin-of-company-law/71633313"
  },
  {
    title: "Principles of Accountancy",
    thumbnail: "https://cdn.slidesharecdn.com/ss_thumbnails/principlesofaccountancyorbusinessaccounting-170201122504-thumbnail.jpg?width=640&height=640&fit=bounds",
    url: "https://www.slideshare.net/slideshow/principles-of-accountancy-or-business-accounting/71633116"
  },
  {
    title: "Research Process",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/research-process-56235701/56235701"
  },
  {
    title: "Capital Gain (2)",
    thumbnail: "",
    url: "https://www.slideshare.net/slideshow/capital-gain-227256923/227256923"
  }
];
