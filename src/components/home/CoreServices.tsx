
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, FileText, BarChart3, Cog } from 'lucide-react';

const CoreServices = () => {
  const services = [
    {
      icon: Users,
      title: 'Investor Onboarding & KYC',
      description: 'Manual & automated onboarding support, partner integrations, whitelist management and status tracking.',
      href: '/investor-services'
    },
    {
      icon: TrendingUp,
      title: 'Subscription & Redemption',
      description: 'Secure collection and processing of investor capital, fund subscription flow execution, redemption and pay-out scheduling.',
      href: '/subscription-redemption'
    },
    {
      icon: FileText,
      title: 'Data, Reporting & Audit Readiness',
      description: 'NAV updates, yield logs, investor dashboards, periodic compliance reports, spreadsheet delivery.',
      href: '/financial-reporting'
    },
    {
      icon: BarChart3,
      title: 'Finance & Accounting Services',
      description: 'AP/AR, banking transactions & reconciliation, payroll & employee expenses, financial statements & reporting.',
      href: '/financial-accounting'
    },
    {
      icon: Shield,
      title: 'Investor Relations & Support',
      description: 'Multilingual Tier 1 support, FAQs and documentation support, SLA-driven query resolution, global coverage.',
      href: '/investor-relations'
    },
    {
      icon: Cog,
      title: 'Staff Augmentation',
      description: 'Technology, business & operations, and specialized staff augmentation for scaling teams.',
      href: '/staff-augmentation'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is modular you can engage with us for a specific function or a full operations team
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
