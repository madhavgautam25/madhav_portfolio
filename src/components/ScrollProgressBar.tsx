import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-50 rounded-full"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'tween', duration: 0.3 }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 blur-sm z-49"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'tween', duration: 0.3 }}
      />
    </>
  );
}
