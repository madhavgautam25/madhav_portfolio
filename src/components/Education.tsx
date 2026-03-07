import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              className="glass-premium rounded-2xl p-7 border border-border hover:border-primary/40 transition-all duration-300 flex gap-6 items-start group relative overflow-hidden shadow-premium hover:shadow-premium-lg"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0 orange-glow shadow-premium"
              >
                <GraduationCap className="text-white" size={28} strokeWidth={1.5} />
              </motion.div>

              <div className="relative z-10 flex-1">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors mb-1">
                  {edu.degree}
                </h3>

                <p className="text-primary font-semibold text-sm mb-2 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  {edu.institution}
                </p>

                <p className="text-xs text-muted-foreground font-mono font-semibold mb-3 px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 inline-block">
                  {edu.period}
                </p>

                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {edu.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-bl-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}