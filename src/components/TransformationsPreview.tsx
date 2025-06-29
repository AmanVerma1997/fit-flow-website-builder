
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TransformationsPreview = () => {
  const transformations = [
    {
      name: "Sarah M.",
      program: "Weight Loss Program",
      result: "Lost 35 lbs in 12 weeks",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "The program changed my life completely. I feel stronger and more confident than ever before."
    },
    {
      name: "Mike R.",
      program: "Muscle Building",
      result: "Gained 20 lbs muscle",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Professional guidance made all the difference. I achieved results I never thought possible."
    },
    {
      name: "Lisa K.",
      program: "Functional Fitness",
      result: "Improved mobility & strength",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "My daily activities became so much easier. No more back pain and I feel energized all day."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Real Results, Real People
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations achieved by our clients through dedication, expert guidance, and proven training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Before</div>
                  <img
                    src={transformation.beforeImage}
                    alt={`${transformation.name} before`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-500 mb-2">After</div>
                  <img
                    src={transformation.afterImage}
                    alt={`${transformation.name} after`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
              </div>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary">{transformation.name}</h3>
                  <div className="text-accent font-semibold">{transformation.result}</div>
                  <div className="text-sm text-gray-500">{transformation.program}</div>
                </div>
                <blockquote className="text-sm text-gray-600 italic text-center">
                  "{transformation.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link to="/transformations">View All Transformations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsPreview;
