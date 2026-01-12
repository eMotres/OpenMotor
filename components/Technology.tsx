import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Original Patented Design Topology",
  "Tangential Magnet Polarization (High Torque Density)",
  "Rectangular Copper Wire (Maximum Fill Factor)",
  "Open or Closed (IP65) Design Options",
  "High thermal conductive Ceramic Insulation",
  "High-Efficiency Air & Liquid Cooling",
  "Wide Voltage Range: 50V to 800V support",
  "Simplified Assembly (Design for Manufacturing)",
  "Full Supply Chain & Sourcing Support"
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Technical <br/>Superiority</h2>
            <p className="text-brand-slate text-opacity-80 leading-relaxed mb-8 text-lg">
              Our motors are engineered from the ground up for the rigorous demands of heavy lift and manned flight.
            </p>
            
            <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
              <div className="text-5xl font-bold text-brand-orange mb-2 font-mono">97%</div>
              <div className="text-white/60 font-medium uppercase tracking-widest text-sm">Peak Efficiency</div>
            </div>
          </div>
          
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {features.map((tech, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-orange transition-colors">
                  <Check className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors font-light text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
