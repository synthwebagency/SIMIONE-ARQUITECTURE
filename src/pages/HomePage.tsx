import React from 'react';
import Hero from '../components/Hero';
import HorizontalGallery from '../components/HorizontalGallery';
import About from '../components/About';
import Services from '../components/Services';
import AutoCarousel from '../components/AutoCarousel';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <AutoCarousel />
      <Services />
    </main>
  );
}
