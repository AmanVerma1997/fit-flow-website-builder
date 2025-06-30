
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransformationsPreview = () => {
  const transformations = [
    {
      name: "Rohit M.",
      program: "Weight Loss Program",
      result: "Lost 18 kgs in 14 weeks",
      image: "/lovable-uploads/69c70de7-75e0-4ea2-9827-1735359840d4.png",
      testimonial: "Training with Ajay completely changed my life. I lost weight, gained confidence, and learned sustainable eating habits that work with Indian cuisine."
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
