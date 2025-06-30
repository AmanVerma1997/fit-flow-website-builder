
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransformationsPreview = () => {
  const transformations = [
    {
      name: "Arjun S.",
      program: "Weight Loss Program",
      result: "Lost 22 kgs in 16 weeks",
      image: "/lovable-uploads/4260bdc1-a6e4-487f-b148-c19dc767641f.png",
      testimonial: "Training with Ajay completely transformed my life. The personalized approach and consistent motivation helped me achieve results I never thought possible."
    },
    {
      name: "Vikram R.",
      program: "Body Transformation",
      result: "Lost 18 kgs & gained muscle",
      image: "/lovable-uploads/af41ebc5-aa69-4141-bb1e-072fb853c27d.png",
      testimonial: "Ajay's guidance on both training and nutrition was incredible. I not only lost weight but also built the physique I always wanted."
    },
    {
      name: "Priya M.",
      program: "Fitness Transformation",
      result: "Lost 15 kgs in 12 weeks",
      image: "/lovable-uploads/31836de0-0ae0-490b-af7a-c9dd23a25fc9.png",
      testimonial: "The support and personalized training plan made all the difference. I feel stronger and more confident than ever before."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Real Results, Real People
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations achieved by our clients through dedication, expert guidance, and proven training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {transformations.map((transformation, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg overflow-hidden h-full">
              <div className="p-4">
                <img
                  src={transformation.image}
                  alt={`${transformation.name} transformation`}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <CardContent className="space-y-3 flex-1 flex flex-col">
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-primary">{transformation.name}</h3>
                  <div className="text-accent font-semibold text-sm md:text-base">{transformation.result}</div>
                  <div className="text-xs md:text-sm text-gray-500">{transformation.program}</div>
                </div>
                <blockquote className="text-xs md:text-sm text-gray-600 italic text-center flex-1">
                  "{transformation.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-sm md:text-base">
            <Link to="/transformations">View All Transformations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsPreview;
