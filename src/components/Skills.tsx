import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const skillItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Skills" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 orange-glow-hover group relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-5 gradient-orange-text flex items-center gap-2">
                  {group.category}
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Zap size={16} className="text-primary" />
                  </motion.span>
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default group/skill border border-transparent hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain group-hover/skill:animate-spin-slow"
                          loading="lazy"
                        />
                      ) : (
                        <Cpu size={14} className="opacity-60" />
                      )}
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
