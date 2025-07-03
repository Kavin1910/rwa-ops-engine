
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadCapabilities = () => {
    const link = document.createElement('a');
    link.href = '/capability_deck.pptx';
    link.download = 'OPSWORKS_Capabilities_Deck.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Operational Excellence for Real-World Asset Funds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            We specialize in back-office operations for on-chain and traditional RWA funds — 
            delivering precision, transparency, and scale from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-2 border-white" asChild>
              <Link to="/contact" className="flex items-center">
                <ArrowRight className="mr-2" size={20} />
                Book a Consultation
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
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Our Mission:</h2>
            <p className="text-lg text-blue-100">
              Bringing institutional-grade operations to the forefront of tokenized finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
