
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Clients Transformed" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Certifications" },
    { icon: <Heart className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" }
  ];

  const certifications = [
    "Gold's Gym Certified Personal Trainer",
    "Professional Dietitian & Nutritionist",
    "Sports Nutrition Specialist",
    "Functional Movement Screen (FMS)",
    "Strength & Conditioning Specialist",
    "First Aid & CPR Certified"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                Your Fitness Journey
                <span className="text-accent block">Starts Here</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                Hi, I'm Ajay Verma, a Gold's Gym certified personal trainer and professional dietitian from Chandigarh with over 5 years of experience in transforming lives through fitness. As the owner of Gymaholics Wellness Studio, my mission is to make fitness accessible and sustainable for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20book%20a%20consultation.">Book Consultation</a>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/69c70de7-75e0-4ea2-9827-1735359840d4.png"
                  alt="Ajay Verma - Professional Personal Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6">
                <div className="text-accent mb-3 md:mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              My Fitness Journey
            </h2>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              My fitness journey began in Chandigarh when I realized the transformative power of proper training and nutrition. After struggling with my own fitness goals, I decided to pursue professional training and became a Gold's Gym certified trainer, combining it with my passion for nutrition science.
            </p>
            
            <p>
              As the owner and head trainer of Gymaholics Wellness Studio in Zirakpur, I've dedicated my career to helping people achieve their fitness goals through personalized training programs and professional nutrition guidance. My dual expertise as both a certified trainer and professional dietitian allows me to provide comprehensive fitness solutions.
            </p>
            
            <p>
              I specialize in creating sustainable fitness programs that work with Indian lifestyles, food habits, and cultural preferences. Whether it's weight loss, muscle building, or overall wellness, I believe in combining scientific training methods with practical nutrition that incorporates local ingredients and traditional eating patterns.
            </p>
            
            <p>
              At Gymaholics, I've helped over 500 clients transform their lives - from busy professionals dealing with lifestyle diseases to students wanting to build confidence through fitness. My approach focuses on long-term results rather than quick fixes, ensuring every client develops healthy habits that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              Certifications & Qualifications
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Continuously learning to provide you with the best training and nutrition guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm md:text-base">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Let's work together to achieve your fitness goals with personalized training and nutrition guidance at Gymaholics Wellness Studio.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20start%20my%20transformation%20journey.">Start Your Journey</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
