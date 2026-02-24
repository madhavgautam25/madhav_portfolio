import { motion } from 'framer-motion';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-12"
    >
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="w-16 h-1 rounded-full gradient-orange"
      />
    </motion.div>
  );
}
