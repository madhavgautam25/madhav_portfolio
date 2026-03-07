import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function AnimatedStars() {
  // Generate random stars on mount
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1-3px
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 3, // 3-6 seconds
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Star container that covers entire viewport */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: 'radial-gradient(circle, hsl(25 95% 53%), hsl(25 95% 53% / 0.5))',
              boxShadow: `0 0 ${star.size + 3}px hsl(25 95% 53% / 0.8), inset 0 0 ${star.size}px hsl(25 95% 53% / 0.6)`,
              filter: 'blur(0.2px)',
            }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.4, 0.8],
              y: [0, -15, 0],
            }}
            transition={{
              duration: star.duration * 0.6,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
