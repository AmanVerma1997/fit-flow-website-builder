
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Transformations = () => {
  const transformations = [
    {
      name: "Sarah M.",
      age: 32,
      program: "Weight Loss Transformation",
      duration: "12 weeks",
      result: "Lost 35 lbs, gained confidence",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "The program changed my life completely. I feel stronger and more confident than ever before. The personalized approach made all the difference.",
      achievements: ["35 lbs weight loss", "Improved energy levels", "Better sleep quality", "Increased strength"]
    },
    {
      name: "Mike R.",
      age: 28,
      program: "Muscle Building Program",
      duration: "16 weeks",
      result: "Gained 20 lbs lean muscle",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "Professional guidance made all the difference. I achieved results I never thought possible and learned proper form and technique.",
      achievements: ["20 lbs muscle gain", "Doubled strength", "Improved posture", "Better nutrition habits"]
    },
    {
      name: "Lisa K.",
      age: 45,
      program: "Functional Fitness",
      duration: "8 weeks",
      result: "Improved mobility & eliminated pain",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "My daily activities became so much easier. No more back pain and I feel energized all day. The functional approach was perfect for my needs.",
      achievements: ["Eliminated back pain", "Improved flexibility", "Better balance", "Increased daily energy"]
    },
    {
      name: "David T.",
      age: 35,
      program: "Athletic Performance",
      duration: "12 weeks",
      result: "Improved sports performance by 40%",
      beforeImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "My athletic performance reached a new level. The sport-specific training helped me excel in my competitions and prevented injuries.",
      achievements: ["40% performance increase", "Faster sprint times", "Better agility", "Injury prevention"]
    },
    {
      name: "Maria S.",
      age: 29,
      program: "Weight Loss Transformation",
      duration: "16 weeks",
      result: "Lost 45 lbs, transformed lifestyle",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0d501ba2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "This journey taught me that fitness is a lifestyle, not a quick fix. I've maintained my results for over a year now and couldn't be happier.",
      achievements: ["45 lbs weight loss", "Lifestyle transformation", "Maintained results 1+ year", "Improved mental health"]
    },
    {
      name: "Robert L.",
      age: 62,
      program: "Senior Fitness",
      duration: "Ongoing",
      result: "Regained mobility and independence",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      afterImage: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      testimonial: "At 62, I thought my best days were behind me. This program proved me wrong. I'm stronger now than I was 10 years ago.",
      achievements: ["Improved balance", "Increased bone density", "Better cardiovascular health", "Enhanced quality of life"]
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
                <div className="grid grid-cols-2 gap-4 p-6">
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
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transformations;
