import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollIntro({ onComplete }: { onComplete: () => void }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1200]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        onComplete();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onComplete]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed inset-0 z-[100] bg-[#1a2b1f] flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="text-center px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-12 font-serif">
          Simione Arquitectus
        </h1>
        
        <div className="w-full flex flex-col items-center">
            <div className="w-32 md:w-64 h-[1px] bg-white/30 mb-8" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/50 font-light">
                Studio of Interior Architecture
            </span>
        </div>

        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-20 flex flex-col items-center gap-6"
        >
          <span className="text-[8px] uppercase tracking-[0.5em] text-white/30">Scroll to Enter</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
      
      {/* Scroll area */}
      <div className="h-[300vh]" />
    </motion.div>
  );
}
