
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      title: "Weight Loss Transformation",
      description: "A comprehensive 12-week program designed to help you lose weight sustainably through a combination of cardio, strength training, and traditional Indian nutrition guidance.",
      duration: "12 weeks",
      sessions: "3x per week",
      price: "Starting at ₹8,999/month",
      benefits: [
        "Personalized workout plans",
        "Cardio and strength training",
        "Indian nutrition guidance and meal planning",
        "Progress tracking and measurements",
        "1-on-1 coaching sessions",
        "24/7 WhatsApp support and motivation"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Muscle Building Program",
      description: "Structured 16-week strength training program designed to build lean muscle mass with Indian dietary preferences and progressive overload techniques.",
      duration: "16 weeks",
      sessions: "4x per week",
      price: "Starting at ₹11,999/month",
      benefits: [
        "Progressive strength training",
        "Muscle building techniques",
        "Recovery and rest guidance",
        "Indian supplement recommendations",
        "Form correction and safety",
        "Advanced training methods"
      ],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Functional Fitness & Yoga",
      description: "8-week program combining functional movement patterns with traditional yoga asanas for improved daily life strength and flexibility.",
      duration: "8 weeks",
      sessions: "2x per week",
      price: "Starting at ₹6,999/month",
      benefits: [
        "Traditional yoga integration",
        "Injury prevention techniques",
        "Daily life strength building",
        "Flexibility and mobility focus",
        "Core stability training",
        "Breathing techniques"
      ],
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Wellness Program",
      description: "Specialized program for IT professionals and office workers dealing with desk job challenges, back pain, and sedentary lifestyle issues.",
      duration: "12 weeks",
      sessions: "4-5x per week",
      price: "Starting at ₹14,999/month",
      benefits: [
        "Desk job specific exercises",
        "Posture correction techniques",
        "Stress management through fitness",
        "Quick office workout routines",
        "Eye strain and neck pain relief",
        "Energy boosting techniques"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Senior Citizen Fitness",
      description: "Safe and effective fitness program designed for adults 55+ focusing on maintaining independence, strength, and traditional Indian wellness practices.",
      duration: "Ongoing",
      sessions: "2-3x per week",
      price: "Starting at ₹5,999/month",
      benefits: [
        "Age-appropriate exercises",
        "Fall prevention training",
        "Bone density improvement",
        "Traditional Indian exercises",
        "Social interaction",
        "Health monitoring"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Online Coaching",
      description: "Remote personal training with customized workout plans, video calls, and continuous support. Perfect for busy schedules and traveling professionals.",
      duration: "Flexible",
      sessions: "Self-paced",
      price: "Starting at ₹3,999/month",
      benefits: [
        "Custom workout videos in Hindi/English",
        "Weekly video check-ins",
        "Indian nutrition planning",
        "Progress tracking app",
        "24/7 WhatsApp support",
        "Flexible scheduling"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Choose Your Transformation Journey
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Expertly designed programs tailored to Indian lifestyle, food habits, and fitness goals. Every program includes personalized attention and proven results.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`hover-lift bg-white border-0 shadow-lg h-full ${program.featured ? 'ring-2 ring-accent' : ''}`}>
                {program.featured && (
                  <div className="bg-accent text-white text-center py-2 text-xs md:text-sm font-semibold">
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
                  <CardTitle className="text-lg md:text-xl font-bold text-primary">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-1 text-xs md:text-sm text-gray-600">
                    <div>Duration: <span className="font-semibold text-accent">{program.duration}</span></div>
                    <div>Sessions: <span className="font-semibold text-accent">{program.sessions}</span></div>
                    <div className="text-base md:text-lg font-bold text-primary">{program.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm md:text-base">{program.description}</p>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-2 text-sm md:text-base">What's Included:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-xs md:text-sm text-gray-600">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 mt-1.5"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-auto">
                    <a href="mailto:trainer@fitflow.com?subject=Interest in Training Program">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Book a free consultation to discuss your goals and find the perfect program for you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            <a href="mailto:trainer@fitflow.com?subject=Free Consultation Request">Book Free Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
