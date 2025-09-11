import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Workflow, Calendar, CheckCircle } from 'lucide-react';

const SubscriptionRedemption = () => {
  const services = [
    {
      icon: Shield,
      title: 'Secure Collection and Processing of Investor Capital',
      description: 'We manage the end-to-end intake of investor capital with security, compliance, and operational accuracy.',
      details: [
        'Collect capital via bank transfers, stablecoins, or other approved rails',
        'Perform compliance checks (AML, source of funds validation) before processing',
        'Reconcile incoming payments against investor subscription instructions',
        'Maintain a clear audit trail for regulators and fund administrators',
        'Provide real-time reporting on subscription inflows'
      ],
      value: [
        'Investor trust with transparent & secure handling of funds',
        'Minimized risk of misallocations or delays',
        'Automated reconciliation reduces manual errors'
      ]
    },
    {
      icon: Workflow,
      title: 'Fund Subscription Flow Execution',
      description: 'We streamline the entire subscription process, ensuring accuracy and timely execution across multiple investor types.',
      details: [
        'Manage the end-to-end workflow from investor commitment → KYC clearance → capital confirmation → fund unit allocation',
        'Provide status visibility to investors (pending, processed, confirmed)',
        'Coordinate with fund administrators and custodians to ensure correct allocations',
        'Handle exceptions, corrections, and last-mile investor communications'
      ],
      value: [
        'Faster onboarding of committed capital into active investments',
        'Improved investor experience with real-time status updates',
        'Reduced back-office workload for fund managers'
      ]
    },
    {
      icon: Calendar,
      title: 'Redemption and Pay-out Scheduling',
      description: 'We ensure smooth, compliant, and timely redemptions for investors across global markets.',
      details: [
        'Accept and validate investor redemption requests',
        'Schedule and process payouts in fiat or digital assets, aligned with fund policies',
        'Ensure liquidity checks and compliance reviews before disbursement',
        'Provide investor notifications & confirmations of redemption execution',
        'Maintain a transparent log of all redemptions for audit and compliance'
      ],
      value: [
        'Predictable and timely payouts → stronger investor trust',
        'Reduced operational and liquidity risks',
        'Transparent redemption reporting for investors and regulators'
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Subscription & Redemption</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Efficient, transparent, and compliant handling of investor capital flows — from subscription to redemption.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <service.icon className="text-blue-600" size={32} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Value:</h4>
                      <ul className="space-y-2">
                        {service.value.map((val, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" size={16} />
                            <span className="text-gray-600">{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <service.icon size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title.split(' ').slice(0, 3).join(' ')}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Professional, secure, and compliant handling of your most critical investor touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-20 bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Capital Flow Management</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              OPSworks ensures that subscriptions and redemptions — the most sensitive investor touchpoints — are handled with security, compliance, and operational excellence, allowing asset managers and platforms to focus on growth instead of back-office complexities.
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

export default SubscriptionRedemption;