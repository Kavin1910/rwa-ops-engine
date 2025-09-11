import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, FileText, TrendingUp, DollarSign, HeadphonesIcon, UsersIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Investor Onboarding & KYC',
      description: 'Manual & automated onboarding support, partner integrations, whitelist management and status tracking',
      link: '/investor-services'
    },
    {
      icon: DollarSign,
      title: 'Subscription and Redemption',
      description: 'Secure collection and processing of investor capital, fund subscription flow execution, redemption and pay-out scheduling',
      link: '/subscription-redemption'
    },
    {
      icon: FileText,
      title: 'Data, Reporting & Audit Readiness',
      description: 'NAV updates, yield logs, investor dashboards, periodic compliance reports, spreadsheet delivery, fund admin coordination',
      link: '/financial-reporting'
    },
    {
      icon: TrendingUp,
      title: 'Finance & Accounting Services',
      description: 'Accounts Payable (AP), Accounts Receivable (AR), banking transactions & reconciliation, payroll & employee expenses, financial statements & reporting',
      link: '/financial-accounting'
    },
    {
      icon: HeadphonesIcon,
      title: 'Investor Relations & Front Desk Support',
      description: 'Multilingual Tier 1 support, FAQs and documentation support, SLA-driven investor query resolution, global time zone coverage',
      link: '/investor-relations'
    },
    {
      icon: UsersIcon,
      title: 'Staff Augmentation',
      description: 'Technology staff augmentation, business & operations augmentation, specialized staff augmentation',
      link: '/staff-augmentation'
    }
  ];

  const valueProps = [
    {
      feature: 'Built for RWA Tokenization',
      advantage: 'Native to the nuances of real-world assets and blockchain'
    },
    {
      feature: 'Full Ops Coverage',
      advantage: 'From onboarding to audit readiness — all covered'
    },
    {
      feature: 'Fast Setup',
      advantage: 'Deployed in 72 hours; zero internal hiring needed'
    },
    {
      feature: 'Tech-Agnostic',
      advantage: 'Works across Ethereum & others'
    },
    {
      feature: 'Human + Process Layer',
      advantage: 'Real teams with operational SOPs, not just tools'
    }
  ];

  const engagementModels = [
    {
      plan: 'Launch Pod',
      bestFor: 'MVPs, early-stage protocols',
      includes: 'KYC, docs, investor onboarding'
    },
    {
      plan: 'Growth Ops',
      bestFor: 'Scaling platforms',
      includes: 'Dedicated ops + Support'
    },
    {
      plan: 'Institutional Ops Desk',
      bestFor: 'Regulated issuers, funds',
      includes: 'Full-service fund ops, SLA support, analytics'
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Each service is modular — you can engage with us for a specific function or a full operations team.
          </p>
        </div>
      </div>

      {/* Core Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Value Proposition</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900">OPSworks Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {valueProps.map((prop, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-6 font-medium text-gray-900">{prop.feature}</td>
                        <td className="py-4 px-6 text-gray-600">{prop.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                    Kick-off & Process Mapping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Intake your platform, fund, or protocol requirements</li>
                    <li>• Build tailored SOPs and compliance flows</li>
                    <li>• Assign a dedicated ops team</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                    Ops Execution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Handle daily investor, compliance, and token flows</li>
                    <li>• Coordinate with different teams</li>
                    <li>• Track KPIs and SLA performance weekly</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                    Scale and Optimize
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Add more asset classes, investor types, or jurisdictions</li>
                    <li>• Improve processes with automation/AI</li>
                    <li>• Transition from MVP to Institutional Grade</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Engagement Models */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">{model.plan}</CardTitle>
                    <p className="text-gray-600">{model.bestFor}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{model.includes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Operations?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us handle your operational complexity while you focus on growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
                <Link to="/contact">Schedule a Discovery Call</Link>
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

export default Services;