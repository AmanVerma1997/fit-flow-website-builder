
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">G</span>
              </div>
              <span className="text-lg md:text-xl font-bold">GYMAHOLIC</span>
            </div>
            <p className="text-blue-100 text-sm md:text-base">
              Professional personal training in Chandigarh with proven results. Transform your body and life with expert guidance from Ajay Verma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base">Home</Link></li>
              <li><Link to="/programs" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base">Programs</Link></li>
              <li><Link to="/transformations" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base">Transformations</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors text-sm md:text-base">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100 text-sm md:text-base">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
              <li>Diet Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get in Touch</h3>
            <div className="space-y-2 text-blue-100 text-sm md:text-base">
              <p>📧 trainerajayverma10@gmail.com</p>
              <p>📱 +91 7973848128</p>
              <p>📍 Gymaholic Wellness Studio, Shanti Nagar Manimajra, Chandigarh</p>
              <p>📸 @gymaholic_wellness_studio</p>
            </div>
            <div className="mt-4">
              <a
                href="https://wa.me/917973848128?text=Hi%20Ajay,%20I'm%20interested%20in%20your%20fitness%20programs%20and%20would%20like%20to%20book%20a%20training%20session."
                className="inline-block bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                Book Training
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-blue-100 text-xs md:text-sm">
          <p>&copy; 2024 GYMAHOLIC. All rights reserved. | Professional Personal Training Services in Chandigarh by Ajay Verma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
