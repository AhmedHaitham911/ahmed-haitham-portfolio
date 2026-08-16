import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "education",
      "skills",
      "projects",
      "experience",
      "certificates",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "#home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        if (section.offsetTop <= scrollPosition) {
          currentSection = `#${id}`;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};