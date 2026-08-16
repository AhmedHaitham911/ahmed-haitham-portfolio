export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    institution: "The British University in Egypt",
    degree: "Bachelor of Science in Computer Science",
    period: "September 2022 — June 2026",
    location: "Cairo, Egypt",
    description:
      "Computer Science studies covering software engineering, artificial intelligence, data analysis, databases, web development, and systems.",
    coursework: [
      "Artificial Intelligence",
      "Data Analysis & Data Visualization",
      "Data Mining & Warehousing",
      "Web Development (React)",
      "Database",
      "Cloud Computing",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Distributed Systems",
    ],
  },
];