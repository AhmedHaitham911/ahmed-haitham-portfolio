export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Telecom Egypt (WE)",
    role: "AI & Data Analysis Intern",
    period: "August 2025 — September 2025",
    location: "Egypt",
    description:
      "Hands-on experience combining customer analytics, machine learning, RAG systems, and telecom business analysis.",
    highlights: [
      "Developed a Best Next Offer recommendation system by analyzing customer behavior and subscription patterns through EDA and machine learning to recommend package upgrades, downgrades, or retention strategies.",
      "Built an Enterprise RAG assistant using LangChain, ChromaDB, Hugging Face, and Gradio to enable intelligent retrieval of internal knowledge and documentation.",
      "Gained practical experience in Customer Value Management (CVM), telecom business analytics, and enterprise infrastructure within a real-world telecommunications environment.",
    ],
  },

  {
    company: "BARQ Systems",
    role: "Data Management Track Intern",
    period: "Aug 2025 — Sep 2025",
    location: "Egypt",
    description:
      "Hands-on experience across data management, data engineering, AI, and interactive AI application development.",
    highlights: [
      "Designed and implemented ETL pipelines and handled data preprocessing.",
      "Worked with Microsoft Fabric for data workflows and transformation.",
      "Applied Python, Pandas, NumPy, and Matplotlib for analysis and visualization.",
      "Worked with LLMs, RAG, embeddings, FAISS, LangChain, Hugging Face, and Transformers.",
      "Built interactive AI applications using Gradio.",
    ],
  },
];