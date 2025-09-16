
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Clock, TrendingUp, ArrowRight } from 'lucide-react';

const InvestorServices = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Investor Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            End-to-end investor onboarding and compliance framework for tokenized assets
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                As tokenization of real-world assets from real estate to private equity expands globally, RWA issuers must attract and retain investors seamlessly. Back-office support firms play a critical role by offering comprehensive Investor Services that ensure compliance, transparency, and a superior investor experience.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Core Investor Services Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Investor Onboarding & KYC/AML Compliance</h3>
                  <p className="text-gray-600">
                    Automate identity verification, AML screening, and accreditation checks. Integrate Know Your Customer (KYC) flows directly into token issuance pipelines to ensure regulatory adherence.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Investor Relations & Reporting</h3>
                  <p className="text-gray-600">
                    Provide investor dashboards featuring real-time token holdings, valuations, distributions, and performance analytics. Offer automated reporting to satisfy regulatory, tax, and investor needs.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Subscription & Redemption Management</h3>
                  <p className="text-gray-600">
                    Manage capital subscriptions, token issuance, transfers, and redemptions efficiently. Support 24/7 settlement through seamless integration between smart contracts and fund systems.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Dividend & Distribution Execution</h3>
                  <p className="text-gray-600">
                    Implement automated smart-contract-driven processes to distribute interest, dividends, or proceeds to token holders according to predefined terms.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Secure Custody & Transfer Agent Services</h3>
                  <p className="text-gray-600">
                    Partner with regulated custodians and transfer agents to ensure institutional-grade custody, multi-signature controls, compliance, and accurate ownership records.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Investor Support & Communication</h3>
                  <p className="text-gray-600">
                    Facilitate ongoing investor inquiries, provide onboarding assistance, share updates, and maintain transparent communications to build trust and boost retention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Why These Services Matter for RWA Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Frictionless Investor Access</h3>
                    <p className="text-gray-600">Tokenization democratizes access to traditionally illiquid assets, but seamless onboarding ensures both retail and institutional participation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Regulatory Assurance</h3>
                    <p className="text-gray-600">Investor-facing processes must comply with securities laws (e.g. SEC in the U.S., EU regulations) to ensure tokenized offerings are legally sound.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Liquidity Support</h3>
                    <p className="text-gray-600">Tokenized assets enable round-the-clock settlement—investor systems must facilitate continuous subscriptions, transfers, and redemptions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Enhanced Transparency & Trust</h3>
                    <p className="text-gray-600">Investor dashboards and immutable records help monitor asset performance and distributions, reducing risk and increasing confidence.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Investor Services?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Transform your RWA platform with comprehensive investor services that build trust, ensure compliance, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a 
                  href="/case-studies" 
                  className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Case Studies
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InvestorServices;
