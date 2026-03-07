import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'default' }: { variant?: 'default' | 'gradient' | 'dots' }) {
  if (variant === 'gradient') {
    return (
      <div className="h-px my-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-3 my-12">
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-primary/40"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          className="w-2 h-2 rounded-full bg-primary/60"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          className="w-2 h-2 rounded-full bg-primary/40"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ transformOrigin: 'center' }}
      className="h-1 my-12 rounded-full gradient-orange"
    />
  );
}
