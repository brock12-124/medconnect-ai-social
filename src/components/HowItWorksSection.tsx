
import React from 'react';

const Step: React.FC<{
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-medical-blue text-white font-bold">
          {number}
        </div>
        {!isLast && <div className="h-full w-0.5 bg-medical-blue/20 mt-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center">How MedConnect Works</h2>
        <p className="section-subtitle text-center">
          A simple process designed for both patients and radiologists to get the most out of our platform.
        </p>
        
        <div className="flex flex-col md:flex-row mt-16 gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-medical-blue">For Patients</h3>
            <div className="space-y-2">
              <Step 
                number={1} 
                title="Create an Account" 
                description="Sign up with your email address and set your role as a patient to access patient-specific features."
              />
              <Step 
                number={2} 
                title="Upload Your Scans" 
                description="Securely upload your CT/MRI scans in NIfTI format through our easy-to-use interface."
              />
              <Step 
                number={3} 
                title="Receive AI Analysis" 
                description="Our AI model will automatically detect pancreas and tumor regions, providing visual overlays."
              />
              <Step 
                number={4} 
                title="Join the Community" 
                description="Connect with other patients and professionals to share experiences and gather insights."
                isLast
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-medical-purple">For Radiologists</h3>
            <div className="space-y-2">
              <Step 
                number={1} 
                title="Verify Credentials" 
                description="Create an account and verify your professional credentials to access radiologist features."
              />
              <Step 
                number={2} 
                title="Access Patient Scans" 
                description="View patient-shared scans with AI annotations to provide professional insights."
              />
              <Step 
                number={3} 
                title="Utilize Professional Tools" 
                description="Use our specialized tools to analyze scans, add annotations, and provide detailed reports."
              />
              <Step 
                number={4} 
                title="Engage with Community" 
                description="Answer patient questions and collaborate with other professionals in the community."
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
