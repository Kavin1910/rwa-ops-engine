
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, TrendingUp, ArrowRight } from 'lucide-react';

const FinancialReporting = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Financial Reporting</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            GAAP financial reporting for tokenized assets
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                In the fast-evolving realm of Real-World Asset tokenization, rigorous financial transparency is essential. Back-office providers must deliver GAAP-aligned financial statements, comprehensive investor reporting, and insightful performance analytics to ensure trust, compliance, and scalable operations.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">GAAP-Aligned Financial Statements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Preparation of GAAP-compliant statements is crucial for credibility and audit readiness:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Balance Sheet</h3>
                    <p className="text-gray-600">Reflects tokenized asset holdings, liabilities, and equity, including cryptocurrencies and tokenized portfolios.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Income Statement</h3>
                    <p className="text-gray-600">Captures income, expenses, token issuance fees, and asset divestments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Cash Flow Statement</h3>
                    <p className="text-gray-600">Tracks inflows and outflows linked to token activities—capital raises, redemptions, distributions, and operating costs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold mb-1">Notes & Disclosures</h3>
                    <p className="text-gray-600">Detail token valuation approach, asset backing, financial controls, and accounting assumptions.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Investor Reporting & Performance Dashboards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Effective investor communications are key to retaining credibility and supporting investment decisions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Personalized Investor Statements</h3>
                  <p className="text-gray-600">Offer individual summaries including holdings, token valuations, performance breakdowns, and income distribution.</p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Portfolio Analytics</h3>
                  <p className="text-gray-600">Provide benchmarking, risk metrics, yield curves, and asset performance over time.</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Interactive Dashboards</h3>
                  <p className="text-gray-600">Enable real-time access to key metrics—NAV, token transparency, and assets under management.</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Regulatory Reports</h3>
                  <p className="text-gray-600">Deliver firm-level disclosures aligned with GAAP, aiding SEC registration and compliance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Performance Analytics for Tokenized Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Empowering investors with data help differentiate your services:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Automated Valuation</h3>
                  <p className="text-gray-600">Utilize AI-driven price feeds and market trends for dynamic pricing.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Risk Analytics</h3>
                  <p className="text-gray-600">Monitor volatility, stress-test scenarios, model asset correlations, and signal portfolio risk.</p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Return Attribution</h3>
                  <p className="text-gray-600">Break down returns—capital gains, yield, fee impact, FX fluctuations.</p>
                </div>
                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Compliance Monitoring</h3>
                  <p className="text-gray-600">Deploy real-time alerts for breaches of thresholds, limits, and regulatory flags.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Transform Your Financial Reporting</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Deliver institutional-grade financial reporting that builds trust and supports your tokenization platform's growth.
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

export default FinancialReporting;
