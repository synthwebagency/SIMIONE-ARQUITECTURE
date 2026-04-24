import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-brand-charcoal text-white pt-32 pb-12 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 md:gap-8 mb-32">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold tracking-tighter uppercase mb-6">
            Simione<span className="font-light ml-1 text-brand-gold">Arquitectus</span>
          </h2>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] leading-loose max-w-[200px]">
            Maputo Cidade, Moçambique. Professional Interior Design & Architectural Visualization.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {['home', 'projects', 'about', 'services', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'home' ? '/' : `/#${item}`}
                  className="text-[10px] uppercase tracking-widest text-white/50 hover:text-brand-gold transition-colors font-medium"
                >
                  {(t.nav as any)[item]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">{t.contact.location}</h4>
          <address className="not-italic text-sm text-white/70 leading-relaxed font-light">
            Alto-Maé, Malanga<br />
            Maputo Cidade<br />
            11144, MZ
          </address>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">{t.contact.phone}</h4>
          <a href="tel:+258842045299" className="text-sm text-white/70 hover:text-brand-gold transition-colors block font-light">
            +258 84 204 5299
          </a>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">{t.contact.follow}</h4>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/1CGEGMg8g2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 group"
            >
              <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.facebook.com/share/1CGEGMg8g2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 group"
            >
              <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps Embedded */}
      <div className="max-w-screen-2xl mx-auto h-[400px] mb-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 rounded-lg overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.2173164998493!2d32.5645!3d-25.968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a473f8e6583%3A0xc3f63116526be69!2sAlto%20Ma%C3%A9%2C%20Maputo!5e0!3m2!1spt-BR!2smz!4v1700000000000!5m2!1spt-BR!2smz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          &copy; {new Date().getFullYear()} Simione Arquitectus. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/cookies" className="text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
