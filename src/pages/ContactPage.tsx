import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="pt-40 pb-32 px-6 bg-brand-white min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-24 flex flex-col items-center"
        >
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Simione Arquitectus</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
            {t.contact.title}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="relative aspect-square md:aspect-[4/5] overflow-hidden grayscale w-full"
          >
            <img 
               src="/images/contact_office.jpg" 
               alt="Arquitecto Simione Office" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left"
          >
            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">{t.contact.architect}</h3>
                <p className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-charcoal">
                  Simione
                </p>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">{t.contact.phone}</h3>
                <a href="tel:+258842045299" className="text-2xl md:text-4xl font-bold text-brand-charcoal hover:text-brand-gold transition-colors">
                  +258 84 204 5299
                </a>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-6">{t.contact.location}</h3>
                <p className="text-lg md:text-xl font-light text-brand-charcoal/60 leading-relaxed uppercase tracking-widest">
                  Alto-Maé, Malanga, Maputo Cidade, 11144, MZ
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
