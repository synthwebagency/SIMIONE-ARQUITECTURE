import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 md:py-64 bg-brand-grey px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-center">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-brand-black/10 border border-brand-black/10">
          {t.services.list.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-brand-grey p-12 hover:bg-brand-charcoal group transition-all duration-700"
            >
              <span className="text-brand-gold text-[10px] font-bold mb-8 block select-none">0{i + 1}</span>
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-12 group-hover:text-white/60 transition-colors">
                {service.desc}
              </p>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
