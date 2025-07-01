
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Transform Your Body,
              <span className="text-accent block">Transform Your Life</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 md:mb-6 leading-relaxed">
              Professional personal training in Chandigarh with proven results. Join hundreds of clients who've achieved their fitness goals with expert guidance and personalized programs.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 md:mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <img
                    src="/lovable-uploads/69c70de7-75e0-4ea2-9827-1735359840d4.png"
                    alt="Ajay Verma"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Ajay Verma</h3>
                  <p className="text-blue-100 text-sm">Certified Trainer & Owner</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm text-center lg:text-left">
                Gold's Gym Certified • Professional Dietitian & Nutritionist
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20get%20started%20with%20my%20transformation%20journey.">Get Started</a>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white hover:text-primary text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm border border-white/30">
                <a href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20book%20a%20free%20consultation.">Book Free Consultation</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src="/lovable-uploads/69c70de7-75e0-4ea2-9827-1735359840d4.png"
                alt="Ajay Verma - Professional gym trainer in Chandigarh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white text-primary p-4 md:p-6 rounded-xl shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
              <div className="text-xs md:text-sm font-medium">Clients Transformed</div>
            </div>
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white text-primary p-4 md:p-6 rounded-xl shadow-xl">
              <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
              <div className="text-xs md:text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
