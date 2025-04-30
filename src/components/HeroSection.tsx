
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-light-blue via-white to-medical-light-purple opacity-70 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-medical-blue rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-medical-purple rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Medical Imaging <span className="text-medical-blue">Meets</span> Healthcare Community
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              MedConnect unifies advanced AI diagnostics with a supportive community platform, empowering patients and radiologists alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-medical-blue hover:bg-medical-blue/90 text-lg px-8 py-6">
                Upload Scan
              </Button>
              <Button variant="outline" className="border-medical-purple text-medical-purple hover:bg-medical-purple hover:text-white text-lg px-8 py-6">
                Join Community <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-medical-purple/20 rounded-2xl transform rotate-3"></div>
              <div className="bg-white p-4 rounded-2xl shadow-lg transform -rotate-3 relative z-10">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="AI medical scan analysis" 
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                  <div className="flex items-center text-white">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                    <span className="font-medium text-sm">AI Analysis Complete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-pulse-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-medical-purple/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-medical-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">99.8% Accuracy</p>
                  <p className="font-medium text-sm">Pancreas Detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-6">TRUSTED BY LEADING MEDICAL INSTITUTIONS</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-28 bg-gray-400 rounded"></div>
            <div className="h-8 w-28 bg-gray-400 rounded"></div>
            <div className="h-8 w-28 bg-gray-400 rounded"></div>
            <div className="h-8 w-28 bg-gray-400 rounded"></div>
            <div className="h-8 w-28 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
