import React from 'react';
import { Zap, Layers, Box } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Tangential Polarization</h3>
            <p className="text-brand-slate leading-relaxed">
              Unlike standard radial magnets, our patented tangential array concentrates magnetic flux, increasing field strength by 1.5x for superior torque density.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-brand-navy" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Grain-Oriented Steel</h3>
            <p className="text-brand-slate leading-relaxed">
              We use high-permeability Grain-Oriented (GO) steel (1.9T saturation) instead of standard SMC, minimizing losses in high-power applications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center mb-6">
              <Box className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Rectangular Winding</h3>
            <p className="text-brand-slate leading-relaxed">
              Rectangular copper wire achieves maximum fill factor. Combined with direct stator cooling, it ensures optimal thermal management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
