
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image, rating }) => {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mb-4 italic text-gray-700">{quote}</p>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4 object-cover" src={image} alt={name} />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "MedConnect's AI analysis helped detect my pancreatic tumor early, and the community provided invaluable emotional support during my treatment journey.",
      name: "Sarah Johnson",
      title: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "As a radiologist, the platform has streamlined my workflow significantly. The AI pre-screening saves valuable time while improving accuracy.",
      name: "Dr. Michael Chen",
      title: "Radiologist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "The collaboration between AI technology and medical professionals on this platform represents the future of healthcare diagnostics.",
      name: "Dr. Emily Rodriguez",
      title: "Chief of Radiology",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">
          Trusted by Patients and Professionals
        </h2>
        <p className="section-subtitle text-center">
          Hear from our community about how MedConnect has transformed their healthcare experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
