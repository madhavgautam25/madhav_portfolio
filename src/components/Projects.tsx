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
    <section id="projects" className="py-24 px-6 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(hsl(25 95% 53% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading title="Projects" />

        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 text-xs text-muted-foreground font-mono"
        >
          <Terminal size={14} className="text-primary" />
          <span>~/madhav/projects</span>
          <span className="text-primary">$</span>
          <span>ls -la</span>
          <span className="animate-pulse text-primary">▌</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 orange-glow-hover group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary/40 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-primary/40 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-mono text-xs">&gt;_</span>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <Link to={`/project/${project.slug}`}>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 45 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </Link>
                </div>

                {/* Status */}
                <div className="mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${
                    project.status === 'Completed' ? 'text-accent' : 'text-primary'
                  }`}>
                    [{project.status}]
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} /> GitHub
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 2 }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                  <Link
                    to={`/project/${project.slug}`}
                    className="text-xs font-mono text-primary hover:underline"
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
