import { useState } from 'react';
import { Send, Mail, Linkedin, Github, Loader2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import SectionHeading from './SectionHeading';
import { supabase } from '@/integrations/supabase/client';

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: form.name, email: form.email, message: form.message },
      });
      if (error) throw error;
      toast({ title: 'Message sent!', description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      toast({ title: 'Failed to send message', description: err.message || 'Please try again later.', variant: 'destructive' });
    } finally {
      setSending(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/30";

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeading title="Get In Touch" />
        <div className="grid md:grid-cols-5 gap-10">
          <motion.form
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClasses}
            />
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
            />
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(25 95% 53% / 0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="gradient-orange-btn text-white px-8 py-3 rounded-xl font-semibold inline-flex items-center gap-2 transition-all orange-glow disabled:opacity-50"
            >
              {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Message <Send size={16} /></>}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Feel free to reach out for collaborations, project ideas, or just a friendly chat!
            </p>
            <div className="space-y-3">
              {[
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: personalInfo.email },
                { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: personalInfo.github, icon: Github, label: 'GitHub' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon size={18} /> {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
