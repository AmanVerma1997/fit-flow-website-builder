
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      title: "Book Personal Training",
      description: "Schedule your 1-on-1 session",
      action: "Call Now",
      link: "tel:+15551234567",
      icon: "📞"
    },
    {
      title: "WhatsApp Message",
      description: "Quick questions and bookings",
      action: "Message Now",
      link: "https://wa.me/15551234567",
      icon: "💬"
    },
    {
      title: "Email Consultation",
      description: "Detailed program information",
      action: "Send Email",
      link: "mailto:info@fitflow.com?subject=Fitness Consultation Request",
      icon: "📧"
    }
  ];

  const gymInfo = {
    name: "FitFlow Fitness Studio",
    address: "123 Fitness Street, Wellness District, City, State 12345",
    hours: {
      weekdays: "Monday - Friday: 6:00 AM - 10:00 PM",
      weekends: "Saturday - Sunday: 8:00 AM - 8:00 PM"
    },
    phone: "(555) 123-4567",
    email: "info@fitflow.com"
  };

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Simply book a free consultation where we'll discuss your goals, assess your current fitness level, and recommend the best program for you."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a positive attitude! All equipment is provided."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "Yes! All programs include nutrition guidance, meal planning support, and dietary recommendations tailored to your goals."
    },
    {
      question: "Can I train if I'm a complete beginner?",
      answer: "Absolutely! Our programs are designed for all fitness levels. We'll start at your current level and progress safely."
    },
    {
      question: "What if I have past injuries?",
      answer: "We work with many clients who have previous injuries. We'll modify exercises as needed and work around any limitations safely."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Life?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch today to start your fitness journey. Free consultation available to discuss your goals and find the perfect program for you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach out - I'm here to help you succeed!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-lift bg-white border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {method.title}
                  </CardTitle>
                  <p className="text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                    <a href={method.link}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Location & Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gym Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Visit Our Studio</h2>
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">📍 Location</h3>
                    <p className="text-gray-600">{gymInfo.address}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">🕒 Hours</h3>
                    <p className="text-gray-600">{gymInfo.hours.weekdays}</p>
                    <p className="text-gray-600">{gymInfo.hours.weekends}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-primary text-lg mb-2">📞 Contact</h3>
                    <p className="text-gray-600">Phone: {gymInfo.phone}</p>
                    <p className="text-gray-600">Email: {gymInfo.email}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">Embedded Google Maps would go here</p>
                  <p className="text-sm text-accent">{gymInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our training programs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary text-lg mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    A: {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Free Consultation Available
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Not sure which program is right for you? Book a free 30-minute consultation to discuss your goals and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4">
              <a href="tel:+15551234567">Call (555) 123-4567</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
              <a href="mailto:info@fitflow.com?subject=Free Consultation Request">Email for Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
