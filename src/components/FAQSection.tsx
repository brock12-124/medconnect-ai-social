
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
      answer: "MedConnect currently supports medical imaging files in NIfTI format (.nii and .nii.gz). These are common formats for MRI and CT scan data in the medical research community."
    },
    {
      question: "How accurate is the AI for detecting pancreas and tumors?",
      answer: "Our AI model has been trained on a large dataset of annotated scans and achieves an accuracy rate of over 92% for pancreas detection and 89% for tumor detection. However, we always recommend professional review of all AI-generated results."
    },
    {
      question: "Is my medical data secure on the platform?",
      answer: "Absolutely. We employ industry-standard security practices, including encryption, JWT authentication with HTTP-only cookies, strict CORS policies, and CSRF protection. All data is stored in compliance with healthcare data regulations."
    },
    {
      question: "Who can see my uploaded scans and community posts?",
      answer: "You have complete control over your data privacy. By default, your scans are only visible to you and the radiologists you explicitly share them with. Community posts can be set as private, shared with specific groups, or public."
    },
    {
      question: "How do I get verified as a radiologist on the platform?",
      answer: "During registration, select 'Radiologist' as your role and you'll be prompted to provide your professional credentials. Our team will verify these credentials before granting radiologist-level access to the platform."
    },
    {
      question: "Can I download the analysis results and reports?",
      answer: "Yes, all analysis results, including AI-generated overlays and professional annotations, can be downloaded in various formats suitable for medical use and patient records."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-subtitle text-center">
          Find answers to common questions about MedConnect's features and functionality.
        </p>
        
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-2">
            Can't find what you're looking for?
          </p>
          <a href="#contact" className="text-medical-blue font-medium hover:underline">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
