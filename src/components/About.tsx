import { aboutText } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const floatingIcons = [
  { Icon: Code2, x: 20, y: 30, delay: 0 },
  { Icon: Rocket, x: 60, y: 20, delay: 0.5 },
  { Icon: Brain, x: 40, y: 70, delay: 1 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading title="About" />
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3 space-y-5"
          >
            {aboutText.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-premium p-5 rounded-xl border border-border/50"
              >
                <p className="text-foreground/90 leading-relaxed text-lg font-medium">
                  {p}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center relative"
          >
            {/* Glow orbs */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl"
            />

            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-foreground/10 via-primary/15 to-primary/5 border border-border/30 relative overflow-hidden shadow-premium-xl">
              {/* Floating icons */}
              {floatingIcons.map(({ Icon, x, y, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -12, 0],
                    x: [0, 4, 0],
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, delay },
                    x: { duration: 4, repeat: Infinity, delay },
                    rotate: { duration: 4.5, repeat: Infinity, delay },
                    opacity: { duration: 0.5, delay: delay + 0.3 },
                    scale: { duration: 0.5, delay: delay + 0.3 },
                  }}
                  className="absolute text-primary/70 drop-shadow-lg"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </motion.div>
              ))}

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 rounded-full bg-primary/20 blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute w-20 h-20 rounded-full bg-primary/15 blur-xl"
                />
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-bl-3xl">
                <div className="absolute top-0 right-0 w-[1px] h-12 bg-gradient-to-b from-primary/40 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-12 bg-gradient-to-l from-primary/40 to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 z-20"
            >
              <div className="glass-premium px-4 py-2 rounded-full shadow-premium-lg border border-primary/30 flex items-center gap-2">
                <Zap size={16} className="text-primary animate-glow-pulse" />
                <span className="text-xs font-bold text-foreground">Passionate Developer</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
