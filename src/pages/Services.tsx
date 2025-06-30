
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Services = () => {
  const fundAdminServices = [
    'Net Asset Value (NAV) Calculation: Daily, weekly, or monthly NAV computation based on asset valuation',
    'Investor Accounting: Tracking individual investor contributions, redemptions, and returns',
    'Fee Calculations: Management fees, performance fees (carried interest), and other expenses',
    'Capital Calls and Distributions: Managing capital inflows and returns to investors'
  ];

  const fundAccountingServices = [
    'General Ledger Maintenance: Recording of all financial transactions',
    'Expense Allocation: Allocation of fund-level expenses to investors',
    'Portfolio Valuation: Mark-to-market of investments; pricing from third-party vendors',
    'Financial Statement Preparation: For quarterly and annual reports'
  ];

  const custodyServices = [
    'Asset Custody: Safekeeping of financial securities by a custodian bank',
    'Trade Settlement: Processing buy/sell transactions, coordinating with brokers and custodians',
    'Cash Management: Ensuring adequate liquidity for operations and redemptions'
  ];

  const complianceServices = [
    'KYC/AML Checks: Know-Your-Customer and Anti-Money Laundering procedures for investors',
    'Regulatory Filings: Submissions to regulators such as Form ADV, FATCA, AIF filings, etc.',
    'Limit Monitoring: Ensuring compliance with investment guidelines and concentration limits'
  ];

  const investorServices = [
    'Onboarding: Handling subscription documents, KYC, and investor due diligence',
    'Investor Communications: Sending capital call notices, NAV statements, performance reports',
    'Data Room Management: For private funds, managing a secure document-sharing platform for LPs'
  ];

  const technologyServices = [
    'Fund Accounting Software Management',
    'CRM Systems: Managing investor relationships and fundraising activities',
    'Document Management: Secure storage and retrieval of contracts, reports, legal agreements'
  ];

  const riskServices = [
    'Operational Risk Controls: Segregation of duties, audit trails',
    'Investment Risk Monitoring: Track exposure, leverage, and liquidity',
    'Cybersecurity: Protect sensitive financial and investor data'
  ];

  const taxServices = [
    'Tax Reporting: Filing of returns, preparation of investor K-1s or tax statements',
    'External Audit Coordination: Working with auditors to validate financial statements and NAVs',
    'Transfer Pricing & Withholding Tax Management'
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive operational solutions designed specifically for RWA funds and tokenized assets
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="fund-admin" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="fund-admin">Fund Admin</TabsTrigger>
              <TabsTrigger value="accounting">Accounting</TabsTrigger>
              <TabsTrigger value="custody">Custody</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="risk">Risk</TabsTrigger>
              <TabsTrigger value="tax">Tax & Audit</TabsTrigger>
            </TabsList>

            <TabsContent value="fund-admin">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Fund Administration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {fundAdminServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accounting">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Fund Accounting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {fundAccountingServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custody">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Custody and Settlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {custodyServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Compliance and Regulatory Reporting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {complianceServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investor">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Investor Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {investorServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technology">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Technology and Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {technologyServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Risk Management and Internal Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {riskServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tax">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tax and Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {taxServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
