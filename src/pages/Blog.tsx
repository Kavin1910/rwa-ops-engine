
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Insights, trends, and expertise in RWA tokenization and back-office operations.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>OPSWORKS Team</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold mb-4">
                How Back Office Support Empowers Tokenized Treasury Platforms to Scale RWA Operations
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Rise of Tokenized Real-World Assets (RWA)</h2>
              <p className="text-gray-600 mb-6">
                The financial world is undergoing a quiet revolution. With the tokenization of U.S. Treasuries and other real-world assets (RWAs), platforms are opening up institutional-grade products to a global, on-chain investor base. By bridging the gap between traditional assets and blockchain-based finance, these platforms offer secure, yield-generating opportunities like never before.
              </p>
              <p className="text-gray-600 mb-6">
                However, behind this innovation lies a critical engine: operational execution. And that's where a reliable back-office partner steps in.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Hidden Backbone: Why Back Office Support Matters</h2>
              <p className="text-gray-600 mb-6">
                Tokenized treasury platforms aren't just DeFi protocols — they are hybrid financial operations juggling both blockchain and legacy systems. Every token minted is backed by a real U.S. Treasury bill, every wallet whitelisted is a compliance risk if not vetted correctly, and every interest payment must be reconciled both on-chain and in traditional ledgers.
              </p>
              <p className="text-gray-600 mb-6">
                Without a robust operational layer, the platform's promise of yield, security, and transparency collapses.
              </p>

              <h2 className="text-2xl font-semibold mb-4">What We Do: Tailored Back Office Services for RWA Platforms</h2>
              <p className="text-gray-600 mb-4">
                At OpsWorks, we provide full-spectrum back-office support to tokenized treasury platforms, enabling them to focus on innovation while we handle the operational load.
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li><strong>KYC/AML & Wallet Onboarding</strong></li>
                <li><strong>Treasury Asset Lifecycle Management</strong></li>
                <li><strong>NAV and Income Distribution</strong></li>
                <li><strong>Daily NAV calculation</strong></li>
                <li><strong>Blockchain Ops</strong></li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Real-World Scenario: Supporting a Tokenized U.S. Treasury Platform</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="mb-2"><strong>Client:</strong> A U.S.-based platform issuing permissioned tokens backed by short-term Treasuries</p>
                <p className="mb-2"><strong>Problem:</strong> Manual reconciliation of Treasury holdings vs token circulation; delays in KYC approval; scaling bottlenecks</p>
                <p className="mb-4"><strong>Our Solution:</strong></p>
                <ul className="list-disc pl-8 mb-4 space-y-1">
                  <li>Implemented automated KYC flow with 12-hour SLA</li>
                  <li>Integrated custodial APIs and blockchain explorers for daily reconciliation</li>
                  <li>Rolled out smart-contract monitors for transfer violations</li>
                </ul>
                <p className="mb-2"><strong>Result:</strong></p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>50% operational cost savings</li>
                  <li>99.5% reconciliation accuracy</li>
                  <li>3x faster investor onboarding</li>
                </ul>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ready to Scale Your RWA Operations?</h3>
                <p className="text-gray-600 mb-4">
                  Discover how OPSWORKS can help your tokenized treasury platform achieve operational excellence.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
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

export default Blog;
