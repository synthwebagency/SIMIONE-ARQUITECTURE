import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['home', 'projects', 'about', 'services', 'contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className="fixed top-0 left-0 w-full z-[100] px-6 h-28 flex items-center justify-between pointer-events-none bg-brand-gold/95 backdrop-blur-md border-b border-brand-gold shadow-lg"
      >
        <div className="flex items-center gap-4 pointer-events-auto">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center transition-opacity duration-500">
              <img src="/images/logo.png" alt="Simione Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-brand-black text-xl md:text-2xl font-medium tracking-tight uppercase font-serif italic">
              Simione Arquitectus
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-12 pointer-events-auto">
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-black hover:text-white transition-colors"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 flex items-center justify-center border border-brand-black/20 rounded-full hover:bg-brand-black hover:text-white transition-all bg-brand-charcoal/10 group"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 group-hover:text-white" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-white flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item === 'home' ? '/' : `/#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-6xl font-bold uppercase tracking-tighter hover:text-brand-gold transition-colors block"
                  >
                    {(t.nav as any)[item]}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 flex flex-col items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-brand-gold" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-brand-charcoal/40 font-bold">
                  Maputo, Moçambique
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
