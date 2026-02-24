import { GraduationCap } from 'lucide-react';
import { education } from '@/data/portfolio';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Education" />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 flex gap-5 items-start group mb-6"
          >
            <motion.div
              whileHover={{ rotate: 12 }}
              className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0 orange-glow"
            >
              <GraduationCap className="text-white" size={26} />
            </motion.div>

            <div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>

              <p className="text-primary font-medium text-sm">
                {edu.institution}
              </p>

              <p className="text-xs text-muted-foreground mb-2">
                {edu.period}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}