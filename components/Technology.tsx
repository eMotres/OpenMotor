import React from 'react';
import Image from 'next/image';

const technologies = [
  {
    title: "Tangential magnet Polarization",
    placeholder: "FIG. 10 (Magnet Array)",
    image: "/Tangential magnet Polarization.jpg",
    description: "Patented magnet array with polarization perpendicular to side walls concentrates flux, increasing field strength by 1.5x."
  },
  {
    title: "Flexible Winding Topology",
    placeholder: "FIG. 3 (Winding Topology)",
    description: "Configurable single/double-layer winding with flexible series-parallel connections for wide KV adjustment."
  },
  {
    title: "Posebility High-Conductivity Insulation",
    placeholder: "FIG. 5 (Ceramic Layer)",
    description: "Ceramic insulation (AlN/Al2O3) provides superior thermal conductivity (up to 140 W/m·K) directly from coil to stator."
  },
  {
    title: "Grain-Oriented and Non Oriented Steel",
    placeholder: "FIG. 4 (Stator Core)",
    description: "We utilize high-permeability Grain-Oriented (GO) or Non-Oriented steel (up to 1.9T saturation). This allows us to optimize the core for either maximum torque or high speed."
  },
  {
    title: "Floating Radiators",
    placeholder: "FIG. 7 (Radiator System)",
    description: "Spring-loaded radiator segments maintain constant pressure on the stator, automatically compensating for thermal expansion gaps."
  },
  {
    title: "Rectangular wire Cross-Section",
    placeholder: "FIG. 5 (Wire Cross-section)",
    description: "Rectangular wire cross-section increases slot fill factor to ~70%, reducing resistance and increasing current density and heat dissipation."
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Technology</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Patented innovations driving high torque density and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="h-72 w-full relative bg-gray-200 flex items-center justify-center">
                {tech.image ? (
                  <Image 
                    src={tech.image} 
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-gray-400 font-mono text-sm">{tech.placeholder}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
