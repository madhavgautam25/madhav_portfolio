import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import TechStackVisualization from './TechStackVisualization';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Premium gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Skills" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <TechStackVisualization />
        </motion.div>
      </div>
    </section>
  );
}
