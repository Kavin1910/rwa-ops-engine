import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Link2, CheckCircle2, CheckCircle } from 'lucide-react';

const InvestorOnboarding = () => {
  const services = [
    {
      icon: Users,
      title: 'Manual & Automated Onboarding Support',
      description: 'We handle the heavy lifting of investor onboarding, ensuring a smooth experience for both retail and institutional clients.',
      details: [
        'Support across both manual reviews (complex cases, high-risk profiles)',
        'Form-fill assistance and investor guidance for high-net-worth and global clients',
        'Ensure full compliance with KYC/AML standards while reducing friction',
        'Handle exceptions and escalate only flagged cases to compliance teams'
      ],
      value: [
        'Faster onboarding → reduced drop-offs',
        'Compliance-first → minimizes regulatory risk',
        'Hybrid approach → automation efficiency + human oversight'
      ]
    },
    {
      icon: Link2,
      title: 'Partner Integrations',
      description: 'We integrate seamlessly with your preferred KYC, AML, and identity vendors so you don\'t have to manage multiple systems.',
      details: [
        'Connect with leading vendors',
        'API-driven integrations for document verification and AML checks',
        'Ensure data consistency between your CRM, investor portal, and compliance stack',
        'Provide vendor management & monitoring so your team can focus on growth'
      ],
      value: [
        'Plug-and-play compliance stack',
        'Scalable integrations → future-proof growth',
        'Lower operational overhead for fund managers'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Whitelist Management & Status Tracking',
      description: 'We maintain accurate, real-time investor status to ensure only approved investors can participate in tokenized offerings.',
      details: [
        'Maintain an active whitelist directly linked to your smart contracts',
        'Track investor status (Pending → Under Review → Approved → Rejected)',
        'Automate updates when KYC/AML verification is complete',
        'Provide real-time dashboards & alerts for investor status changes',
        'Secure handling of updates in compliance with regulatory standards'
      ],
      value: [
        'Prevent unauthorized participation',
        'Transparent audit trail for regulators & auditors',
        'Real-time investor visibility for operations teams'
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Investor Onboarding & KYC</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Seamless, compliant, and scalable onboarding solutions purpose-built for digital investment platforms and tokenized assets.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Value:</h4>
                    <ul className="space-y-3">
                      {service.value.map((val, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
                          <span className="text-gray-600">{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Onboarding Excellence</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              With OPSworks handling Investor Onboarding & KYC, asset managers and digital platforms can launch faster, onboard globally, and remain compliant—without building a large in-house compliance operations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestorOnboarding;