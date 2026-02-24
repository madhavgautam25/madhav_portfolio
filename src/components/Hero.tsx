import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import madhavPhoto from '@/assets/selfImage.jpg';

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

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20 md:pt-0">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.06]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[800px] h-[800px] rounded-full border border-primary/[0.04]"
        />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-orange-text relative whitespace-nowrap">
              {personalInfo.name}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full gradient-orange"
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
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground"
            >
              {personalInfo.headline}
            </motion.span>
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textReveal}
            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
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
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(25 95% 53% / 0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="gradient-orange-btn text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 transition-all orange-glow"
            >
              View Projects <ArrowDown size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-border px-8 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-muted transition-all"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Profile photo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring' as const, stiffness: 200, damping: 20 }}
          className="relative flex-shrink-0"
        >
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-br from-foreground/80 via-primary to-primary/60 orange-glow">
            <img
              src={madhavPhoto}
              alt="Madhav Gautam"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-orange flex items-center justify-center shadow-lg"
          >
            <Sparkles size={18} className="text-white" />
          </motion.div>
          {/* Decorative dots */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-primary/20 border border-primary/30"
          />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-8 -left-5 w-4 h-4 rounded-full bg-primary/15"
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
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
