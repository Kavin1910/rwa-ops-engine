
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const USPs = () => {
  const usps = [
    {
      title: 'Investor Onboarding & KYC',
      description: 'Workflows + oversight to ensure compliance.',
      badge: 'KYC/AML'
    },
    {
      title: 'Transaction & Settlement Support',
      description: 'Smooth execution and reconciliation across chains and traditional financial services providers.',
      badge: 'Multi-Chain'
    },
    {
      title: 'Fund Administration & Reporting',
      description: 'NAV calculations, investor reports, and dashboards.',
      badge: 'Real-Time'
    },
    {
      title: 'Investor Relations Ops',
      description: 'Communication, updates, and servicing to improve retention and trust.',
      badge: 'Global Support'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We act as the operational backbone of RWA tokenization platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
