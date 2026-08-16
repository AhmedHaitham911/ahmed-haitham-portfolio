export type ProjectCategory = "AI" | "Data" | "Frontend";

import weRagImage from "../../../assets/images/projects/we-rag.png";
import amazonImage from "../../../assets/images/projects/amazon-deepsearch.png";
import healthcareImage from "../../../assets/images/projects/healthcare-pipeline.png";
import arabicGuardImage from "../../../assets/images/projects/arabic-content-guard.png";
import travillaImage from "../../../assets/images/projects/travilla.png";
import freshCartImage from "../../../assets/images/projects/fresh-cart.png";

export type Project = {
  title: string;
  shortTitle: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "WE Enterprise RAG Assistant",
    shortTitle: "WE RAG Assistant",
    description:
      "Built an AI pipeline to detect offensive and harmful Arabic text, analyze content at word and sentence level, classify severity, and support real-time processing with GPU acceleration.",
    category: "AI",
    technologies: ["Python", "RAG", "ChromaDB", "Hugging Face", "Gradio"],
    featured: true,
    image: weRagImage,
  },

  {
    title: "Amazon DeepSearch Assistant",
    shortTitle: "Amazon DeepSearch",
    description:
      "AI-powered shopping assistant using a multi-agent workflow for query expansion, retrieval validation, semantic search, and multilingual conversational product discovery.",
    category: "AI",
    technologies: [
      "Python",
      "Cohere API",
      "LangChain",
      "FAISS",
      "Multi-Agent AI",
    ],
    image: amazonImage,
  },

  {
    title: "Healthcare Data Pipeline in Microsoft Fabric",
    shortTitle: "Healthcare Data Pipeline",
    description:
      "End-to-end healthcare data pipeline transforming raw CSV and JSON data into analytics-ready datasets using Medallion Architecture and a Galaxy Schema.",
    category: "Data",
    technologies: [
      "Microsoft Fabric",
      "ELT",
      "Medallion Architecture",
      "Galaxy Schema",
      "Parquet",
      "Delta Lake",
    ],
    image: healthcareImage,
  },

  {
    title: "Arabic Content Guard",
    shortTitle: "Arabic Content Guard",
    description:
      "AI pipeline for detecting offensive and harmful Arabic text using multiple BERT models, contextual analysis, severity scoring, and GPU optimization.",
    category: "AI",
    technologies: ["Hugging Face", "BERT", "NLP", "Python"],
    image: arabicGuardImage,
  },

  {
    title: "Travilla User Panel",
    shortTitle: "Travilla",
    description:
      "Responsive travel booking platform with authentication, hotel and tour booking, protected routes, animations, and Docker-based deployment.",
    category: "Frontend",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "Framer Motion",
    ],
    image: travillaImage,
  },

  {
    title: "Fresh Cart",
    shortTitle: "Fresh Cart",
    description:
      "Modern e-commerce SPA with authentication, product browsing, cart management, order summary, form validation, protected routes, and API integration.",
    category: "Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "Axios", "React Router"],
    image: freshCartImage,
  },
];