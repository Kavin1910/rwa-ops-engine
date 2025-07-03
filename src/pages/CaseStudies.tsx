
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';

const CaseStudies = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how we've helped RWA funds achieve operational excellence and scale their operations.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Case Study */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-blue-600">Featured Case Study</Badge>
                    <h2 className="text-3xl font-bold mb-4">Tokenized Treasury Platform</h2>
                    <p className="text-gray-600 mb-6">
                      A leading tokenized treasury fund needed comprehensive back-office operations 
                      to support their on-chain asset management platform with institutional-grade compliance.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="text-green-600" size={20} />
                        <span className="font-semibold">50% Cost Saving</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={20} />
                        <span className="font-semibold">99.5% Accuracy</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="text-blue-600" size={20} />
                        <span className="font-semibold">SOC 2-Ready</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="text-blue-600" size={20} />
                        <span className="font-semibold">24/7 Operations</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Services Delivered:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>Automated KYC Onboarding</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>UBO Tracing & Wallet Compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>Daily NAV Calculation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>Blockchain Reconciliations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="text-green-600" size={16} />
                        <span>SOC 2-Ready Audit Trails</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Private Credit Fund</Badge>
                <CardTitle className="text-xl">Institutional Credit Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Streamlined operations for a $200M private credit fund with automated investor reporting and compliance monitoring.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Cost Reduction</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Processing Time</span>
                    <span className="font-semibold">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Compliance Score</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Real Estate Fund</Badge>
                <CardTitle className="text-xl">Tokenized Real Estate REIT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  End-to-end fund administration for a tokenized real estate investment trust with global investor base.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Investor Onboarding</span>
                    <span className="font-semibold">-70% Time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">NAV Accuracy</span>
                    <span className="font-semibold">99.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Audit Readiness</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">DAO Treasury</Badge>
                <CardTitle className="text-xl">Multi-Chain Treasury Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive treasury operations for a $50M DAO with cross-chain asset management and governance support.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Transaction Monitoring</span>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Risk Reduction</span>
                    <span className="font-semibold">80%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Operational Efficiency</span>
                    <span className="font-semibold">+150%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join these successful funds and discover how OPSWORKS can transform your operations. 
                  Schedule a consultation to discuss your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule a Consultation
                  </a>
                  <a 
                    href="#" 
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Download Case Study Details
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

export default CaseStudies;
