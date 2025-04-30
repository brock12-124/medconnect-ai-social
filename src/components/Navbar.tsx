
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-medical-blue to-medical-purple rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold">MedConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-medical-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-medical-blue transition-colors">
              How it Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-medical-blue transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-medical-blue transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
              Log in
            </Button>
            <Button className="bg-medical-blue hover:bg-medical-blue/90">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white shadow-md absolute w-full transition-all duration-300 ease-in-out",
        isOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0 py-0 overflow-hidden"
      )}>
        <div className="container-custom flex flex-col space-y-4">
          <a href="#features" className="text-gray-600 hover:text-medical-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-medical-blue transition-colors">
            How it Works
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-medical-blue transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-medical-blue transition-colors">
            FAQ
          </a>
          <div className="flex flex-col space-y-2 pt-2 border-t">
            <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white w-full">
              Log in
            </Button>
            <Button className="bg-medical-blue hover:bg-medical-blue/90 w-full">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
