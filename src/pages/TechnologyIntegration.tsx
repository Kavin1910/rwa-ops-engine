
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog, Shield, Link, ArrowRight } from 'lucide-react';

const TechnologyIntegration = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Technology Integration</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Blockchain API integration for tokenized assets
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                Successful tokenization requires cohesive integration across blockchain layers, custody services, and legacy financial systems. Back-office support providers are uniquely positioned to build this integrated ecosystem with reliable APIs, modular infrastructures, and secure custody interfaces.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Core Integration Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Blockchain Infrastructure & Smart Contracts</h3>
                  <p className="text-gray-600">
                    Partnering with different protocols enables issuance of tokenized securities backed by compliance logic—such as whitelisting, freezing, and programmable roles—right at the protocol level.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Institutional-Grade Custody Integration</h3>
                  <p className="text-gray-600">
                    Integrating multi-signature wallets, MPC frameworks, and regulated custodial services creates secure storage and seamless signing/settlement workflows.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">APIs & Middleware for Traditional Systems</h3>
                  <p className="text-gray-600">
                    Using platforms, we implement standardized APIs and SDKs to bridge your fund accounting, ERP, CRM, and investor portals with blockchain functionality.
                  </p>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Compliance & Security Integration</h3>
                  <p className="text-gray-600">
                    Incorporate KYC/AML tooling directly into issuance flows via middleware that enforces regulatory checks before token transfer, aligned with GDPR, MiCA, and other standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Why Integration Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Cog className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Operational Efficiency</h3>
                    <p className="text-gray-600">Streamlines processes with end-to-end automation—issuance, custody, reconciliation, reporting—reducing manual intervention and errors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Institutional Confidence</h3>
                    <p className="text-gray-600">Enables auditability, permissioned transactions, regulatory control, and custody standards expected by banks and asset managers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Link className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Scalable Token Lifecycle</h3>
                    <p className="text-gray-600">Modular tech stacks adapt to new assets or jurisdictions without changing core systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Future-Proof Architecture</h3>
                    <p className="text-gray-600">Interoperability via on-chain bridges and cross-chain standards ensures adaptability to emerging protocols.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Integration Services We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Blockchain Network Deployment</h3>
                    <p className="text-gray-600">Support for permissioned, compliant chains.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Custody & Settlement Onboarding</h3>
                    <p className="text-gray-600">Technical setup for regulated custodians and wallet providers, multi-sig and MPC policies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">API & Data Orchestration</h3>
                    <p className="text-gray-600">Real-time data feeds from on-chain networks into ledger, ERP and investor systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Contract Compliance Wrappers</h3>
                    <p className="text-gray-600">Templates that enforce KYC/AML, transfer limits, regional constraints, and corporate actions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Audit & Security Oversight</h3>
                    <p className="text-gray-600">Routine contract audits, SOC 2 integration, log ingestion, and digital asset enterprise monitoring.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Seamless Technology Integration</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Build a robust, scalable technology foundation for your tokenization platform with our comprehensive integration services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Integration
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

export default TechnologyIntegration;
