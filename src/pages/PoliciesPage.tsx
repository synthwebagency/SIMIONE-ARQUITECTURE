import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

export default function PoliciesPage() {
  const { t, language } = useLanguage();

  return (
    <main className="pt-40 pb-32 px-6 bg-brand-white min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mb-24 flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-brand-charcoal">
            {t.policies.privacy}
          </h1>
          <div className="w-12 h-[2px] bg-brand-gold" />
        </motion.div>

        <section className="prose prose-brand max-w-none space-y-12 text-brand-charcoal/70 font-light leading-relaxed">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal mb-4">1. Information We Collect</h2>
            <p>
              We collect information to provide better services to our users. This includes metadata, contact information provided voluntarily, and browsing data collected via cookies.
            </p>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal mb-4">2. Use of Data</h2>
            <p>
              Your data is used solely to enhance your experience at Simione Arquitectus and to facilitate communication regarding architectural projects.
            </p>
          </div>
        </section>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="mt-32 mb-24 flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-brand-charcoal">
            {t.policies.cookies}
          </h1>
          <div className="w-12 h-[2px] bg-brand-gold" />
        </motion.div>

        <section className="prose prose-brand max-w-none space-y-12 text-brand-charcoal/70 font-light leading-relaxed">
          <p>
            This website uses cookies to monitor browsing preferences. Cookies are small text files stored on your device that help us remember your settings and improve our site's performance.
          </p>
          <ul className="list-disc pl-6 space-y-4">
             <li><strong>Essential Cookies:</strong> Required for the site to function correctly.</li>
             <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site.</li>
             <li><strong>Preferences:</strong> Remember your language settings (PT/EN).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
