import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="pt-16 pb-0 bg-brand-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           viewport={{ once: true }}
           className="flex flex-col items-center"
        >
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4 block font-black">Simione Arquitectus</span>
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[1.1] mb-8">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-brand-charcoal/70 leading-relaxed max-w-2xl mb-8">
            {t.about.description}
          </p>
          <div className="w-16 h-[1px] bg-brand-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
