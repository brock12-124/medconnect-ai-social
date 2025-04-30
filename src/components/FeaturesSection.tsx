
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Users, Search, Settings, Shield, Book } from 'lucide-react';

const FeatureCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color: string
}> = ({ icon, title, description, color }) => {
  return (
    <Card className="feature-card border-none shadow-md hover:-translate-y-1">
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ImageIcon className="h-6 w-6 text-white" />,
      title: "AI Scan Analysis",
      description: "Upload CT/MRI scans in .nii/.nii.gz format for instant AI-powered pancreas and tumor detection.",
      color: "bg-medical-blue"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Community Support",
      description: "Connect with patients and radiologists in a secure environment to share experiences and advice.",
      color: "bg-medical-purple"
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Secure & Private",
      description: "Role-based access control ensures your medical data remains confidential and protected.",
      color: "bg-medical-teal"
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Advanced Visualization",
      description: "View colored overlays highlighting regions of interest within your medical scans.",
      color: "bg-medical-blue"
    },
    {
      icon: <Book className="h-6 w-6 text-white" />,
      title: "Medical Resources",
      description: "Access a library of educational content to better understand your diagnosis.",
      color: "bg-medical-purple"
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Radiologist Tools",
      description: "Specialized tools for professionals to analyze and annotate patient scans.",
      color: "bg-medical-teal"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">
          Powerful Features for Patients and Professionals
        </h2>
        <p className="section-subtitle text-center">
          MedConnect combines cutting-edge AI technology with community support to create a comprehensive healthcare platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
