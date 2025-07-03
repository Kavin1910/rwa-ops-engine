
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WhoWeSupport from '@/components/home/WhoWeSupport';
import CoreServices from '@/components/home/CoreServices';
import USPs from '@/components/home/USPs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const handleDownloadCapabilities = () => {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/your-username/your-repo/main/capability_deck.pptx';
    link.download = 'OPSWORKS_Capabilities_Deck.pptx';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <HeroSection />
      <WhoWeSupport />
      <div id="core-services">
        <CoreServices />
      </div>
      <USPs />
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Fund Operations?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the leading RWA funds that trust OPSWORKS for their operational excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-2 border-white" asChild>
              <Link to="/contact" className="flex items-center">
                <ArrowRight className="mr-2" size={20} />
                Schedule a Consultation
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900"
              onClick={handleDownloadCapabilities}
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
