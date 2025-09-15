import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart3, FileText, Table, Users2, CheckCircle } from 'lucide-react';

const DataReporting = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'NAV Updates, Yield Logs, and Investor Dashboards',
      description: 'We provide investors and managers with clear, real-time visibility into fund performance.',
      details: [
        'Deliver accurate Net Asset Value (NAV) updates on a periodic or on-demand basis',
        'Maintain yield and distribution logs for transparent investor tracking',
        'Build and manage investor dashboards that present holdings, subscriptions, redemptions, and performance metrics',
        'Ensure performance data is synchronized across platforms and investor communications'
      ],
      value: [
        'Increased investor trust through transparent reporting',
        'Reduced data inconsistencies across systems',
        'Enhanced investor experience with self-service dashboards'
      ]
    },
    {
      icon: FileText,
      title: 'Periodic Compliance and Investor Activity Reports',
      description: 'We ensure that both investors and regulators receive timely and accurate reporting.',
      details: [
        'Generate monthly/quarterly/annual compliance reports as per fund policies',
        'Maintain activity logs of subscriptions, redemptions, and payouts',
        'Provide AML and transaction monitoring summaries for compliance teams'
      ],
      value: [
        'Stronger compliance posture',
        'Reduced reporting burden for internal teams',
        'Readiness for regulatory reviews and investor audits'
      ]
    },
    {
      icon: Table,
      title: 'Spreadsheet Delivery',
      description: 'We meet fund managers where they are, ensuring compatibility with existing workflows.',
      details: [
        'Deliver reconciled data in spreadsheet-friendly formats (Excel/CSV)',
        'Provide structured data sets for fund admins, compliance officers, and auditors',
        'Maintain version-controlled, tamper-proof records to support cross-team collaboration',
        'Enable rapid data exports for ad-hoc requests and investor queries'
      ],
      value: [
        'Flexible, low-friction reporting format',
        'Compatible with fund admin and back-office workflows',
        'Reduced manual data wrangling'
      ]
    },
    {
      icon: Users2,
      title: 'Fund Admin Coordination (NAV, Performance)',
      description: 'We act as the operational bridge between your platform and fund administrators.',
      details: [
        'Coordinate with fund administrators to reconcile NAV, fees, and performance data',
        'Ensure timely submission and approval of valuation data',
        'Handle queries, corrections, and exception management with fund admins',
        'Provide a single source of truth for all performance reporting'
      ],
      value: [
        'Accurate NAV and performance validation',
        'Reduced back-and-forth with fund admins',
        'Clear audit trail across performance and valuation processes'
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Data, Reporting & Audit Readiness</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Transparent, accurate, and audit-ready reporting to support fund managers, platforms, and investors with reliable insights and compliance confidence.
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

          {/* Summary Section */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Data & Reporting Excellence</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              OPSworks transforms data management, reporting, and audit readiness into a seamless, investor-friendly process. From NAV updates to compliance logs, we ensure that your fund remains transparent, regulator-ready, and trusted by investors.
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

export default DataReporting;