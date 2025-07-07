import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      title: "Book Personal Training",
      description: "Schedule your 1-on-1 session with Ajay",
      action: "Call Now",
      link: "tel:+917973848128",
      icon: "📞"
    },
    {
      title: "WhatsApp Message", 
      description: "Quick questions and bookings",
      action: "Message Now",
      link: "https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20book%20a%20consultation.",
      icon: "💬"
    },
    {
      title: "Email Consultation",
      description: "Detailed program information",
      action: "Send Email",
      link: "mailto:trainwithajayverma@gmail.com?subject=Fitness%20Consultation%20Request&body=Hi%20Ajay,%0A%0AI%20am%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20know%20more%20about:%0A%0A1.%20Available%20training%20programs%0A2.%20Pricing%20details%0A3.%20Schedule%20availability%0A4.%20Nutrition%20guidance%0A%0APlease%20get%20back%20to%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you!",
      icon: "📧"
    }
  ];

  const gymInfo = {
    name: "Gymaholics Wellness Studio",
    address: "Hermitage Centralis, VIP Rd, Zirakpur, Punjab 140603",
    hours: {
      weekdays: "Monday - Friday: 6:00 AM - 10:00 PM",
      weekends: "Saturday - Sunday: 6:00 AM - 9:00 PM"
    },
    phone: "+91 7973848128",
    email: "trainwithajayverma@gmail.com",
    instagram: "@gymaholic_wellness_studio"
  };

  const faqs = [
    {
      question: "How do I get started with Ajay Verma?",
      answer: "Simply book a free consultation where Ajay will discuss your goals, assess your current fitness level, and recommend the best program for you."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a positive attitude! All equipment is provided at GYMAHOLIC."
    },
    {
      question: "Do you offer nutrition guidance?",
      answer: "Yes! Ajay is a certified dietitian and nutritionist. All programs include personalized nutrition guidance, meal planning, and dietary recommendations."
    },
    {
      question: "Can I train if I'm a complete beginner?",
      answer: "Absolutely! Ajay's programs are designed for all fitness levels. He'll start at your current level and progress safely with proper guidance."
    },
    {
      question: "What are Ajay's qualifications?",
      answer: "Ajay Verma is Gold's Gym certified trainer and a professional dietitian & nutritionist with 5+ years of experience transforming lives."
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
            Get in touch with Ajay Verma today to start your fitness journey. Free consultation available to discuss your goals and find the perfect program for you.
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
              Choose the best way to reach out - Ajay is here to help you succeed!
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
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-4 text-base">
                    <a href={method.link} className="block w-full h-full flex items-center justify-center">
                      {method.action}
                    </a>
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
                    <p className="text-gray-600">Instagram: {gymInfo.instagram}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="font-semibold">Gymaholics Wellness Studio</p>
                  <p className="text-sm">Hermitage Centralis, VIP Rd</p>
                  <p className="text-sm">Zirakpur, Punjab</p>
                  <p className="text-sm text-accent">Pincode: 140603</p>
                  <a 
                    href="https://maps.google.com/?q=Gymaholics+Wellness+Studio+Hermitage+Centralis+VIP+Rd+Zirakpur+Punjab+140603"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-accent hover:underline"
                  >
                    View on Google Maps
                  </a>
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
              Get answers to common questions about Ajay's training programs
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
            Not sure which program is right for you? Book a free 30-minute consultation with Ajay to discuss your goals and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-4">
              <a href="tel:+917973848128">Call +91 7973848128</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4">
              <a href="mailto:trainwithajayverma@gmail.com?subject=Free%20Consultation%20Request&body=Hi%20Ajay,%0A%0AI%20would%20like%20to%20book%20a%20free%20consultation%20to%20discuss%20my%20fitness%20goals.%0A%0APlease%20let%20me%20know%20your%20available%20time%20slots.%0A%0AThank%20you!" className="block w-full h-full flex items-center justify-center">
                Email for Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
