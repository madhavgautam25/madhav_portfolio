import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navbar dark={dark} toggle={toggle} />
      <main className="relative z-10">
        <Hero />
        <SectionDivider variant="gradient" />
        <About />
        <SectionDivider variant="gradient" />
        <Skills />
        <SectionDivider variant="gradient" />
        <Projects />
        <SectionDivider variant="gradient" />
        <Experience />
        <SectionDivider variant="gradient" />
        <Education />
        <SectionDivider variant="gradient" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
