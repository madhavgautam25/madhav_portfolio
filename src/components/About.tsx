import { aboutText } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Code2, Rocket, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';

const floatingIcons = [
  { Icon: Code2, x: 20, y: 30, delay: 0 },
  { Icon: Rocket, x: 60, y: 20, delay: 0.5 },
  { Icon: Brain, x: 40, y: 70, delay: 1 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-3 space-y-4"
          >
            {aboutText.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-foreground/5 via-primary/20 to-primary/5 border border-border relative overflow-hidden">
              {/* Floating icons */}
              {floatingIcons.map(({ Icon, x, y, delay }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, delay },
                    rotate: { duration: 4, repeat: Infinity, delay },
                    opacity: { duration: 0.5, delay: delay + 0.3 },
                    scale: { duration: 0.5, delay: delay + 0.3 },
                  }}
                  className="absolute text-primary/70"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <Icon size={28} />
                </motion.div>
              ))}
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-20 h-20 rounded-full bg-primary/10 blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
