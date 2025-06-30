
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const USPs = () => {
  const usps = [
    {
      title: 'End-to-End Fund Operations Platform',
      description: 'We provide full-spectrum backend services—from fund accounting to investor reporting—under one roof, reducing operational complexity and dependency.',
      badge: 'Complete Solution'
    },
    {
      title: 'Dedicated Investor Servicing Desk',
      description: 'White-glove investor support with real-time query resolution, capital call execution, and personalized reporting portals.',
      badge: 'Premium Support'
    },
    {
      title: 'Compliance and Regulatory Expertise',
      description: 'In-depth knowledge of global fund regulations—SEC, FATCA, CRS, AIFMD, SEBI—with automated compliance monitoring and filings.',
      badge: 'Global Compliance'
    },
    {
      title: 'Zero Error Tolerance Policy',
      description: 'Our Six Sigma-inspired quality control framework ensures 99.99% accuracy across fund operations, NAVs, and investor reports.',
      badge: '99.99% Accuracy'
    },
    {
      title: 'Seamless Onboarding & Migration',
      description: 'Proprietary migration tools and onboarding playbooks ensure a smooth transition from your current administrator with no downtime.',
      badge: 'Zero Downtime'
    },
    {
      title: 'Global Support Model',
      description: 'Follow-the-sun service model across US, Europe, and Asia time zones—your operations never sleep, and neither do we.',
      badge: '24/7 Support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose OPSWORKS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique value propositions that set us apart in the RWA operations landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {usp.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{usp.title}</h3>
                <p className="text-gray-600 leading-relaxed">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPs;
