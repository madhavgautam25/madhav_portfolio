import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Experience" />
        <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: i * 0.15 + 0.2 }}
                className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-primary"
              >
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="glass rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-lg">{exp.title}</h3>
                  <span className="text-xs text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{exp.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
