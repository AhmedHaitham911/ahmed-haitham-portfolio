type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
};

export default Section;