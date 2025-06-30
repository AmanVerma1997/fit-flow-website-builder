
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Transformations = () => {
  const transformations = [
    {
      name: "Rohit M.",
      age: 28,
      program: "Weight Loss Transformation",
      duration: "14 weeks",
      result: "Lost 18 kgs, gained confidence",
      image: "/lovable-uploads/69c70de7-75e0-4ea2-9827-1735359840d4.png",
      testimonial: "Training with Ajay completely changed my life. I lost weight, gained confidence, and learned sustainable eating habits that work with Indian cuisine.",
      achievements: ["18 kgs weight loss", "Improved energy levels", "Better sleep quality", "Increased confidence"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Real People, Real Results
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the incredible transformations achieved by our clients through dedication, expert guidance, and proven training programs. Your success story could be next.
          </p>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformations.map((transformation, index) => (
              <Card key={index} className="hover-lift bg-white border-0 shadow-lg overflow-hidden">
                <div className="p-6">
                  <img
                    src={transformation.image}
                    alt={`${transformation.name} transformation`}
                    className="w-full aspect-square object-cover rounded-lg"
                  />
                </div>
                
                <CardContent className="space-y-4">
                  <div className="text-center border-b pb-4">
                    <h3 className="text-xl font-bold text-primary">{transformation.name}</h3>
                    <div className="text-gray-600">Age: {transformation.age}</div>
                    <div className="text-accent font-semibold text-lg">{transformation.result}</div>
                    <div className="text-sm text-gray-500">
                      {transformation.program} • {transformation.duration}
                    </div>
                  </div>

                  <blockquote className="text-gray-600 italic text-center">
                    "{transformation.testimonial}"
                  </blockquote>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Key Achievements:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {transformation.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Proven Track Record
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Clients Transformed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Training Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your Transformation Starts Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful clients who have achieved their fitness goals with our proven programs and expert guidance.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4">
            <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20journey.%20Could%20you%20please%20share%20more%20details%20about%20your%20programs?">Start Your Journey</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transformations;
