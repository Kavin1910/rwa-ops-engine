
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import WhoWeSupport from '@/components/home/WhoWeSupport';
import CoreServices from '@/components/home/CoreServices';
import USPs from '@/components/home/USPs';
import Testimonials from '@/components/home/Testimonials';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const handleDownloadCapabilities = () => {
    const link = document.createElement('a');
    link.href = '/Capability Deck - OpsWorks LLC.pdf';
    link.download = 'Capability Deck - OpsWorks LLC.pdf';
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
      <Testimonials />
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-gray-600">contact@opsworks.org</p>
            <p className="text-xl text-gray-600">www.opsworks.org</p>
            <p className="text-lg text-gray-600">Missouri (HQ) | Bangalore (Delivery Center)</p>
            <p className="text-lg text-gray-600">24/5 Global Support</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-900 text-white hover:bg-blue-800" asChild>
              <Link to="/contact" className="flex items-center">
                <ArrowRight className="mr-2" size={20} />
                Schedule a Discovery Call
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              onClick={handleDownloadCapabilities}
            >
              Download Capabilities Deck
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
