import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import PoliciesPage from './pages/PoliciesPage';
import ScrollIntro from './components/ScrollIntro';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('simione_intro_seen');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('simione_intro_seen', 'true');
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <AnimatePresence>
            {showIntro && (
              <ScrollIntro onComplete={handleIntroComplete} />
            )}
          </AnimatePresence>
          
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PoliciesPage />} />
            <Route path="/cookies" element={<PoliciesPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
