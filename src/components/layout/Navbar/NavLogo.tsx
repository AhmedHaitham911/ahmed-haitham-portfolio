const NavLogo = () => {
  return (
    <a href="#home" className="group flex items-center gap-2 select-none">
      <span
        className="text-2xl font-bold tracking-tight text-foreground transition-colors"
        style={{ fontFamily: "Space Grotesk" }}
      >
        AH<span className="text-primary">.</span>
      </span>
    </a>
  );
};

export default NavLogo; 