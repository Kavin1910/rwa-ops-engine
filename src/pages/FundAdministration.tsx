
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';

const FundAdministration = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Fund Administration</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tailored Back‑Office Support for RWA Tokenization
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                As RWA (Real‑World Asset) tokenization gains momentum—evidenced by institutional pioneers launching tokenized money market funds robust fund administration becomes essential. Back‑office support firms are uniquely positioned to help RWA platforms by bridging traditional fund operations and the new tokenized frontier.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">What Fund Administration Encompasses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Fund administration covers essential back‑office operations that form the backbone of any investment vehicle, including:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">NAV Calculation & Reconciliation</h3>
                    <p className="text-gray-600">Accurate valuation of tokenized assets and alignment with custodian records.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Financial Reporting</h3>
                    <p className="text-gray-600">Periodic delivery of investor statements and reports.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Cash Flow Management</h3>
                    <p className="text-gray-600">Handling capital calls, distributions, and expense settlement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                    <p className="text-gray-600">Ensuring alignment with jurisdictional requirements and fund documentation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Investor Communications</h3>
                    <p className="text-gray-600">Managing onboarding, documentation, and disclosures.</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mt-6">
                For RWA tokenization, these tools must integrate traditional operations with blockchain-enabled structures.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Why Back‑Office Support Matters for Tokenized Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Real-time NAV & Settlement</h3>
                    <p className="text-gray-600">Tokenized funds enable 24/7 market access and atomic settlement. Admin providers must adapt to continuous asset valuations and settlement processes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Seamless Integration with Custody & Compliance</h3>
                    <p className="text-gray-600">Administrators must connect with licensed custodians and implement robust KYC/AML processes, ensuring trust and legal compliance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Audit‑Ready Transparency</h3>
                    <p className="text-gray-600">Blockchain offers immutable audit trails, but fund administrators provide the structured reporting and reconciliation verifications necessary for institutional scrutiny.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Lifecycle Support for SPVs & Token Vehicles</h3>
                    <p className="text-gray-600">Admin firms handle SPV accounting, investor management, and on-chain/off-chain asset structuring—critical for sophisticated RWA setups.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">How Back‑Office Providers Drive Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Hybrid Infrastructure Setup</h3>
                  <p className="text-gray-600">
                    Bridge legacy systems (fund accounting, NAV engines) with blockchain tech—enabling dual‑ledger reconciliation and transparency.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Automated NAV & Transaction Processing</h3>
                  <p className="text-gray-600">
                    Deploy smart‑contract integration for continuous asset valuation and reconcile on‑chain activity with off‑chain fund records.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Integrated Compliance Operations</h3>
                  <p className="text-gray-600">
                    Embed automated KYC/AML checks, investor accreditation, and ongoing monitoring into reporting workflows.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Investor & Admin Reporting</h3>
                  <p className="text-gray-600">
                    Deliver compliance-ready statements aligned with both financial and blockchain audit requirements.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Risk & Security Oversight</h3>
                  <p className="text-gray-600">
                    Implement support for secure custody (multi-signature, MPC, third-party custodians), fraud prevention, and cybersecurity governance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Fund Administration Solutions</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Bridge traditional fund operations with tokenized asset innovation through our specialized back-office support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FundAdministration;
