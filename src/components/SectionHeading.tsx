import { motion } from 'framer-motion';

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mb-16"
    >
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="h-1 rounded-full gradient-orange"
        />
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg mt-3"
      >
        {title === 'Skills' && 'Technologies and tools I work with'}
        {title === 'Projects' && 'A collection of projects I\'ve built'}
        {title === 'Experience' && 'My professional journey and achievements'}
        {title === 'Education' && 'My academic background and certifications'}
        {title === 'About' && 'Learn more about who I am'}
        {title === 'Get In Touch' && 'Let\'s connect and collaborate'}
      </motion.p>
    </motion.div>
  );
}
