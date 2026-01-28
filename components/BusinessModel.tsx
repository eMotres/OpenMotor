import React from 'react';
import { Github, Settings, Hammer, ArrowRight } from 'lucide-react';

export default function BusinessModel() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Services & Collaboration</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible engineering solutions for your propulsion needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Github className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Open Hardware Source</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              Access our base designs. Download 3d models directly from our GitHub repository.
            </p>
            <a href="https://github.com/eMotres/OpenMotor-Hardware" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition-colors uppercase tracking-wide">
              ACCESS REPO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Settings className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Engineering (NRE)</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              We adapt KV, Power,shaft interfaces, mounting points, and voltage optimization for your specific requirements.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition-colors uppercase tracking-wide">
              PROJECT BASIS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Hammer className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Prototyping</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              We manufacture, assemble and test a Sample to validate performance specs before you scale.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition-colors uppercase tracking-wide">
              ON REQUEST <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
