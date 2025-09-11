
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'First-Mover Advantage',
      description: 'Purpose-built exclusively for the RWA tokenization ecosystem.'
    },
    {
      icon: Award,
      title: 'Ops-as-a-Service Model',
      description: 'Flexible, scalable operations support.'
    },
    {
      icon: Users,
      title: 'Compliance-Focused',
      description: 'Strong KYC/AML, investor onboarding, and reporting frameworks.'
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            OPSworks LLC – Pioneering Ops-as-a-Service for RWA Tokenization
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About OPSworks LLC</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  OPSworks LLC is the first dedicated Ops-as-a-Service provider purpose-built for the tokenization of Real-World Assets (RWAs). We partner with asset managers, blockchain protocols, and digital investment platforms to streamline operational workflows, reduce compliance risk, and enable rapid scale—without the cost and complexity of building a full in-house operations team.
                </p>
                <p>
                  Unlike traditional service providers, OPSworks focuses on the non-technical operations layer—the critical bridge between your technology stack and your investors. We manage the processes that ensure smooth onboarding, transaction management, reporting, and investor communications, so you can stay focused on asset growth, liquidity, and innovation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The OPSworks Advantage</h3>
              <p className="text-gray-600 mb-6">
                We act as the operational backbone of RWA tokenization platforms—the missing middle layer that connects tech infrastructure (smart contracts, custody, exchanges) with investor-facing processes (onboarding, reporting and servicing).
              </p>
              <p className="text-gray-600">
                With OPSworks, clients gain a ready-made operations team, reducing launch times, eliminating operations headaches, and unlocking faster institutional adoption.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why OPSworks?</h2>
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
