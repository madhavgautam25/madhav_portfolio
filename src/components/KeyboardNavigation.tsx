import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Command } from 'lucide-react';

interface Command {
  key: string;
  title: string;
  action: () => void;
}

export default function KeyboardNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const commands: Command[] = [
    {
      key: 'H',
      title: 'Scroll to Hero',
      action: () => document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      key: 'A',
      title: 'Scroll to About',
      action: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      key: 'S',
      title: 'Scroll to Skills',
      action: () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      key: 'P',
      title: 'Scroll to Projects',
      action: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      key: 'C',
      title: 'Scroll to Contact',
      action: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Handle ESC to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      // Check if Cmd+K or Ctrl+K is pressed (always enabled)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Execute commands directly (always, don't require palette to be open)
      const command = commands.find((cmd) => cmd.key.toLowerCase() === e.key.toLowerCase());
      if (command) {
        e.preventDefault();
        command.action();
        setIsOpen(false); // Close palette after executing command
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [commands]);

  return (
    <>
      {/* Floating keyboard indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-24 right-8 z-30 md:flex hidden items-center gap-2 text-xs text-muted-foreground"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 cursor-pointer hover:border-primary/30 transition-all hover:text-primary group" onClick={() => setIsOpen(true)}>
          <Command size={14} className="opacity-60 group-hover:opacity-100" />
          <span className="font-mono">⌘K</span>
        </div>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-96 max-w-[90vw]"
            >
              <div className="glass-premium rounded-2xl border border-border/50 shadow-premium-xl overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-border/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Command size={18} className="text-primary" />
                    <span className="font-semibold text-foreground">Command Palette</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                {/* Commands */}
                <div className="divide-y divide-border/30 max-h-80 overflow-y-auto">
                  {commands.map((cmd, idx) => (
                    <motion.button
                      key={cmd.key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      whileHover={{ backgroundColor: 'hsl(var(--primary)/0.1)', x: 4 }}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-primary/10 transition-colors text-left group"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cmd.title}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/50 border border-border/30 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all">
                        {cmd.key}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Footer hint */}
                <div className="px-4 py-3 bg-secondary/30 border-t border-border/30 text-xs text-muted-foreground text-center">
                  Press <kbd className="px-2 py-1 rounded bg-secondary border border-border/50 mx-1 font-mono">ESC</kbd> to close
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
