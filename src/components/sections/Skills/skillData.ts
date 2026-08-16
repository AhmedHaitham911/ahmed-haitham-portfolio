import type { ElementType } from "react";

import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaChartBar,
  FaRobot,
} from "react-icons/fa";

import {
  BarChart3,
  FileSpreadsheet,
  Database as DatabaseIcon,
  BrainCircuit,
  Workflow,
  Boxes,
  Search,
  Cpu,
  Layers3,
} from "lucide-react";

export type SkillCategory =
  | "Data Analytics & Business Intelligence"
  | "AI & Machine Learning"
  | "Data Engineering"
  | "Front-End Development";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon?: ElementType;
  color?: string;
};

export const skills: Skill[] = [
  // ==========================================
  // DATA ANALYTICS & BUSINESS INTELLIGENCE
  // ==========================================

  {
    name: "SQL",
    category: "Data Analytics & Business Intelligence",
    icon: DatabaseIcon,
    color: "#336791",
  },
  {
    name: "Power BI",
    category: "Data Analytics & Business Intelligence",
    icon: BarChart3,
    color: "#F2C811",
  },
  {
    name: "Excel",
    category: "Data Analytics & Business Intelligence",
    icon: FileSpreadsheet,
    color: "#217346",
  },
  {
    name: "Python",
    category: "Data Analytics & Business Intelligence",
    icon: FaPython,
    color: "#3776AB",
  },
  {
    name: "Pandas",
    category: "Data Analytics & Business Intelligence",
    icon: BarChart3,
    color: "#150458",
  },
  {
    name: "NumPy",
    category: "Data Analytics & Business Intelligence",
    icon: Cpu,
    color: "#4D77CF",
  },
  {
    name: "Matplotlib",
    category: "Data Analytics & Business Intelligence",
    icon: FaChartBar,
    color: "#11557C",
  },
  {
    name: "Seaborn",
    category: "Data Analytics & Business Intelligence",
    icon: BarChart3,
    color: "#4C72B0",
  },
  {
    name: "Plotly",
    category: "Data Analytics & Business Intelligence",
    icon: BarChart3,
    color: "#3F4F75",
  },

  // ==========================================
  // AI & MACHINE LEARNING
  // ==========================================

  {
    name: "Scikit-learn",
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "#F7931E",
  },
  {
    name: "PyTorch",
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "#EE4C2C",
  },
  {
    name: "OpenCV",
    category: "AI & Machine Learning",
    icon: Search,
    color: "#5C3EE8",
  },
  {
    name: "YOLO",
    category: "AI & Machine Learning",
    icon: Search,
    color: "#00A67E",
  },
  {
    name: "CNN",
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "#8B5CF6",
  },
  {
    name: "GANs",
    category: "AI & Machine Learning",
    icon: Boxes,
    color: "#EC4899",
  },
  {
    name: "LLMs",
    category: "AI & Machine Learning",
    icon: FaRobot,
    color: "#10B981",
  },
  {
    name: "RAG",
    category: "AI & Machine Learning",
    icon: Search,
    color: "#06B6D4",
  },
  {
    name: "LangChain",
    category: "AI & Machine Learning",
    icon: Workflow,
    color: "#1C3C3C",
  },
  {
    name: "Hugging Face",
    category: "AI & Machine Learning",
    icon: FaRobot,
    color: "#FFD21E",
  },
  {
    name: "FAISS",
    category: "AI & Machine Learning",
    icon: Search,
    color: "#2563EB",
  },
  {
    name: "ChromaDB",
    category: "AI & Machine Learning",
    icon: DatabaseIcon,
    color: "#7C3AED",
  },
  {
    name: "Gradio",
    category: "AI & Machine Learning",
    icon: Layers3,
    color: "#FF7C00",
  },


  // ==========================================
  // DATA ENGINEERING
  // ==========================================

  {
    name: "Microsoft Fabric",
    category: "Data Engineering",
    icon: Layers3,
    color: "#742774",
  },
  {
    name: "ETL / ELT",
    category: "Data Engineering",
    icon: Workflow,
    color: "#0EA5E9",
  },
  {
    name: "Data Warehousing",
    category: "Data Engineering",
    icon: DatabaseIcon,
    color: "#64748B",
  },
  {
    name: "Data Modeling",
    category: "Data Engineering",
    icon: Boxes,
    color: "#8B5CF6",
  },


  // ==========================================
  // FRONT-END DEVELOPMENT
  // ==========================================

  {
    name: "React",
    category: "Front-End Development",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Front-End Development",
    icon: FaReact,
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    category: "Front-End Development",
    icon: FaJs,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    category: "Front-End Development",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    category: "Front-End Development",
    icon: FaCss3Alt,
    color: "#06B6D4",
  },
  {
    name: "HTML5",
    category: "Front-End Development",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "Front-End Development",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "Vite",
    category: "Front-End Development",
    icon: FaReact,
    color: "#646CFF",
  },
  {
    name: "Git",
    category: "Front-End Development",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Front-End Development",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "Docker",
    category: "Front-End Development",
    icon: FaDocker,
    color: "#2496ED",
  },
];