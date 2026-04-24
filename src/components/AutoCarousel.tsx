import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from './LanguageContext';

export default function AutoCarousel() {
  const { language } = useLanguage();
  
  // Triple the projects array for seamless looping
  const loopProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];
  const itemWidth = 900; 
  const gap = 64; 

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-brand-white pb-16 flex items-center pt-0">
      <motion.div
        className="flex gap-16 px-16"
        animate={{
          x: [0, -(itemWidth + gap) * PROJECTS.length],
        }}
        transition={{
          x: {
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ width: `${loopProjects.length * (itemWidth + gap)}px` }}
      >
        {loopProjects.map((project, i) => (
          <Link
            key={`${project.id}-${i}`}
            to={`/project/${project.slug}`}
            className="block w-[350px] md:w-[900px] h-[500px] md:h-[700px] flex-shrink-0 group relative overflow-hidden rounded-sm shadow-xl transition-all duration-700"
          >
            <img
              src={project.image}
              alt={project.title[language]}
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-1000" />
            <div className="absolute inset-x-0 bottom-0 p-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
               <span className="text-brand-gold text-xs uppercase tracking-[0.5em] font-black mb-4">{project.location}</span>
               <h3 className="text-white text-4xl md:text-7xl font-bold uppercase tracking-tighter truncate font-serif italic">{project.title[language]}</h3>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
