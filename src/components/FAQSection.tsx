
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What scan formats does MedConnect support?",
      answer: "MedConnect currently supports medical imaging files in NIfTI format (.nii and .nii.gz). These are standard formats for MRI and CT scan data in medical research and clinical settings."
    },
    {
      question: "How accurate is the AI for detecting pancreas and tumors?",
      answer: "Our AI model has been trained on over 50,000 annotated scans and achieves an accuracy rate of 97% for pancreas detection and 94% for tumor identification. All results are verified by professional radiologists before clinical decisions."
    },
    {
      question: "Is my medical data secure on the platform?",
      answer: "Absolutely. We employ enterprise-grade security including end-to-end encryption, JWT authentication with HTTP-only cookies, strict CORS policies, and CSRF protection. All data storage and handling comply with HIPAA and GDPR regulations."
    },
    {
      question: "Who can see my uploaded scans and community posts?",
      answer: "You have complete control over your data privacy. By default, your scans are only visible to you and the radiologists you explicitly share them with. Community posts can be set as private, shared with specific groups, or public."
    },
    {
      question: "How do I get verified as a radiologist on the platform?",
      answer: "During registration, select 'Radiologist' as your role and you'll be prompted to provide your professional credentials and license information. Our verification team will review and confirm your status within 24-48 hours."
    },
    {
      question: "Can I download the analysis results and reports?",
      answer: "Yes, all analysis results, including AI-generated overlays, professional annotations, and diagnostic reports can be downloaded in various formats suitable for medical use, including DICOM, PDF, and encrypted data packages."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-medical-light-purple">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about MedConnect's features, security, and functionality.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="mt-8 bg-white rounded-3xl p-2 shadow-sm" defaultValue="item-0">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b last:border-0 animate-fade-in" 
              style={{ animationDelay: `${0.1 * index + 0.3}s` }}
            >
              <AccordionTrigger className="text-left font-medium px-6 py-5 text-lg hover:no-underline hover:text-medical-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-medical-gray px-6 pb-5 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-medical-gray mb-3">
            Still have questions?
          </p>
          <a href="#contact" className="text-medical-blue font-medium hover:underline inline-flex">
            Contact our support team
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
