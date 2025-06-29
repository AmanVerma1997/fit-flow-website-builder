
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FitFlow</span>
            </div>
            <p className="text-blue-100">
              Professional personal training with proven results. Transform your body and life with expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/programs" className="text-blue-100 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/transformations" className="text-blue-100 hover:text-white transition-colors">Transformations</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
              <li>Online Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-blue-100">
              <p>📧 info@fitflow.com</p>
              <p>📱 (555) 123-4567</p>
              <p>📍 123 Fitness St, City, State</p>
            </div>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Book Training
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 FitFlow. All rights reserved. | Professional Personal Training Services</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
