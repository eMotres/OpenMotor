'use client';
import React, { useState } from 'react';
import { FileText, Table, Box, ChevronDown } from 'lucide-react';

interface Product {
  model: string;
  cont_power: string;
  rotation: string;
  thrust: string;
  voltage: string;
  motor_mass: string;
  datasheetUrl?: string;
  performanceDataUrl?: string;
  cadModelUrl?: string;
}

const products: Product[] = [
  {
    model: "CIAG_2_28 125_25",
    cont_power: "3.7 kW",
    rotation: "4300 rpm",
    thrust: "21 kg",
    voltage: "18S 75V",
    motor_mass: "2 kg",
    datasheetUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/doc/CIAG_2_28%20125_25_datasheet.pdf",
    performanceDataUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/test/CIAG_2_28%20125_25_test_propeller_30x14.csv",
    cadModelUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/CAD/CIAG_2_28%20125_25.step"
  },
  { model: "CIAG_1_42 125_30", cont_power: "4.5 kW", rotation: "1900 rpm", thrust: "36kg", voltage: "18S 75V", motor_mass: "2.2 kg" },
  { model: "CIAG_2_28 150_40", 
    cont_power: "10 kW", 
    rotation: "2000 rpm", 
    thrust: "60kg", 
    voltage: "96S 403V", 
    motor_mass: "4.9 kg",
    datasheetUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/doc/CIAG_2_28%20150_40_datasheet.pdf",
    performanceDataUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/test/CIAG_2_28%20150_40_test_propeller_62.csv",
    cadModelUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/CAD/CIAG_2_28%20150_40.step" 
  },
  { model: "CIAG_1_42 175_40", cont_power: "13 kW", rotation: "3100 rpm", thrust: "60 kg", voltage: "168S 705V", motor_mass: "5.5 kg" },
  { model: "CIAG_2_28 200_30", 
    cont_power: "13 kW", 
    rotation: "1600 rpm", 
    thrust: "70 kg", 
    voltage: "164S 690V", 
    motor_mass: "7 kg",
    datasheetUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/doc/CIAG_2_28%20200_30_datasheet.pdf",
    performanceDataUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/test/CIAG_2_28%20200_30_test_propeller_2m.csv",
    cadModelUrl: "https://github.com/eMotres/OpenMotor-Hardware/blob/main/CAD/CIAG_2_28%20200_30.step" 
  },
];

export default function ProductMatrix() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleRowClick = (model: string) => {
    setExpandedProduct(expandedProduct === model ? null : model);
  };

  const TechnicalResources = ({ product }: { product: Product }) => (
    <div className="p-4 bg-gray-50">
      <h4 className="text-lg font-semibold text-gray-700 mb-3">Technical Resources</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {product.datasheetUrl ? (
          <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            <FileText size={16} />
            <span>Datasheet</span>
          </a>
        ) : <span className="text-sm text-gray-400">Datasheet: Coming Soon</span>}
        {product.performanceDataUrl ? (
          <a href={product.performanceDataUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            <Table size={16} />
            <span>Performance Data</span>
          </a>
        ) : <span className="text-sm text-gray-400">Performance Data: Coming Soon</span>}
        {product.cadModelUrl ? (
          <a href={product.cadModelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors">
            <Box size={16} />
            <span>CAD Model</span>
          </a>
        ) : <span className="text-sm text-gray-400">CAD Model: Coming Soon</span>}
      </div>
    </div>
  );

  return (
    <section id="products" className="py-24 bg-brand-light border-b border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Propulsion Matrix</h2>
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
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Thrust</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Battery voltage</th>
                <th className="p-4 py-6 font-mono text-xs uppercase tracking-wider text-gray-500 font-semibold">Motor Mass</th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p, idx) => (
                <React.Fragment key={idx}>
                  <tr
                    className="hover:bg-blue-50/30 transition-colors group cursor-pointer"
                    onClick={() => handleRowClick(p.model)}
                  >
                    <td className="p-4 py-5 font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                      {p.model}
                    </td>
                    <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.cont_power}</td>
                    <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.rotation}</td>
                    <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.thrust}</td>
                    <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.voltage}</td>
                    <td className="p-4 py-5 font-mono text-brand-navy font-bold">{p.motor_mass}</td>
                    <td className="p-4">
                      <ChevronDown
                        size={20}
                        className={`text-gray-400 transform transition-transform duration-300 ${ expandedProduct === p.model ? 'rotate-180' : '' }`}
                      />
                    </td>
                  </tr>
                  {expandedProduct === p.model && (
                    <tr>
                      <td colSpan={7}>
                        <div
                          className="transition-all duration-500 ease-in-out overflow-hidden"
                           style={{ maxHeight: expandedProduct === p.model ? '500px' : '0' }}
                        >
                          <TechnicalResources product={p} />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
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
