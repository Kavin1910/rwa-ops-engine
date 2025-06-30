
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Specialized Expertise',
      description: 'Decades of combined experience in fund administration, trade settlement, NAV calculation, and investor onboarding.'
    },
    {
      icon: Award,
      title: 'Technology-Driven',
      description: 'We leverage industry-leading platforms to streamline operations and improve data accuracy.'
    },
    {
      icon: Users,
      title: 'Global Standards, Boutique Attention',
      description: 'We offer institutional-grade processes with the flexibility and responsiveness of a boutique partner.'
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About OPSWORKS</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A Trusted Ops Partner for the RWA Frontier
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are a team of fund operations experts, accountants, and former fund administrators 
                  with decades of combined experience in traditional finance, now operating at the edge 
                  of tokenized assets and DeFi.
                </p>
                <p>
                  Our mission is simple: help RWA-focused funds and protocols build operational scale 
                  and credibility without sacrificing agility.
                </p>
                <p>
                  At OPSWORKS, we specialize in powering the operational engine behind investment fund 
                  managers. Our mission is to enable asset managers, private equity firms, venture capital 
                  funds, and family offices to focus on performance, while we ensure precision, compliance, 
                  and efficiency in the background.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-6">
                With deep expertise in fund accounting, investor services, compliance reporting, 
                and technology integration, we offer end-to-end backend solutions tailored for 
                both traditional and alternative investment funds.
              </p>
              <p className="text-gray-600">
                Our team ensures your fund operations are seamless, audit-ready, and scalable.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the growing number of RWA funds that trust OPSWORKS for their operational excellence. 
              Let's discuss how we can support your fund's growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                Schedule a Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md font-medium transition-colors">
                Download Capabilities Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
