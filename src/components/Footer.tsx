import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { href: personalInfo.github, icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-muted-foreground font-medium"
        >
          © 2026 {personalInfo.name}. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-4"
        >
          {socialLinks.map(({ href, icon: Icon, label }, idx) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30 shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
