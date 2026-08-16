import { Code2, Briefcase, Award, HeartHandshake } from "lucide-react";
import { Container, Section } from "../../ui";
import StatCard from "./StatCard";

const stats = [
  {
    value: "10+",
    label: "Projects",
    description: "Completed",
    icon: Code2,
    color: "#3B82F6",
  },
  {
    value: "2+",
    label: "Experience",
    description: "Years",
    icon: Briefcase,
    color: "#8B5CF6",
  },
  {
    value: "5+",
    label: "Certifications",
    description: "Earned",
    icon: Award,
    color: "#06B6D4",
  },
  {
    value: "100%",
    label: "Passion",
    description: "Dedication",
    icon: HeartHandshake,
    color: "#F97316",
  },
];

const Stats = () => {
  return (
    <Section className="pt-2 mt-[-60px]">
      {" "}
      <Container>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Stats;
