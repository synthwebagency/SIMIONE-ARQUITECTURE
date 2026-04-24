import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative h-screen w-full bg-brand-white flex flex-col pt-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-brand-black text-6xl md:text-[8rem] font-medium tracking-tight leading-none mb-12 font-serif"
        >
          Simione Arquitectus
        </motion.h1>
         
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-brand-charcoal/40 text-[10px] md:text-xs uppercase tracking-[0.5em] font-light mb-16">
            {language === 'pt' ? 'Arquitetura de Interiores & Design' : 'Interior Architecture & Design'}
          </span>
          
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8"
          >
            <span className="text-[8px] uppercase tracking-[0.5em] text-brand-charcoal/30">Scroll to Explore</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-brand-charcoal/10 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
