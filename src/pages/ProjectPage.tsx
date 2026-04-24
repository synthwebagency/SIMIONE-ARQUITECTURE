import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { useLanguage } from '../components/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import RelatedProjectsList from '../components/RelatedProjectsList';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Autoplay gallery
  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) return null;

  return (
    <div className="bg-brand-white pt-24 min-h-screen">
      {/* Header / Intro */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12 md:py-24">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-brand-charcoal hover:text-brand-gold transition-colors mb-24 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{t.project.back}</span>
        </Link>
        
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              {project.location} — {project.year}
            </span>
            <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-12">
              {project.title[language]}
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl"
          >
            <p className="text-brand-charcoal/60 text-lg font-light leading-relaxed">
              {project.description[language]}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Autoplay Gallery (Medium Sized Carousel) */}
      <section className="py-24 bg-brand-white overflow-hidden group">
        <motion.div 
          className="flex gap-12 px-6"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...project.gallery, ...project.gallery, ...project.gallery].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[600px] aspect-[4/3] bg-brand-grey overflow-hidden shadow-sm">
               <img src={img} className="w-full h-full object-cover" alt="Gallery item" referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Story & Details Section */}
      <section className="py-24 md:py-48 px-6 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-brand-gold" />
              {t.project.concept}
            </h2>
            <div className="luxury-text text-3xl md:text-5xl leading-tight mb-16 text-brand-charcoal">
              {project.story[language]}
            </div>
          </motion.div>

          {/* Project Details Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-brand-grey p-12 h-fit border border-brand-charcoal/5"
          >
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-12">{t.project.details}</h3>
            <div className="space-y-8">
              {project.details.map((detail, idx) => (
                <div key={idx} className="border-b border-brand-black/5 pb-6 last:border-0 last:pb-0">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-charcoal/40 block mb-2">
                    {detail.label[language]}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-widest block">
                    {typeof detail.value === 'string' ? detail.value : detail.value[language]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects List Section */}
      <RelatedProjectsList />
    </div>
  );
}
