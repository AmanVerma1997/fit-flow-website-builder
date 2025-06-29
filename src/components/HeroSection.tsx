
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Body,
              <span className="text-accent block">Transform Your Life</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Professional personal training with proven results. Join hundreds of clients who've achieved their fitness goals with expert guidance and personalized programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4">
                <Link to="/programs">View Programs</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Professional gym instructor training"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm font-medium">Clients Transformed</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-primary p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
