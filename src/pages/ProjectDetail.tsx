import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Terminal, Code2, Layers, Clock, User, Activity, ChevronRight, Zap } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];
const easeSmooth = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const glitchVariant = {
  hidden: { opacity: 0, x: -40, skewX: -10 },
  visible: {
    opacity: 1, x: 0, skewX: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easeSmooth } },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: easeSmooth } },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { dark } = useTheme();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const statusColor = project.status === 'Completed' ? 'text-accent' : project.status === 'In Progress' ? 'text-primary' : 'text-muted-foreground';

  return (
    <div className={`min-h-screen bg-background text-foreground relative ${dark ? 'dark' : ''}`}>
      <AnimatedBackground />

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 50%) 2px, hsl(0 0% 50%) 3px)' }}
      />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(25 95% 53% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 53% / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <main className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-40 glass border-b border-border/50"
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </motion.button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Terminal size={14} className="text-primary" />
              <span>~/projects/</span>
              <ChevronRight size={12} />
              <span className="text-primary">{project.slug}</span>
            </div>
          </div>
        </motion.header>

        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <motion.section
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                project.status === 'Completed' ? 'border-accent/30 bg-accent/10' :
                project.status === 'In Progress' ? 'border-primary/30 bg-primary/10' : 'border-muted-foreground/30 bg-muted/50'
              } ${statusColor}`}>
                <Activity size={12} className="animate-pulse" />
                {project.status}
              </span>
            </motion.div>

            {/* Title with glitch effect */}
            <motion.h1
              variants={glitchVariant}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              <span className="gradient-orange-text">{project.title}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8"
            >
              {project.longDescription}
            </motion.p>

            {/* Meta info */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border text-sm">
                <User size={15} className="text-primary" />
                <span className="text-muted-foreground">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-border text-sm">
                <Clock size={15} className="text-primary" />
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(25 95% 53% / 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="gradient-orange-btn text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 orange-glow"
              >
                <Github size={18} /> View Source Code
              </motion.a>
              {project.demo !== '#' && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-border px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted transition-all"
                >
                  <ExternalLink size={18} /> Live Demo
                </motion.a>
              )}
            </motion.div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold font-mono">Tech Stack</h2>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ scale: 1.1, y: -4, boxShadow: '0 8px 30px hsl(25 95% 53% / 0.3)' }}
                  className="px-4 py-2 rounded-xl text-sm font-mono font-semibold bg-primary/10 text-primary border border-primary/20 cursor-default transition-shadow"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Features & Challenges Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Features */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold font-mono">Features</h2>
              </motion.div>
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6, borderColor: 'hsl(25 95% 53% / 0.4)' }}
                    className="flex items-start gap-3 p-4 rounded-xl glass border border-border transition-all duration-300 group"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:shadow-[0_0_10px_hsl(25_95%_53%_/_0.6)] transition-shadow" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg gradient-orange flex items-center justify-center">
                  <Layers size={16} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold font-mono">Challenges</h2>
              </motion.div>
              <div className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 6, borderColor: 'hsl(25 95% 53% / 0.4)' }}
                    className="flex items-start gap-3 p-4 rounded-xl glass border border-border transition-all duration-300 group"
                  >
                    <Terminal size={14} className="mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Terminal-style project info */}
          <motion.section
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="rounded-2xl overflow-hidden border border-border">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">project-info.sh</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 bg-card/50 font-mono text-sm space-y-2">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-foreground">$PROJECT_NAME</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary pl-4">
                  {project.title}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                  <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-foreground">$ROLE</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-primary pl-4">
                  {project.role}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-foreground">$DURATION</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-primary pl-4">
                  {project.duration}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> <span className="text-foreground">$TECH_STACK</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-primary pl-4">
                  [{project.tech.join(', ')}]
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                  <span className="text-primary">$</span> <span className="text-muted-foreground animate-pulse">▌</span>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Other Projects */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-6 font-mono">Other Projects</motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects
                .filter((p) => p.slug !== slug)
                .map((p) => (
                  <motion.div key={p.slug} variants={scaleIn}>
                    <Link
                      to={`/project/${p.slug}`}
                      className="block p-5 rounded-xl glass border border-border hover:border-primary/40 transition-all duration-300 orange-glow-hover group"
                    >
                      <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.section>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted transition-all"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
