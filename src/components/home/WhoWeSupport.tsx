
import { Card, CardContent } from '@/components/ui/card';
import { Building2, TrendingUp, Home, Users } from 'lucide-react';

const WhoWeSupport = () => {
  const clientTypes = [
    {
      icon: TrendingUp,
      title: 'Tokenized Treasury Managers',
      description: 'Supporting digital asset managers in tokenizing traditional treasury instruments'
    },
    {
      icon: Building2,
      title: 'Private Credit Funds',
      description: 'Comprehensive operations for alternative lending and credit investment strategies'
    },
    {
      icon: Home,
      title: 'Real Estate & Infrastructure Issuers',
      description: 'Specialized support for tokenized real estate and infrastructure investments'
    },
    {
      icon: Users,
      title: 'DAO Treasury Teams',
      description: 'Operational excellence for decentralized autonomous organization treasuries'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve the full spectrum of RWA fund managers and tokenized asset issuers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <client.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupport;
