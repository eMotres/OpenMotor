"use client";

import React, { useState } from 'react';
import { Mail, Github, BookOpen, Send } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    details: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Request from ${formData.name} (${formData.company})`;
    const body = `Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ADetails:%0D%0A${formData.details}`;
    
    window.location.href = `mailto:vadim@motresres.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Start Your Project</h2>
            <p className="text-brand-slate mb-10 text-lg leading-relaxed">
              Ready to integrate eMotres propulsion? Contact our engineering team for detailed specs, CAD models, and NRE estimation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-white border border-gray-200 flex items-center justify-center text-brand-navy shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Direct Engineering Channel</div>
                  <a href="mailto:vadim@motresres.com" className="text-xl font-bold text-brand-navy hover:text-brand-orange transition-colors">
                    vadim@motresres.com
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="#" className="px-6 py-3 bg-white border border-gray-200 text-brand-navy font-bold rounded-sm hover:border-brand-navy hover:shadow-lg transition-all flex items-center gap-2 group">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub
                </a>
                <a href="#" className="px-6 py-3 bg-white border border-gray-200 text-brand-navy font-bold rounded-sm hover:border-brand-navy hover:shadow-lg transition-all flex items-center gap-2 group">
                  <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" /> Docs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-200 shadow-xl shadow-brand-navy/5">
            <h3 className="text-lg font-bold text-brand-navy mb-6 uppercase tracking-wider border-b border-gray-100 pb-4">Request Consultation</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
                    placeholder="Drone Co." 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
                  placeholder="john@company.com" 
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Details</label>
                <textarea 
                  rows={4} 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
                  placeholder="Describe your KV and power requirements..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-navy text-white font-bold text-sm uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 group">
                Send Request <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm font-mono">
            © {new Date().getFullYear()} OpenMotor Engineering Bureau. Designed in Slovenia.
          </p>
        </div>
      </div>
    </footer>
  );
}
