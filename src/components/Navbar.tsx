
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "w-full fixed top-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-medical-blue to-medical-purple rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-medium text-medical-dark">MedConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#features" className="text-medical-gray hover:text-medical-blue transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-medical-gray hover:text-medical-blue transition-colors text-sm font-medium">
              How it Works
            </a>
            <a href="#testimonials" className="text-medical-gray hover:text-medical-blue transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-medical-gray hover:text-medical-blue transition-colors text-sm font-medium">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-medical-blue hover:bg-medical-light-blue text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-medical-blue hover:bg-medical-blue/90 rounded-full text-sm px-5">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-medical-dark" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white shadow-md absolute w-full transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0 overflow-hidden"
      )}>
        <div className="container-custom flex flex-col space-y-4">
          <a href="#features" className="text-medical-gray hover:text-medical-blue transition-colors py-2 text-sm font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-medical-gray hover:text-medical-blue transition-colors py-2 text-sm font-medium">
            How it Works
          </a>
          <a href="#testimonials" className="text-medical-gray hover:text-medical-blue transition-colors py-2 text-sm font-medium">
            Testimonials
          </a>
          <a href="#faq" className="text-medical-gray hover:text-medical-blue transition-colors py-2 text-sm font-medium">
            FAQ
          </a>
          <div className="flex flex-col space-y-3 pt-4 border-t">
            <Button variant="ghost" className="text-medical-blue hover:bg-medical-light-blue w-full justify-start text-sm font-medium">
              Log in
            </Button>
            <Button className="bg-medical-blue hover:bg-medical-blue/90 rounded-full w-full text-sm">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
