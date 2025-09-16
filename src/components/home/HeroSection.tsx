
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCapabilities = () => {
    const link = document.createElement('a');
    link.href = '/Capability Deck - OpsWorks LLC.pdf';
    link.download = 'Capability Deck - OpsWorks LLC.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ops-as-a-Service for Tokenized Asset Platforms
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            We are your dedicated frontend operations team for RWA tokenization platforms. From investor onboarding to compliance workflows, OPSworks powers smooth, scalable, and secure non-technical operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-2 border-white" asChild>
              <Link to="/contact" className="flex items-center">
                <ArrowRight className="mr-2" size={20} />
                Schedule a Discovery Call
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900"
              onClick={handleDownloadCapabilities}
            >
              <Download className="mr-2" size={20} />
              Download Capabilities Deck
            </Button>
            <Button size="lg" className="bg-blue-700 border-2 border-blue-600 text-white hover:bg-blue-600" asChild>
              <Link to="/contact" className="flex items-center">
                Contact Us
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
