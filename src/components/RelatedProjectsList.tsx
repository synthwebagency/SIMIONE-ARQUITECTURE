import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from './LanguageContext';
import { ArrowRight } from 'lucide-react';

export default function RelatedProjectsList() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 px-6 max-w-screen-2xl mx-auto border-t border-brand-black/5 relative">
      <div className="mb-16">
        <h2 className="text-xl md:text-4xl font-bold uppercase tracking-tight text-brand-charcoal max-w-xl">
          {t.project.next}
        </h2>
      </div>

      <div className="divide-y divide-brand-black/10">
        {PROJECTS.map((project, i) => (
          <Link
            key={project.id}
            to={`/project/${project.slug}`}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 transition-all duration-500 overflow-hidden relative"
          >
            <div className="flex gap-8 md:gap-24 items-center relative z-10 w-full mb-8 md:mb-0">
               <span className="text-[10px] font-bold text-brand-charcoal/30 flex-shrink-0 font-mono">
                  {project.year}
               </span>
               <h3 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700">
                  {project.title[language]}
               </h3>
            </div>
            
            <div className="flex items-center justify-between w-full md:w-auto relative z-10">
               <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/40 mr-12 font-mono">
                  {project.location.split(',')[1] || 'Mozambique'}
               </span>
               <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            {/* In-row image preview like the screenshot */}
            <div className="absolute right-[25%] top-1/2 -translate-y-1/2 w-0 group-hover:w-[350px] aspect-[4/3] z-0 overflow-hidden transition-all duration-700 pointer-events-none hidden lg:block">
                <img src={project.image} className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-100 transition-all duration-700" alt="Preview" />
            </div>
            
            {/* Background color hover */}
            <div className="absolute inset-0 bg-brand-charcoal opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
          </Link>
        ))}
      </div>

      {/* Starting a project banner (GO banner) */}
      <Link
        to="/contact"
        className="mt-32 w-full bg-brand-charcoal py-10 md:py-20 px-8 md:px-16 flex items-center justify-between group overflow-hidden rounded-sm"
      >
        <h2 className="text-white text-base md:text-2xl font-bold uppercase tracking-[0.2em] group-hover:text-brand-gold transition-colors duration-500">
          {t.project.start}
        </h2>
        <div className="flex items-center gap-6">
           <span className="text-white text-4xl md:text-8xl font-black italic tracking-tighter opacity-100 font-serif leading-none">
              {t.project.go}
           </span>
           <div className="flex gap-1 md:gap-3">
              <ArrowRight className="w-6 h-6 md:w-12 md:h-12 text-white group-hover:translate-x-4 transition-all duration-700" />
              <ArrowRight className="w-6 h-6 md:w-12 md:h-12 text-white/40 group-hover:translate-x-4 transition-all duration-700 delay-75" />
              <ArrowRight className="w-6 h-6 md:w-12 md:h-12 text-white/10 group-hover:translate-x-4 transition-all duration-700 delay-150" />
           </div>
        </div>
      </Link>
    </section>
  );
}
