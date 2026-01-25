import React from 'react';
import Image from 'next/image';

const technologies = [
  {
    title: "Scalable Power Architecture",
    placeholder: "1kW to 1MW Range",
    image: "/Scalable Power Architecture.jpg",
    width: 1500,
    height: 700,
    description: "Our modular design is fully scalable, covering a massive performance range from 1 kW to 1 MW. Whether for light drones or heavy industrial propulsion, the core technology delivers industry-leading torque density across all sizes."
  },
  {
    title: "Tangential magnet Polarization",
    placeholder: "FIG. 10 (Magnet Array)",
    image: "/Tangential magnet Polarization.jpg",
    width: 1500,
    height: 700,
    description: "Patented magnet array with polarization perpendicular to side walls concentrates flux, increasing field strength by 1.5x."
  },
  {
    title: "Flexible Winding Topology",
    placeholder: "FIG. 3 (Winding Topology)",
    image: "/Flexible Winding Topology.jpg",
    width: 1498,
    height: 697,
    description: "Configurable single/double-layer winding with flexible series-parallel connections for wide KV adjustment."
  },
  {
    title: "High-Conductivity Ceramic Insulation",
    placeholder: "FIG. 5 (Ceramic Layer)",
    image: "/High-Conductivity Ceramic Insulation.jpg",
    width: 1501,
    height: 700,
    description: "Ceramic insulation Al2O3 provides superior thermal conductivity (up to 25 W/m·K) directly from coil to stator."
  },
  {
    title: "Grain-Oriented and Non Oriented Steel",
    placeholder: "FIG. 4 (Stator Core)",
    image: "/Grain-Oriented and Non Oriented Steel.jpg",
    width: 1476,
    height: 686,
    description: "We utilize high-permeability Grain-Oriented (GO) or Non-Oriented steel (up to 1.9T saturation). This allows us to optimize the core for either maximum torque or high speed."
  },
  {
    title: "High-Efficiency Cooling System",
    placeholder: "FIG. 7 (Radiator System)",
    image: "/Floating Radiators.jpg",
    width: 1442,
    height: 649,
    description: "Spring-loaded radiator segments maintain constant pressure on the stator, automatically compensating for thermal expansion gaps."
  },
  {
    title: "Rectangular wire Cross-Section",
    placeholder: "FIG. 5 (Wire Cross-section)",
    image: "/Rectangular wire Cross-Section.jpg",
    width: 1501,
    height: 701,
    description: "Rectangular wire cross-section increases slot fill factor to ~80%, reducing resistance and increasing current density and heat dissipation."
  },
  {
    title: "Open and Close ( IP65) motor construction",
    placeholder: "Open vs IP65",
    image: "/Open and Close ( IP65) motor construction.jpg",
    width: 1500,
    height: 700,
    description: "We provide motors in both Open (O) configurations for optimal weight and Closed (C) versions. Our closed designs are fully sealed to IP65 standards, offering robust protection against dust and water for industrial applications."
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Technology</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Patented innovations driving high torque density and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
              <div className="w-full relative">
                {tech.image ? (
                  <Image 
                    src={tech.image} 
                    alt={tech.title}
                    width={tech.width}
                    height={tech.height}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-mono text-sm">{tech.placeholder}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}