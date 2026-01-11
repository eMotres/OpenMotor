import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center border-b border-gray-200 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light border border-gray-200 text-xs font-mono text-brand-slate uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              System Status: Operational
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-navy leading-[1.1]">
              Open Source <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-slate">
                Industrial Propulsion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-slate max-w-2xl font-light leading-relaxed">
              High performance electric motors for Drones, Aviation, Robotics and Propulsion. 
              <span className="block mt-2 font-medium text-brand-navy">Designed for Mass Manufacturing.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
              <a 
                href="#products" 
                className="group px-8 py-4 bg-white border-2 border-brand-navy text-brand-navy font-semibold text-lg hover:bg-brand-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Specs
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-brand-orange text-white font-semibold text-lg hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
              >
                Request Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image 
                src="/CIAG_300.jpg" 
                alt="OpenMotor Propulsion System"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
