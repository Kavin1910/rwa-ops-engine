import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, Clock, Globe, CheckCircle } from 'lucide-react';

const InvestorRelations = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Multilingual Tier 1 Support (Chat/Email/Ticket)',
      description: 'We provide responsive first-line investor support across multiple communication channels.',
      details: [
        'Offer chat, email, and ticket-based support tailored to your platform',
        'Provide multilingual assistance to engage global investors seamlessly',
        'Log, categorize, and route tickets for escalation when required',
        'Ensure Tier 1 support resolves FAQs, onboarding queries, and basic transactional assistance'
      ],
      value: [
        'Increased investor satisfaction through accessible, human support',
        'Faster response times via structured Tier 1 workflows',
        'Consistent service experience across languages & region'
      ]
    },
    {
      icon: FileText,
      title: 'FAQs, Documentation Support',
      description: 'We build and maintain clear, investor-friendly resources to reduce friction and repetitive queries.',
      details: [
        'Draft and update FAQs, onboarding guides, and investor manuals',
        'Create step-by-step process documentation for subscriptions, redemptions, dashboards, etc.',
        'Maintain knowledge bases that align with compliance requirements',
        'Support self-service through clear, accessible investor materials'
      ],
      value: [
        'Reduced support volume with strong self-service resources',
        'Improved investor confidence and transparency',
        'Consistent communication aligned with brand & compliance'
      ]
    },
    {
      icon: Clock,
      title: 'SLA-Driven Investor Query Resolution',
      description: 'We enforce strict service levels to ensure timely, reliable investor communication.',
      details: [
        'Define response and resolution SLAs aligned with your investor expectations',
        'Track query resolution performance with dashboards and metrics',
        'Escalate sensitive or high-priority queries to compliance or fund managers quickly',
        'Provide periodic SLA performance reports for transparency'
      ],
      value: [
        'Predictable, measurable investor service standards',
        'Reduced escalation risk through proactive tracking',
        'Improved investor trust via consistent responsiveness'
      ]
    },
    {
      icon: Globe,
      title: 'Global Time Zone Coverage',
      description: 'We ensure investor queries are addressed regardless of geography.',
      details: [
        'Operate multi-shift coverage models to provide global support',
        'Assign dedicated regional teams for local time zones when required',
        'Provide flexible support aligned with fund geography and investor distribution',
        'Coordinate with compliance/legal where region-specific rules apply'
      ],
      value: [
        '24/7 investor availability for critical queries',
        'No time zone barriers for global investor base',
        'Enhanced accessibility for international growth'
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Investor Relations & Front Desk Support</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Delivering a world-class investor experience through multilingual, responsive, and compliant support across every channel. OPSworks acts as the frontline extension of your fund or platform, ensuring every investor query is handled with professionalism and care.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{detail}</span>
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
                          <span className="text-gray-600 text-sm">{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <MessageSquare className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Channel Support</h3>
              <p className="text-gray-600 text-sm">Chat, email, and ticketing systems</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <Globe className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">24/7 support across time zones</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <Clock className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-gray-900 mb-2">SLA Compliance</h3>
              <p className="text-gray-600 text-sm">Guaranteed response times</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <FileText className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive self-service resources</p>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">World-Class Investor Experience</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              OPSworks transforms investor relations into a scalable, multilingual, and SLA-driven experience — ensuring investors feel supported, informed, and confident at every step of their journey.
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

export default InvestorRelations;