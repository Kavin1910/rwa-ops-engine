import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/29678352-e40b-4368-ba50-48f3259dcfe7.png" 
              alt="OPSWORKS" 
              className="h-12 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Bringing institutional-grade operations to the forefront of tokenized finance.
              Specialized back-office operations for on-chain and traditional RWA funds.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300">contact@opsworks.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-300">St. Louis, Missouri, United States | Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-white">Fund Administration</Link></li>
              <li><Link to="/services" className="hover:text-white">Fund Accounting</Link></li>
              <li><Link to="/services" className="hover:text-white">Compliance & Reporting</Link></li>
              <li><Link to="/services" className="hover:text-white">Investor Services</Link></li>
              <li><Link to="/services" className="hover:text-white">Technology Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 OPSWORKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
