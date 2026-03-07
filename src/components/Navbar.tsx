import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  dark: boolean;
  toggle: () => void;
}

export default function Navbar({ dark, toggle }: NavbarProps) {
  const active = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-premium rounded-2xl px-6 py-3 flex items-center justify-between shadow-premium-lg"
      >
        <motion.a 
          href="#hero" 
          onClick={() => scrollTo('#hero')} 
          className="text-lg font-bold gradient-orange-text relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MG
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = active === sectionId;
            return (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            );
          })}
          <div className="w-px h-6 bg-border mx-2" />
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.08, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: dark ? 180 : 0 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button 
            onClick={toggle} 
            whileHover={{ scale: 1.08, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground" 
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: dark ? 180 : 0 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>
          <motion.button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground" 
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="glass-premium rounded-2xl mt-2 p-4 md:hidden shadow-premium-lg"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
