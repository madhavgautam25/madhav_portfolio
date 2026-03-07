import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Cpu } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { scale: 0, opacity: 0, rotate: -45 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

export default function TechStackVisualization() {
  return (
    <div className="space-y-8">
      {skills.map((category, idx) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: idx * 0.1 }}
          className="relative"
        >
          {/* Category label with line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Cpu size={18} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold gradient-orange-text">{category.category}</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
          </div>

          {/* Animated mesh grid of skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {category.items.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                <div className="relative glass-premium p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10 flex flex-col items-center justify-center gap-2 min-h-24 cursor-default group/item">
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl" />

                  {skill.icon ? (
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover/item:animate-spin-slow relative z-10"
                      loading="lazy"
                      whileHover={{ scale: 1.2, filter: 'brightness(1.2)' }}
                    />
                  ) : (
                    <Cpu size={20} className="opacity-60 relative z-10" />
                  )}

                  <span className="text-xs font-semibold text-center text-foreground/80 group-hover/item:text-primary transition-colors relative z-10">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
