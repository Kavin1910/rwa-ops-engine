
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, FileText, BarChart3, Cog } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Shield,
      title: 'Fund Administration',
      description: 'Complete back-office support including investor relations, capital calls, distributions, and regulatory reporting.',
      href: '/fund-administration'
    },
    {
      icon: TrendingUp,
      title: 'Custody Reconciliation',
      description: 'Automated reconciliation between on-chain tokens and off-chain assets with real-time monitoring and compliance.',
      href: '/custody-reconciliation'
    },
    {
      icon: Users,
      title: 'Investor Services',
      description: 'KYC/AML compliance, investor onboarding, reporting, and ongoing relationship management.',
      href: '/investor-services'
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'SEC, CFTC, and international regulatory filing support with ongoing compliance monitoring.',
      href: '/regulatory-compliance'
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'GAAP-compliant financial statements, investor reports, and performance analytics.',
      href: '/financial-reporting'
    },
    {
      icon: Cog,
      title: 'Technology Integration',
      description: 'Seamless integration with blockchain infrastructure, custody solutions, and existing systems.',
      href: '/technology-integration'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive operational support tailored for Real-World Asset tokenization platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const ServiceCard = (
              <Card className={`h-full transition-all duration-300 ${
                service.href ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : 'hover:shadow-md'
              }`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );

            return service.href ? (
              <Link key={index} to={service.href}>
                {ServiceCard}
              </Link>
            ) : (
              <div key={index}>
                {ServiceCard}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
