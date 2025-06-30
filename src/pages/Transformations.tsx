
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Transformations = () => {
  const transformations = [
    {
      name: "Rohit M.",
      age: 28,
      program: "Weight Loss Transformation",
      duration: "14 weeks",
      result: "Lost 18 kgs, gained confidence",
      beforeImage: "/lovable-uploads/72446fa7-eedc-4848-bf93-28428b2d74e4.png",
      afterImage: "/lovable-uploads/1e9d56d3-d635-4f79-8aca-8d5d76fd9b86.png",
      testimonial: "Training with Ajay completely changed my life. I lost weight, gained confidence, and learned sustainable eating habits that work with Indian cuisine.",
      achievements: ["18 kgs weight loss", "Improved energy levels", "Better sleep quality", "Increased confidence"]
    },
    {
      name: "Priya S.",
      age: 26,
      program: "Body Transformation",
      duration: "12 weeks",
      result: "Lost 12 kgs & toned body",
      beforeImage: "/lovable-uploads/ddc0855d-4c0a-4859-859f-7476fd9ac148.png",
      afterImage: "/lovable-uploads/23f987f0-0ff2-4645-b51b-a6afce063afc.png",
      testimonial: "Ajay's guidance helped me achieve the toned body I always wanted. The combination of strength training and proper nutrition worked perfectly for me.",
      achievements: ["12 kgs weight loss", "Improved muscle tone", "Better flexibility", "Increased strength"]
    },
    {
      name: "Vikram K.",
      age: 24,
      program: "Muscle Building",
      duration: "16 weeks",
      result: "Gained 8 kgs lean muscle",
      beforeImage: "/lovable-uploads/23f987f0-0ff2-4645-b51b-a6afce063afc.png",
      afterImage: "/lovable-uploads/0e5182a0-a942-4bc2-b4da-a419c6f9f8e3.png",
      testimonial: "Professional guidance from Ajay made all the difference. I built muscle while following my vegetarian diet and feel stronger than ever before.",
      achievements: ["8 kgs muscle gain", "Doubled strength", "Improved posture", "Better nutrition habits"]
    },
    {
      name: "Sneha R.",
      age: 30,
      program: "Weight Loss & Toning",
      duration: "20 weeks",
      result: "Lost 15 kgs & improved fitness",
      beforeImage: "/lovable-uploads/54b4f9d3-5f44-436d-87d8-b819cbc9e817.png",
      afterImage: "/lovable-uploads/ddc0855d-4c0a-4859-859f-7476fd9ac148.png",
      testimonial: "My transformation journey with Ajay was life-changing. I not only lost weight but also developed a healthy relationship with fitness and nutrition.",
      achievements: ["15 kgs weight loss", "Improved cardiovascular health", "Better muscle definition", "Lifestyle transformation"]
    },
    {
      name: "Arjun P.",
      age: 32,
      program: "Body Recomposition",
      duration: "18 weeks",
      result: "Improved body composition by 40%",
      beforeImage: "/lovable-uploads/0e5182a0-a942-4bc2-b4da-a419c6f9f8e3.png",
      afterImage: "/lovable-uploads/72446fa7-eedc-4848-bf93-28428b2d74e4.png",
      testimonial: "Ajay's scientific approach to training and nutrition helped me achieve results I never thought possible. The program was perfectly tailored to my goals.",
      achievements: ["40% body composition improvement", "Increased muscle mass", "Reduced body fat", "Enhanced athletic performance"]
    },
    {
      name: "Kavya M.",
      age: 27,
      program: "Functional Fitness",
      duration: "10 weeks",
      result: "Improved mobility & strength",
      beforeImage: "/lovable-uploads/54b4f9d3-5f44-436d-87d8-b819cbc9e817.png",
      afterImage: "/lovable-uploads/23f987f0-0ff2-4645-b51b-a6afce063afc.png",
      testimonial: "My daily activities became so much easier after training with Ajay. No more back pain and I feel energized throughout the day.",
      achievements: ["Eliminated back pain", "Improved flexibility", "Better balance", "Increased daily energy"]
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
            <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20starting%20my%20fitness%20transformation%20journey.%20Could%20you%20please%20share%20more%20details%20about%20your%20programs?">Start Your Journey</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transformations;
