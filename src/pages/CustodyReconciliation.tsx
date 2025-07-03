
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, TrendingUp, Clock, ArrowRight } from 'lucide-react';

const CustodyReconciliation = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Custody Reconciliation</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The Key to Trust, Compliance & Efficiency in RWA Tokenization
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6">
                  In the evolving landscape of Real-World Asset (RWA) tokenization, custody reconciliation plays a pivotal role. It ensures that digital tokens on the blockchain are always backed by actual real-world assets. This alignment not only fortifies investor confidence but also upholds regulatory standards and streamlines back-office operations.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Why Custody Reconciliation is Mission-Critical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-600">Stay ahead of regulations with transparent, verifiable records of asset ownership and activity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Investor Assurance</h3>
                      <p className="text-gray-600">Guarantee that every token is supported by a tangible asset, strengthening stakeholder trust.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Operational Streamlining</h3>
                      <p className="text-gray-600">Automate data reconciliation between on-chain and off-chain systems to reduce errors and boost efficiency.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Core Elements of a Robust Custody Reconciliation Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-semibold mb-3">1. Automated Ledger Synchronization</h3>
                    <p className="text-gray-600">
                      Deploy intelligent systems that match blockchain transactions with traditional custody records in real time. This reduces manual effort and minimizes reconciliation discrepancies.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-xl font-semibold mb-3">2. Real-Time Asset Monitoring</h3>
                    <p className="text-gray-600">
                      Offer continuous visibility into asset movements and balances, enabling timely updates and strategic decision-making.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-semibold mb-3">3. Built-in Regulatory Compliance (KYC/AML)</h3>
                    <p className="text-gray-600">
                      Integrate compliance protocols directly into the reconciliation pipeline to ensure adherence to anti-money laundering (AML) and know-your-customer (KYC) requirements.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-xl font-semibold mb-3">4. Tamper-Proof Audit Trails</h3>
                    <p className="text-gray-600">
                      Maintain immutable, timestamped logs for all reconciliation activities—essential for audits, due diligence, and forensic reviews.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">How OpsWorks Accelerates Your Reconciliation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Custom-Built Reconciliation Models</h3>
                    <p className="text-gray-600 text-sm">
                      Tailor-made systems that address the unique requirements of your RWA tokenization platforms.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">End-to-End Regulatory Reporting</h3>
                    <p className="text-gray-600 text-sm">
                      Facilitate accurate, compliant, and timely submission of mandatory filings.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">System Integration Expertise</h3>
                    <p className="text-gray-600 text-sm">
                      Seamlessly merge reconciliation platforms with your existing tech stack for unified operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Streamline Your Custody Reconciliation?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Transform your RWA tokenization platform with our comprehensive custody reconciliation solutions. 
                  Ensure compliance, build trust, and scale efficiently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule a Consultation
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
      </div>
    </Layout>
  );
};

export default CustodyReconciliation;
