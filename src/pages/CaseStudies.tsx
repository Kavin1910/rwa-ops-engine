
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
            Real-world success stories of how we've transformed RWA fund operations.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
              <Badge className="mb-4 bg-blue-600 w-fit">Featured Case Study</Badge>
              <CardTitle className="text-3xl font-bold mb-4">Backoffice Support for Tokenized Treasury Platform</CardTitle>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Client Overview</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Client Type:</strong> Tokenized Treasury Platform</p>
                    <p><strong>Asset Class:</strong> U.S. Treasuries (RWA), Short-term Investment Grade Bonds and Money Market Funds</p>
                    <p><strong>Blockchain:</strong> Ethereum</p>
                    <p><strong>Users:</strong> Institutional and accredited retail investors</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Challenge</h3>
                  <ul className="text-sm space-y-1 list-disc pl-4">
                    <li>Managing large-scale onboarding (KYC/AML) of global investors</li>
                    <li>Ensuring end-to-end compliance with SEC/OFAC regulations</li>
                    <li>Reconciling on-chain transactions with TradFi custodian statements</li>
                    <li>Timely and accurate NAV calculation, interest accruals, and distribution</li>
                    <li>Maintaining investor reporting and audit readiness</li>
                  </ul>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Scope of Backoffice Support</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">KYC/AML & Compliance Operations</h4>
                      <ul className="text-sm space-y-1 list-disc pl-4 mt-2">
                        <li>Onboarding individuals & entities using jurisdiction-specific rulebooks</li>
                        <li>Screening against global PEP, OFAC, and sanctions lists</li>
                        <li>Risk classification, enhanced due diligence where required</li>
                        <li>Record maintenance as per GDPR & SEC retention policies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600">Treasury Asset Administration</h4>
                      <ul className="text-sm space-y-1 list-disc pl-4 mt-2">
                        <li>Digitized capture of asset purchase logs</li>
                        <li>Linking U.S. Treasuries to on-chain tokens</li>
                        <li>Monitoring maturity and rollover activity</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600">Token Lifecycle Operations</h4>
                      <ul className="text-sm space-y-1 list-disc pl-4 mt-2">
                        <li>Token minting & redemption workflows tied to custodial confirmations</li>
                        <li>Wallet whitelisting and investor onboarding validation</li>
                        <li>Cap table and investor registry maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Fund Accounting & Reporting</h4>
                      <ul className="text-sm space-y-1 list-disc pl-4 mt-2">
                        <li>Daily NAV computation based on Treasury yields and FX</li>
                        <li>Income allocation logs and wallet-based reporting</li>
                        <li>Issuance of tax-compliant statements</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600">Blockchain Ops & Reconciliation</h4>
                      <ul className="text-sm space-y-1 list-disc pl-4 mt-2">
                        <li>Real-time transaction monitoring</li>
                        <li>Reconciliation between token balances and real-world securities</li>
                        <li>Automated alerts for anomalies or compliance breaches</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600">Tools & Tech Stack</h4>
                      <div className="text-sm space-y-1 mt-2">
                        <p><strong>Compliance:</strong> [Platform-specific tools]</p>
                        <p><strong>Custody & Treasury:</strong> [Integration systems]</p>
                        <p><strong>Accounting:</strong> [Financial reporting tools]</p>
                        <p><strong>Chain Monitoring:</strong> [Blockchain analytics]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Outcomes Delivered</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border p-2 text-left">KPI</th>
                          <th className="border p-2 text-left">Before</th>
                          <th className="border p-2 text-left">After</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">KYC Approval TAT</td>
                          <td className="border p-2">72 hrs</td>
                          <td className="border p-2 text-green-600 font-semibold">24 hrs</td>
                        </tr>
                        <tr>
                          <td className="border p-2">NAV Calculation Accuracy</td>
                          <td className="border p-2">94%</td>
                          <td className="border p-2 text-green-600 font-semibold">99.8%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">On-Chain vs Custody Recons</td>
                          <td className="border p-2">Manual</td>
                          <td className="border p-2 text-green-600 font-semibold">Automated</td>
                        </tr>
                        <tr>
                          <td className="border p-2">SLA Adherence</td>
                          <td className="border p-2">N/A</td>
                          <td className="border p-2 text-green-600 font-semibold">>98%</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Investor Satisfaction</td>
                          <td className="border p-2">Medium</td>
                          <td className="border p-2 text-green-600 font-semibold">High</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Value to Client</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-green-600" size={20} />
                      <span>50% reduction in operational cost</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="text-green-600" size={20} />
                      <span>Scalable model to support growing companies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="text-blue-600" size={20} />
                      <span>Audit-ready records and SEC preparedness</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="text-blue-600" size={20} />
                      <span>Secure, encrypted data workflows with 24/7 support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Operations?</h3>
                <p className="text-gray-600 mb-6">
                  Join successful platforms like this and discover how OPSWORKS can scale your RWA operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Schedule a Consultation
                  </a>
                  <a 
                    href="/blog" 
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Read Our Blog
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;
