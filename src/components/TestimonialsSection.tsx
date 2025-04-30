
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  index: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image, rating, index }) => {
  return (
    <Card className="apple-card animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
      <CardContent className="p-8">
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mb-6 text-lg text-medical-dark leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full mr-4 object-cover" src={image} alt={name} />
          <div>
            <h4 className="font-medium text-medical-dark">{name}</h4>
            <p className="text-sm text-medical-gray">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "MedConnect's AI analysis detected my pancreatic tumor early when conventional methods missed it. The intuitive platform and community support transformed my healthcare journey.",
      name: "Sarah Johnson",
      title: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "As a radiologist, this platform has transformed my workflow. The AI pre-screening is remarkably accurate and saves critical time, allowing me to focus on complex cases.",
      name: "Dr. Michael Chen",
      title: "Radiologist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "The integration of AI technology with expert medical oversight represents the future of diagnostic medicine. MedConnect has set a new standard in healthcare technology.",
      name: "Dr. Emily Rodriguez",
      title: "Chief of Radiology",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-title animate-fade-in">
            Trusted by Healthcare Professionals
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            See how MedConnect is transforming medical imaging and patient care around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
