import React from 'react';

const products = [
  { model: "CIAN 100", app: "Agro", stator: "100mm", power: "5kW", thrust: "15kg" },
  { model: "CIAN 150", app: "Logistics", stator: "150mm", power: "12kW", thrust: "60kg" },
  { model: "CIAN 200", app: "Heavy Lift", stator: "200mm", power: "25kW", thrust: "100kg" },
  { model: "CIAN 250", app: "Aviation", stator: "250mm", power: "50kW", thrust: "200kg" },
  { model: "CIAN 300", app: "Mega Class", stator: "300mm", power: "100kW", thrust: "400kg" },
];

export default function ProductMatrix() {
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
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Model Series</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Application</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Stator Size</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Power (Cont)</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Max Thrust</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group cursor-default">
                  <td className="p-4 py-5 font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {p.model}
                  </td>
                  <td className="p-4 py-5 text-brand-slate font-medium">{p.app}</td>
                  <td className="p-4 py-5 font-mono text-gray-600">{p.stator}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.power}</td>
                  <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.thrust}</td>
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
