import React from 'react';
import { Github, Settings, Hammer, ArrowRight } from 'lucide-react';

export default function BusinessModel() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Engagement Models</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">
            Flexible collaboration for every stage of product development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Github className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Open Hardware Source</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              Access our base designs. Download stators, rotors, and winding schematics directly from our GitHub repository.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors uppercase tracking-wide">
              Access Repo <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Settings className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Engineering (NRE)</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              We adapt KV, shaft interfaces, mounting points, and voltage optimization for your specific airframe requirements.
            </p>
            <span className="inline-block px-3 py-1 bg-brand-light text-brand-slate text-xs font-mono font-bold uppercase tracking-wider">
              Project Basis
            </span>
          </div>

          <div className="group p-8 border border-gray-200 bg-white hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy group-hover:bg-brand-orange transition-colors" />
            <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-white border border-gray-100 transition-colors">
              <Hammer className="w-7 h-7 text-brand-slate group-hover:text-brand-orange transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Prototyping</h3>
            <p className="text-brand-slate leading-relaxed mb-8 text-sm h-20">
              We manufacture, assemble, and dyno-test a "Golden Sample" to validate performance specs before you scale.
            </p>
            <span className="inline-block px-3 py-1 bg-brand-light text-brand-slate text-xs font-mono font-bold uppercase tracking-wider">
              On Request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
