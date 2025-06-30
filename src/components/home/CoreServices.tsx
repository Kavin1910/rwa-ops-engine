
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Calculator, Shield, FileText, DollarSign, Users, Zap } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Daily NAV Calculation',
      description: 'Precise net asset value computation with real-time market data integration'
    },
    {
      icon: Shield,
      title: 'Custody Reconciliation',
      description: 'Comprehensive asset reconciliation across multiple custodians and platforms'
    },
    {
      icon: FileText,
      title: 'Investor Reporting',
      description: 'Professional-grade reports with customizable dashboards and analytics'
    },
    {
      icon: DollarSign,
      title: 'Capital Calls & Distributions',
      description: 'Automated capital management and investor distribution workflows'
    },
    {
      icon: CheckCircle,
      title: 'Compliance & Regulatory Reporting',
      description: 'Full regulatory compliance across global jurisdictions and frameworks'
    },
    {
      icon: Zap,
      title: 'Audit Support',
      description: 'Comprehensive audit preparation and coordination with external auditors'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end operational support designed specifically for RWA funds and tokenized assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
