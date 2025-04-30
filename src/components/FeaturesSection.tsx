
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, Users, Search, Shield, Book, Settings } from 'lucide-react';

const FeatureCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  color: string,
  index: number
}> = ({ icon, title, description, color, index }) => {
  return (
    <Card className="feature-card border-none animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
      <CardContent className="p-8">
        <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-2xl font-medium mb-3 text-medical-dark">{title}</h3>
        <p className="text-medical-gray text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ImageIcon className="h-7 w-7 text-white" />,
      title: "AI Scan Analysis",
      description: "Upload medical scans for instant AI-powered pancreas and tumor detection with up to 97% accuracy.",
      color: "bg-medical-blue"
    },
    {
      icon: <Users className="h-7 w-7 text-white" />,
      title: "Community Support",
      description: "Connect with patients and radiologists in a secure environment to share experiences and advice.",
      color: "bg-medical-purple"
    },
    {
      icon: <Shield className="h-7 w-7 text-white" />,
      title: "Secure & Private",
      description: "Advanced encryption and role-based access ensure your medical data remains confidential and protected.",
      color: "bg-medical-teal"
    },
    {
      icon: <Search className="h-7 w-7 text-white" />,
      title: "Advanced Visualization",
      description: "Interactive 3D visualization with colored overlays highlighting regions of interest within your scans.",
      color: "bg-medical-blue"
    },
    {
      icon: <Book className="h-7 w-7 text-white" />,
      title: "Medical Resources",
      description: "Comprehensive library of educational content authored by leading oncologists and radiologists.",
      color: "bg-medical-purple"
    },
    {
      icon: <Settings className="h-7 w-7 text-white" />,
      title: "Radiologist Tools",
      description: "Specialized tools for professionals to analyze, annotate, and collaborate on patient scans.",
      color: "bg-medical-teal"
    },
  ];

  return (
    <section id="features" className="py-24 bg-medical-light-blue">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-title animate-fade-in">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            MedConnect brings together advanced AI technology with human expertise to transform medical imaging workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
