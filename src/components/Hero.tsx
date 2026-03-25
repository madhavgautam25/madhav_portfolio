import { ArrowDown, Download, Sparkles, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import madhavPhoto from '@/assets/madhav-photo.jpg';

const easeOut = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const textReveal = {
  hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

const containVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20 md:pt-0">
      {/* Premium gradient orbs background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      </div>

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.08]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/[0.05]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[1000px] h-[1000px] rounded-full border border-primary/[0.03]"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={containVariants}
            className="flex items-center gap-3 justify-center lg:justify-start mb-6"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Code2 size={20} className="text-primary" />
            </div>
            <span className="text-sm font-mono font-semibold text-primary">Full-Stack Developer</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-orange-text relative whitespace-nowrap">
              {personalInfo.name}
              <motion.span
                className="absolute -bottom-3 left-0 right-0 h-1.5 rounded-full gradient-orange"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
            <br />
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent"
            >
              {personalInfo.headline}
            </motion.span>
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-orange-btn text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all orange-glow shadow-premium-lg"
            >
              <span>Explore My Work</span>
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowDown size={18} />
              </motion.div>
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="glass-premium border border-primary/30 px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:bg-primary/10 transition-all shadow-premium"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Profile photo with premium styling */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          {/* Glowing background */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-2xl -z-10"
          />

          {/* Image container with premium border */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-foreground/90 via-primary to-primary/70 orange-glow shadow-premium-xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
            <img
              src={madhavPhoto}
              alt="Madhav Gautam"
              className="w-full h-full rounded-full object-cover object-top relative z-10"
            />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 z-20"
          >
            <div className="glass-premium px-4 py-2 rounded-full shadow-premium-lg border border-primary/30">
              <div className="flex items-center gap-2">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Sparkles size={16} className="text-primary" />
                </motion.div>
                <span className="text-xs font-semibold text-foreground">Open to collaborate!</span>
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 shadow-premium"
          />
          <motion.div
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-16 -right-8 w-6 h-6 rounded-full bg-primary/15 border border-primary/30"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2 bg-primary/5 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
