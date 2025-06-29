
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      description: "A comprehensive 12-week program designed to help you lose weight sustainably through a combination of cardio, strength training, and nutrition guidance.",
      duration: "12 weeks",
      sessions: "3x per week",
      price: "Starting at $199/month",
      benefits: [
        "Personalized workout plans",
        "Cardio and strength training",
        "Nutrition guidance and meal planning",
        "Progress tracking and measurements",
        "1-on-1 coaching sessions",
        "24/7 support and motivation"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Muscle Building Program",
      description: "Structured 16-week strength training program designed to build lean muscle mass and increase overall strength through progressive overload.",
      duration: "16 weeks",
      sessions: "4x per week",
      price: "Starting at $249/month",
      benefits: [
        "Progressive strength training",
        "Muscle building techniques",
        "Recovery and rest guidance",
        "Supplement recommendations",
        "Form correction and safety",
        "Advanced training methods"
      ],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Functional Fitness",
      description: "8-week program focused on improving daily movement patterns, mobility, and overall functional strength for better quality of life.",
      duration: "8 weeks",
      sessions: "2x per week",
      price: "Starting at $149/month",
      benefits: [
        "Movement quality improvement",
        "Injury prevention techniques",
        "Daily life strength building",
        "Flexibility and mobility focus",
        "Core stability training",
        "Balance and coordination"
      ],
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Athletic Performance",
      description: "Advanced program for athletes looking to improve sport-specific performance, speed, agility, and competitive edge.",
      duration: "12 weeks",
      sessions: "4-5x per week",
      price: "Starting at $299/month",
      benefits: [
        "Sport-specific training",
        "Speed and agility development",
        "Power and explosiveness",
        "Competition preparation",
        "Mental training techniques",
        "Recovery optimization"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Senior Fitness",
      description: "Safe and effective fitness program designed for adults 55+ focusing on maintaining independence, strength, and mobility.",
      duration: "Ongoing",
      sessions: "2-3x per week",
      price: "Starting at $129/month",
      benefits: [
        "Age-appropriate exercises",
        "Fall prevention training",
        "Bone density improvement",
        "Flexibility maintenance",
        "Social interaction",
        "Health monitoring"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Online Coaching",
      description: "Remote personal training with customized workout plans, video calls, and continuous support from anywhere in the world.",
      duration: "Flexible",
      sessions: "Self-paced",
      price: "Starting at $99/month",
      benefits: [
        "Custom workout videos",
        "Weekly video check-ins",
        "Nutrition planning",
        "Progress tracking app",
        "24/7 message support",
        "Flexible scheduling"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Transformation Journey
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expertly designed programs tailored to your goals, fitness level, and lifestyle. Every program includes personalized attention and proven results.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`hover-lift bg-white border-0 shadow-lg ${program.featured ? 'ring-2 ring-accent' : ''}`}>
                {program.featured && (
                  <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
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
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Duration: <span className="font-semibold text-accent">{program.duration}</span></div>
                    <div>Sessions: <span className="font-semibold text-accent">{program.sessions}</span></div>
                    <div className="text-lg font-bold text-primary">{program.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{program.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free consultation to discuss your goals and find the perfect program for you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
