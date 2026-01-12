import React from 'react';
import { Mail, Github, BookOpen } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-24 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Start Your Project</h2>
            <p className="text-brand-slate mb-10 text-lg leading-relaxed">
              Ready to integrate OpenMotor propulsion? Contact our engineering team for detailed specs, CAD models, and NRE estimation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-white border border-gray-200 flex items-center justify-center text-brand-navy shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Direct Engineering Channel</div>
                  <a href="mailto:vadim@motresres.com" className="text-xl font-bold text-brand-navy hover:text-brand-orange transition-colors">
                    Mail Us
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/eMotres/OpenMotor-Hardware" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-gray-200 text-brand-navy font-bold rounded-sm hover:border-brand-navy hover:shadow-lg transition-all flex items-center gap-2 group">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub
                </a>
                <a href="https://github.com/eMotres/OpenMotor-Hardware#readme" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-gray-200 text-brand-navy font-bold rounded-sm hover:border-brand-navy hover:shadow-lg transition-all flex items-center gap-2 group">
                  <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" /> Docs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-200 shadow-xl shadow-brand-navy/5">
            <h3 className="text-lg font-bold text-brand-navy mb-6 uppercase tracking-wider border-b border-gray-100 pb-4">Request Consultation</h3>
            <ContactForm />
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
