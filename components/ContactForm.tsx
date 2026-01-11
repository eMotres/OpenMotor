"use client";

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://formspree.io/f/xbddrvlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy">Message Sent!</h3>
        <p className="text-gray-600">
          Thank you for contacting us. We will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm text-gray-500 hover:text-brand-navy underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
          <input 
            id="name"
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
            placeholder="John Doe" 
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-bold text-gray-500 uppercase mb-2">Company</label>
          <input 
            id="company"
            type="text" 
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
            placeholder="Drone Co." 
            disabled={isSubmitting}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
        <input 
          id="email"
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
          placeholder="john@company.com" 
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Details</label>
        <textarea 
          id="message"
          rows={4} 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-sm focus:ring-1 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all placeholder:text-gray-400" 
          placeholder="Describe your KV and power requirements..."
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full py-4 bg-brand-navy text-white font-bold text-sm uppercase tracking-widest hover:bg-brand-orange transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Request'} 
        {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </button>
    </form>
  );
}