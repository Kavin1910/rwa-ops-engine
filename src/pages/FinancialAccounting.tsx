import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Receipt, CreditCard, Banknote, Users2, FileBarChart, CheckCircle } from 'lucide-react';

const FinancialAccounting = () => {
  const services = [
    {
      icon: Receipt,
      title: 'Accounts Payable (AP)',
      description: 'We manage your payables to ensure timely, accurate, and compliant disbursements.',
      details: [
        'Process vendor invoices and fund-related expenses',
        'Maintain approval workflows for controlled disbursements',
        'Ensure tax compliance and proper coding of expenses',
        'Track outstanding liabilities and upcoming payments'
      ],
      value: [
        'Timely payments that strengthen vendor & partner relationships',
        'Reduced errors with controlled approvals',
        'Full audit trail for compliance and reporting'
      ]
    },
    {
      icon: CreditCard,
      title: 'Accounts Receivable (AR)',
      description: 'We streamline collections and receivables management to support predictable cash flow.',
      details: [
        'Generate and manage investor invoices and statements',
        'Track subscription inflows and reconcile with fund commitments',
        'Monitor overdue receivables and manage follow-ups',
        'Provide AR aging reports to fund managers'
      ],
      value: [
        'Improved working capital management',
        'Transparent cash flow visibility',
        'Minimized revenue leakage through proactive follow-up'
      ]
    },
    {
      icon: Banknote,
      title: 'Banking Transactions & Reconciliation',
      description: 'We handle all banking and reconciliation tasks to ensure accuracy and liquidity control.',
      details: [
        'Record and classify all banking transactions',
        'Perform daily, weekly, or monthly reconciliations',
        'Identify and resolve discrepancies across systems',
        'Provide liquidity and cash balance visibility to fund managers'
      ],
      value: [
        'Accurate and up-to-date financial records',
        'Minimized reconciliation delays and errors',
        'Clear visibility into cash/liquidity positions'
      ]
    },
    {
      icon: Users2,
      title: 'Payroll & Employee Expenses',
      description: 'We manage payroll and expense reimbursements with compliance and accuracy.',
      details: [
        'Process employee salaries, benefits, and tax deductions',
        'Manage expense claims and employee reimbursements',
        'Ensure compliance with local labor laws & tax regulations',
        'Provide payroll reporting for HR and finance leaders'
      ],
      value: [
        'Accurate and compliant payroll processing',
        'Timely employee reimbursements → higher satisfaction',
        'Reduced admin workload for HR/finance teams'
      ]
    },
    {
      icon: FileBarChart,
      title: 'Financial Statements & Reporting',
      description: 'We provide accurate, audit-ready financials that support decision-making and investor confidence.',
      details: [
        'Prepare monthly, quarterly, and annual financial statements (P&L, Balance Sheet, Cash Flow)',
        'Deliver management reports tailored to fund managers and stakeholders',
        'Support audit readiness with reconciled, version-controlled records',
        'Provide insights into performance, cost structures, and profitability'
      ],
      value: [
        'Investor-ready, transparent reporting',
        'Informed decision-making for fund managers',
        'Reduced compliance and audit risk'
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Finance & Accounting Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            End-to-end finance and accounting support to keep your operations compliant, transparent, and investor-ready — without the overhead of a full in-house finance team.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Value:</h4>
                    <ul className="space-y-2">
                      {service.value.map((val, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-blue-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Complete Financial Operations Support</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              OPSworks' Finance & Accounting services ensure that your operations run with financial accuracy, compliance confidence, and investor transparency, freeing you to focus on growth and asset management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FinancialAccounting;