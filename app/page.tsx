import React from 'react';
import Hero from '@/components/Hero';
import ProductMatrix from '@/components/ProductMatrix';
import BusinessModel from '@/components/BusinessModel';
import Technology from '@/components/Technology';
import ContactFooter from '@/components/ContactFooter';
import Patents from '@/components/Patents';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OpenMotor',
    url: 'https://emotres.com',
    image: 'https://emotres.com/CIAG_300.jpg',
    sameAs: [
      'https://github.com/eMotres',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'vadim@emotres.com',
      contactType: 'engineering support',
    },
    description: 'Open Source High-Voltage Motors for Agriculture, Logistics, and Manned Aviation.'
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="fixed w-full z-50 px-6 py-6 pointer-events-none">
        <div className="container mx-auto flex justify-between items-center">
          <div className="pointer-events-auto">
          </div>
          <div className="pointer-events-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-6 py-2 shadow-sm hidden md:flex gap-8 text-sm font-medium text-brand-slate">
            <a href="#products" className="hover:text-brand-orange transition-colors">Products</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#technology" className="hover:text-brand-orange transition-colors">Technology</a>
            <a href="#patents" className="hover:text-brand-orange transition-colors">Patents</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />
      <Technology />
      <ProductMatrix />
      <BusinessModel />
      <Patents />
      <ContactFooter />
    </main>
  );
}
