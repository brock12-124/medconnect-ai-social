
import React from 'react';

const Step: React.FC<{
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  delay: number;
}> = ({ number, title, description, isLast = false, delay }) => {
  return (
    <div className="flex animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-medical-blue text-white font-medium text-lg">
          {number}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-medical-blue/20 mt-2"></div>}
      </div>
      <div className="pb-12">
        <h3 className="text-2xl font-medium mb-3 text-medical-dark">{title}</h3>
        <p className="text-medical-gray text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="section-title animate-fade-in">
            How MedConnect Works
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A seamless experience designed for both patients and radiologists to improve healthcare outcomes.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-medium mb-8 text-medical-blue animate-fade-in" style={{ animationDelay: '0.3s' }}>
              For Patients
            </h3>
            <div>
              <Step 
                number={1} 
                title="Create Your Account" 
                description="Sign up with your email address and set your role as a patient to access patient-specific features and tools."
                delay={0.4}
              />
              <Step 
                number={2} 
                title="Upload Your Scans" 
                description="Securely upload your CT/MRI scans in NIfTI format through our intuitive drag-and-drop interface."
                delay={0.5}
              />
              <Step 
                number={3} 
                title="Get AI Analysis" 
                description="Within minutes, our advanced AI will process your scan and provide detailed visual overlays of detected regions."
                delay={0.6}
              />
              <Step 
                number={4} 
                title="Connect & Learn" 
                description="Join our community to connect with physicians and peers for support, education, and insights."
                isLast
                delay={0.7}
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-3xl font-medium mb-8 text-medical-purple animate-fade-in" style={{ animationDelay: '0.3s' }}>
              For Radiologists
            </h3>
            <div>
              <Step 
                number={1} 
                title="Verify Credentials" 
                description="Complete our streamlined verification process to confirm your professional medical qualifications."
                delay={0.4}
              />
              <Step 
                number={2} 
                title="Access Patient Data" 
                description="Review patient-shared scans enhanced with AI-powered annotations to provide expert insights."
                delay={0.5}
              />
              <Step 
                number={3} 
                title="Use Advanced Tools" 
                description="Leverage our specialized radiologist tools for detailed analysis, annotation, and comprehensive reporting."
                delay={0.6}
              />
              <Step 
                number={4} 
                title="Collaborate Seamlessly" 
                description="Communicate with patients and fellow healthcare professionals through our secure integrated platform."
                isLast
                delay={0.7}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
