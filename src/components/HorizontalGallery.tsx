import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from './LanguageContext';

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-83.33%"]);
  
  return (
    <section id="projects" ref={targetRef} className="relative h-[600vh] bg-white">
      {/* Background Overlapping Text */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className="text-[12vw] font-black uppercase tracking-[-0.05em] text-brand-charcoal/5 whitespace-nowrap leading-none select-none">
          Simione Arquitectus
        </h2>
      </div>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-full py-32 px-[10vw]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative h-full aspect-[4/5] md:aspect-[3/4] flex-shrink-0 group px-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/project/${project.slug}`} className="block h-full w-full relative">
                {/* Meta Header */}
                <div className="mb-6 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-charcoal/40">
                        {project.year} — {project.location.split(',')[0]}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                        0{i + 1}
                    </span>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-[70%] overflow-hidden">
                   <motion.img 
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt={project.title[language]}
                   />
                </div>

                {/* Project Title */}
                <div className="mt-8">
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none group-hover:text-brand-gold transition-colors duration-500">
                    {project.title[language]}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <div className="w-8 h-[1px] bg-brand-gold" />
                    <span className="text-[9px] uppercase tracking-widest font-bold">
                        {language === 'pt' ? 'Ver Obra' : 'View Work'}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
