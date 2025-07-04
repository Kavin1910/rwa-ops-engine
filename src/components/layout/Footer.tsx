
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/29678352-e40b-4368-ba50-48f3259dcfe7.png" 
              alt="OPSWORKS" 
              className="h-12 mb-4 filter invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Bringing institutional-grade operations to the forefront of tokenized finance.
              Specialized back-office operations for on-chain and traditional RWA funds.
            </p>
            <div className="space-y-2 mb-6">
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
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/opsworks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/opsworks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/opsworks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://pinterest.com/opsworks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.373 18.627.001 12.001.001z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('core-services')} className="hover:text-white text-left">Fund Administration</button></li>
              <li><button onClick={() => scrollToSection('core-services')} className="hover:text-white text-left">Fund Accounting</button></li>
              <li><button onClick={() => scrollToSection('core-services')} className="hover:text-white text-left">Compliance & Reporting</button></li>
              <li><button onClick={() => scrollToSection('core-services')} className="hover:text-white text-left">Investor Services</button></li>
              <li><button onClick={() => scrollToSection('core-services')} className="hover:text-white text-left">Technology Solutions</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white" onClick={scrollToTop}>Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white" onClick={scrollToTop}>Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white" onClick={scrollToTop}>Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white" onClick={scrollToTop}>Privacy Policy</Link></li>
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
