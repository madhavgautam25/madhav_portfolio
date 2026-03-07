import { ExternalLink, Github, ArrowUpRight, Terminal } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, rotateX: 5 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Premium gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(25 95% 53% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading title="Projects" />

        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-10 text-xs text-muted-foreground font-mono px-4 py-3 rounded-lg bg-secondary/30 border border-border/50 inline-flex"
        >
          <Terminal size={14} className="text-primary" />
          <span>~/madhav/projects</span>
          <span className="text-primary font-bold">$</span>
          <span>ls -la</span>
          <span className="animate-pulse text-primary font-bold">▌</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-premium rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 orange-glow-hover group relative overflow-hidden shadow-premium hover:shadow-premium-lg"
            >
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-bl-2xl">
                <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-primary/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-xs font-bold">&gt;_</span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Link to={`/project/${project.slug}`}>
                    <motion.div
                      initial={{ rotate: 0, y: 0 }}
                      whileHover={{ rotate: 45, y: -2 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={22} strokeWidth={2} />
                    </motion.div>
                  </Link>
                </div>

                {/* Status badge */}
                <div className="mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-full inline-block ${
                    project.status === 'Completed' 
                      ? 'text-accent bg-accent/10 border border-accent/20' 
                      : 'text-primary bg-primary/10 border border-primary/20'
                  }`}>
                    [{project.status}]
                  </span>
                </div>

                <p className="text-foreground/80 text-sm mb-5 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <motion.span 
                      key={t} 
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20 hover:border-primary/40 transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> GitHub
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} /> Live
                      </motion.a>
                    )}
                  </div>
                  <Link
                    to={`/project/${project.slug}`}
                    className="text-xs font-mono font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
