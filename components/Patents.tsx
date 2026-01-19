import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Patents() {
  return (
    <section id="patents" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Intellectual Property Portfolio</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">
            Our portfolio of international patents and applications.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-3xl font-semibold text-brand-navy mb-6 border-b pb-4">
              International Applications (PCT)
            </h3>
            <ul className="space-y-4 text-brand-slate">
              <li className="flex items-center justify-between">
                <span className="font-mono">PCT/IB2023/057129</span>
                <span className="text-gray-500">Filed July 12, 2023</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-mono">PCT/IB2025/058444</span>
                <span className="text-gray-500">Filed August 21, 2025</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="font-mono">PCT/IB2025/060049</span>
                <span className="text-gray-500">Filed October 6, 2025</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-brand-navy mb-6 border-b pb-4">
              Granted & Registered
            </h3>
            <ul className="space-y-4 text-brand-slate">
               <li className="flex items-center justify-between">
                <span>Slovenia</span>
                <div className="text-right">
                    <span className="font-mono block">26604</span>
                    <span className="text-gray-500 text-sm">Granted July 31, 2025</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>China</span>
                <div className="text-right">
                    <span className="font-mono block">ZL 202390000194.8</span>
                    <span className="text-gray-500 text-sm">Granted May 2, 2025</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>Germany</span>
                <div className="text-right">
                    <span className="font-mono block">21 2023 000 117</span>
                    <span className="text-gray-500 text-sm">Registered October 18, 2024</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>France</span>
                <div className="text-right">
                    <span className="font-mono block">24 07270</span>
                    <span className="text-gray-500 text-sm">Granted July 11, 2025</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>Russia</span>
                 <div className="text-right">
                    <span className="font-mono">RU2016132908, WO2018030917A3, P39356505PCT</span>
                 </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-brand-navy mb-6 border-b pb-4">
              Pending Applications
            </h3>
            <ul className="space-y-4 text-brand-slate">
              <li className="flex items-center justify-between">
                <span>European Patent Office</span>
                <div className="text-right">
                    <span className="font-mono">EP 4287460 A1</span>
                    <span className="text-gray-500 text-sm">Published December 6, 2023</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Spain</span>
                <div className="text-right">
                    <span className="font-mono">ESU202490013</span>
                    <span className="text-gray-500 text-sm">In examination</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>Russia</span>
                <div className="text-right">
                    <span className="font-mono">2025132537</span>
                    <span className="text-gray-500 text-sm">Filed November 21, 2025</span>
                </div>
              </li>
               <li className="flex items-center justify-between">
                <span>India</span>
                <div className="text-right">
                    <span className="font-mono">202517116950</span>
                    <span className="text-gray-500 text-sm">Filed November 25, 2025</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <div className="mt-8">
             <Link href="/#contact" className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-600 transition-colors">
                Request Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}