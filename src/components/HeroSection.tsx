
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      heroRef.current.style.setProperty('--scroll', scrollY.toString());
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-20 overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto text-medical-dark animate-fade-in">
            Advanced AI meets <span className="text-medical-blue">healthcare</span> innovation
          </h1>
          <p className="text-xl md:text-2xl text-medical-gray mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            MedConnect unifies AI diagnostics with a supportive community platform, empowering patients and radiologists alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="apple-primary-button text-base px-8 py-4 h-auto">
              Try MedConnect
            </Button>
            <Button variant="outline" className="apple-secondary-button text-base px-8 py-4 h-auto">
              Learn more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="relative mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="AI medical scan analysis" 
              className="object-cover w-full parallax-scroll"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent mix-blend-overlay"></div>
          </div>
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg animate-pulse-slow">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-medical-light-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-medical-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-medical-gray">97.8% Accuracy</p>
                <p className="font-medium text-sm text-medical-dark">Pancreas Detection</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-20 pt-10">
          <p className="text-center text-sm text-medical-gray mb-8 tracking-wide">TRUSTED BY LEADING MEDICAL INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <div className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Mayo_Clinic.svg" alt="Mayo Clinic" className="h-full" />
            </div>
            <div className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Johns_Hopkins_Medicine_Logo_2017.png" alt="Johns Hopkins" className="h-full" />
            </div>
            <div className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Cedars-Sinai_Medical_Center_logo.svg" alt="Cedars-Sinai" className="h-full" />
            </div>
            <div className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Cleveland_Clinic_logo.svg" alt="Cleveland Clinic" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
