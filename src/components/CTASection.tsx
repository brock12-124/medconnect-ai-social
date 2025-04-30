
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-blue to-medical-purple text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to transform your medical imaging experience?
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
          Join thousands of patients and radiologists already using MedConnect to improve diagnosis and treatment outcomes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-medical-blue hover:bg-opacity-90 text-lg px-8 py-6">
            Get Started Free
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue text-lg px-8 py-6">
            Request Demo
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex items-center">
            <div className="bg-white/20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" />
              </svg>
            </div>
            <div className="ml-4 text-left">
              <p className="font-bold text-2xl">10,000+</p>
              <p className="text-white/70">Happy Users</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4 text-left">
              <p className="font-bold text-2xl">50,000+</p>
              <p className="text-white/70">Scans Analyzed</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm1-7a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 10.414V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-4 text-left">
              <p className="font-bold text-2xl">92%</p>
              <p className="text-white/70">Diagnostic Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
