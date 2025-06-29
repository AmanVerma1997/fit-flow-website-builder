
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Video, BookOpen } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Beginner's Workout Guide",
      type: "PDF Guide",
      description: "Complete workout routines for beginners with detailed exercise instructions and form tips.",
      icon: <FileText className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Beginner's Workout Guide"
    },
    {
      title: "Indian Diet Plan for Weight Loss",
      type: "PDF Guide",
      description: "Customized meal plans featuring traditional Indian foods for sustainable weight loss.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Diet Plan"
    },
    {
      title: "Home Workout Videos",
      type: "Video Series",
      description: "Follow-along workout videos you can do at home with minimal equipment.",
      icon: <Video className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Home Workout Videos"
    },
    {
      title: "Muscle Building Nutrition Guide",
      type: "PDF Guide",
      description: "Comprehensive nutrition guide for building lean muscle with Indian vegetarian and non-vegetarian options.",
      icon: <FileText className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Nutrition Guide"
    },
    {
      title: "Yoga & Flexibility Routines",
      type: "PDF + Video",
      description: "Traditional yoga asanas and stretching routines for improved flexibility and recovery.",
      icon: <Download className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Yoga Routines"
    },
    {
      title: "Cardio Training Plan",
      type: "PDF Guide",
      description: "Structured cardio workouts suitable for Indian climate and available equipment.",
      icon: <FileText className="w-6 h-6" />,
      link: "mailto:trainer@fitflow.com?subject=Request for Cardio Plan"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Free Fitness Resources
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Download free workout guides, diet plans, and fitness resources designed specifically for Indian fitness enthusiasts.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover-lift bg-white border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {resource.icon}
                    </div>
                    <div className="text-sm text-accent font-semibold">
                      {resource.type}
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-primary">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm md:text-base flex-1">{resource.description}</p>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base"
                  >
                    <a href={resource.link}>Request Resource</a>
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
            Need Personalized Guidance?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Get customized workout and nutrition plans tailored to your specific goals and lifestyle.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            <a href="mailto:trainer@fitflow.com?subject=Personal Training Consultation">Book Personal Consultation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
