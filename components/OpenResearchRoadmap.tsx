import React from 'react';

const OpenResearchRoadmap = () => {
  return (
    <section id="open-research" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Open Research Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We invite everyone who wants to collaborate on our upcoming breakthroughs:
          </p>
        </div>
        <div className="space-y-16">
          {/* Row 1 */}
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <img src="/Foil_coils.jpg" alt="Foil Winding Technology" className="rounded-lg shadow-lg mx-auto" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-brand-slate mb-2">High-Fill Foil Windings (Cu/Al)</h3>
              <p className="text-gray-600">
                Moving beyond traditional wire. We are developing copper and aluminum foil coils to maximize the fill factor, suppress eddy current losses, and integrate end-windings into active torque production. This results in superior thermal dissipation and higher power density.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <img src="/MAO.jpg" alt="Ceramic Insulation via MAO" className="rounded-lg shadow-lg mx-auto" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-brand-slate mb-2">Ceramic Insulation via Micro-Arc Oxidation (MAO)</h3>
              <p className="text-gray-600">
                We are applying Micro-Arc Oxidation (MAO) to aluminum coils to create a high-performance ceramic insulation layer. This resin-free approach drastically increases heat transfer and allows motors to operate reliably in extreme temperature environments where traditional organic insulation fails.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <img src="/Single_layer_stator.jpg" alt="Advanced Stator Architecture" className="rounded-lg shadow-lg mx-auto" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-brand-slate mb-2">Single-Layer Stator Design</h3>
              <p className="text-gray-600">
                A new stator geometry optimized for one-layer winding. This architecture provides the maximum possible winding factor, doubles the available cooling surface, and creates the shortest thermal path from the coils to the cooling system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenResearchRoadmap;
