'use client';
import React from 'react';

interface Product {
  model: string;
  cont_power: string;
  rotation: string;
  thrust: string;
  voltage: string;
  motor_mass: string;
  pdfUrl: string | null;
}

const products: Product[] = [
  { model: "CIAG 125_25", cont_power: "3.7 kW", rotation: "4300 rpm", thrust: "21 kg", voltage: "18S 75V", motor_mass: "2 kg", pdfUrl: "https://raw.githack.com/eMotres/OpenMotor-Hardware/main/doc/CIAG%20125_25_datasheet.pdf" },
  { model: "CIAG 125_30", cont_power: "4.5 kW", rotation: "1900 rpm", thrust: "36kg", voltage: "18S 75V", motor_mass: "2.2 kg", pdfUrl: null },
  { model: "CIAG 175_40", cont_power: "13 kW", rotation: "3100 rpm", thrust: "60 kg", voltage: "168S 705V", motor_mass: "5.5 kg", pdfUrl: null },
];

export default function ProductMatrix() {

  const handleClick = (product: Product) => {
    if (product.pdfUrl) {
      window.open(product.pdfUrl, '_blank');
    } else {
      alert('Coming Soon');
    }
  };

  return (
    <section id="products" className="py-24 bg-brand-light border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Propulsion Matrix</h2>
          <p className="text-brand-slate max-w-2xl">
            Supports 50–800 V via flexible coil topology. Built for heavy-duty applications.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 bg-white shadow-sm rounded-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Model</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Continues power</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Rotation speed</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Trust</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Battrey voltage</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Motor Mass</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                  onClick={() => handleClick(p)}
                >
                  <td className="p-4 py-5 font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {p.model}
                  </td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.cont_power}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.rotation}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.thrust}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.voltage}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.motor_mass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-end">
          <p className="text-xs text-gray-400 font-mono">* Performance varies by ESC timing and propeller selection.</p>
        </div>
      </div>
    </section>
  );
}
