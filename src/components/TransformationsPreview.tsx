
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransformationsPreview = () => {
  const transformations = [
    {
      name: "Priya S.",
      program: "Weight Loss Program",
      result: "Lost 15 kgs in 12 weeks",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "The program changed my life completely. I feel stronger and more confident than ever before. The Indian diet plan made it so much easier to follow."
    },
    {
      name: "Rohit K.",
      program: "Muscle Building",
      result: "Gained 8 kgs muscle",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Professional guidance made all the difference. I achieved results I never thought possible while following my vegetarian diet."
    },
    {
      name: "Anita M.",
      program: "Functional Fitness",
      result: "Improved mobility & strength",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "My daily activities became so much easier. No more back pain and I feel energized all day. The yoga integration was perfect for me."
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
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="text-center">
                  <div className="text-xs md:text-sm font-semibold text-gray-500 mb-2">Before</div>
                  <img
                    src={transformation.beforeImage}
                    alt={`${transformation.name} before`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm font-semibold text-gray-500 mb-2">After</div>
                  <img
                    src={transformation.afterImage}
                    alt={`${transformation.name} after`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
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
