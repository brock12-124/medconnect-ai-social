
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-medical-dark text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight max-w-3xl mx-auto animate-fade-in">
          Elevate your medical imaging experience
        </h2>
        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join thousands of healthcare professionals already using MedConnect to improve diagnosis and patient outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-medical-blue hover:bg-medical-blue/90 text-white rounded-full text-lg px-10 py-6 h-auto">
            Get Started Free
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full text-lg px-10 py-6 h-auto">
            Request Demo
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" />
              </svg>
            </div>
            <p className="font-semibold text-3xl mb-1">10,000+</p>
            <p className="text-white/60">Active Users</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-semibold text-3xl mb-1">50,000+</p>
            <p className="text-white/60">Scans Analyzed</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-4 rounded-full mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm1-7a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 10.414V9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-semibold text-3xl mb-1">97%</p>
            <p className="text-white/60">Diagnostic Accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
