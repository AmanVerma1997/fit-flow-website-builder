
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      description: "Comprehensive program combining cardio, strength training, and Indian nutrition guidance to help you lose weight sustainably.",
      duration: "12 weeks",
      benefits: ["Fat burning workouts", "Indian meal planning", "Progress tracking", "1-on-1 coaching"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Muscle Building Program",
      description: "Structured strength training program designed to build lean muscle mass with nutrition plans suitable for Indian dietary preferences.",
      duration: "16 weeks",
      benefits: ["Strength training", "Muscle building", "Recovery guidance", "Desi nutrition support"],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Functional Fitness",
      description: "Improve your daily movement patterns with traditional Indian exercises combined with modern functional training.",
      duration: "8 weeks",
      benefits: ["Movement quality", "Injury prevention", "Daily life strength", "Yoga integration"],
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Training Programs
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our proven training programs designed to help you achieve your specific fitness goals with expert guidance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg h-full">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold text-primary">
                  {program.title}
                </CardTitle>
                <div className="text-sm text-accent font-semibold">
                  Duration: {program.duration}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm md:text-base flex-1">{program.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">What's Included:</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-auto">
                  <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20get%20started%20with%20my%20transformation%20journey." target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-sm md:text-base">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
