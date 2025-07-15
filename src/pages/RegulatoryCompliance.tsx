
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const RegulatoryCompliance = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Regulatory Compliance Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            End‑to‑end SEC, CFTC, and global token compliance services
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                In the RWA (Real‑World Asset) tokenization space, regulatory oversight is complex, multifaceted, and constantly evolving. Back‑office support firms must deliver end-to-end compliance services—from token classification and SEC/CFTC filings to international licensing and ongoing monitoring—to enable secure, scalable, and legally sound token issuance and trading.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">U.S. Regulatory Coverage: SEC & CFTC</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">SEC Filings & Securities Compliance</h3>
                  <p className="text-gray-600">
                    Comprehensive support for SEC registration, Form D filings, and ongoing securities compliance requirements for tokenized assets.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">CFTC Guidance & Commodity Regulations</h3>
                  <p className="text-gray-600">
                    Navigate CFTC requirements for commodity-based tokens and derivative instruments in the tokenization space.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Operational & Risk Compliance</h3>
                  <p className="text-gray-600">
                    Implement robust compliance frameworks covering operational risk, custody standards, and regulatory reporting requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Global Regulatory Offerings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">MiCA & EU Framework</h3>
                  <p className="text-gray-600">
                    Comprehensive support for Markets in Crypto-Assets (MiCA) regulation and EU compliance requirements for tokenized assets.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Asia, UK, Cayman & Middle East</h3>
                  <p className="text-gray-600">
                    Multi-jurisdictional compliance support across key markets including Singapore, Hong Kong, UK, Cayman Islands, and emerging Middle Eastern frameworks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Ongoing Monitoring & Compliance Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">RegTech Integration</h3>
                  <p className="text-gray-600">
                    Deploy AML/KYC automation and real-time monitoring tools to flag suspicious transactions and ensure regulatory auditability.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Smart Contract Oversight</h3>
                  <p className="text-gray-600">
                    Audit contract logic to embed transfer restrictions, whitelisting, geo-blocking, and distribution rules compliant with regulatory requirements.
                  </p>
                </div>

                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Dynamic Policy Updates</h3>
                  <p className="text-gray-600">
                    Continuously update legal frameworks, SPV documentation, and regulatory filings based on evolving global rules and token ecosystem changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ensure Complete Regulatory Compliance</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Navigate the complex regulatory landscape with our comprehensive compliance services designed for tokenized assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={16} />
                </a>
                <a 
                  href="/case-studies" 
                  className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Compliance Cases
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RegulatoryCompliance;
