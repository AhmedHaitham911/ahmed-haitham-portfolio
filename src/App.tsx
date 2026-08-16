import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";  
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Certificates } from "./components/sections/Certificates";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;