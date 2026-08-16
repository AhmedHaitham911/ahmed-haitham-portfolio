type HeadingProps = {
  title: string;
  subtitle?: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="mb-14">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        {subtitle}
      </p>

      <h2
        className="text-4xl font-bold md:text-5xl"
        style={{ fontFamily: "Space Grotesk" }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Heading;