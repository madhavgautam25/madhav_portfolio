import { experiences } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading title="Experience" />
        <div className="relative pl-8 border-l-2 border-gradient-to-b from-primary/60 via-primary/30 to-transparent space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
            >
              {/* Animated timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: i * 0.15 + 0.2 }}
                className="absolute -left-[calc(2.25rem+2px)] top-2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-lg"
              >
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </motion.div>

              <motion.div
                whileHover={{ x: 6, y: -2 }}
                className="glass-premium rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-premium hover:shadow-premium-lg group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Briefcase size={18} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{exp.title}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono font-semibold px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {exp.org}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
