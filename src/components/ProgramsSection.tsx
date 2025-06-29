
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      description: "Comprehensive program combining cardio, strength training, and nutrition guidance to help you lose weight sustainably.",
      duration: "12 weeks",
      benefits: ["Fat burning workouts", "Meal planning", "Progress tracking", "1-on-1 coaching"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Muscle Building Program",
      description: "Structured strength training program designed to build lean muscle mass and increase overall strength.",
      duration: "16 weeks",
      benefits: ["Strength training", "Muscle building", "Recovery guidance", "Nutrition support"],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Functional Fitness",
      description: "Improve your daily movement patterns and overall fitness with functional training exercises.",
      duration: "8 weeks",
      benefits: ["Movement quality", "Injury prevention", "Daily life strength", "Flexibility focus"],
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our proven training programs designed to help you achieve your specific fitness goals with expert guidance every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift bg-white border-0 shadow-lg">
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {program.title}
                </CardTitle>
                <div className="text-sm text-accent font-semibold">
                  Duration: {program.duration}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{program.description}</p>
                <div>
                  <h4 className="font-semibold text-primary mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
