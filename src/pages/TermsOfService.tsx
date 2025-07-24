import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Legal terms governing the use of OPSWORKS services
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">1. Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These Terms govern your use of OpsWorks LLC's back-office support services ("Services") provided to Real‑World Asset (RWA) tokenization platforms. By engaging our Services, you agree to these Terms.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">2. Definitions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Client"</strong> means any entity (e.g., an RWA tokenization company) using our Services.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Services"</strong> includes bookkeeping, accounting, investor reporting, tax support, compliance monitoring, KYC/AML assistance, smart contract reconciliation, and related tasks.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Deliverables"</strong> means all data, reports, documentation, and outputs we provide.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">3. Scope of Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">We perform:</p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Fund accounting, reconciliation of real-world & on‑chain transactions.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Net asset value (NAV) computation.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Investor communication & periodic reporting.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Compliance assistance aligned with RBI/Sebi and tokenization regulations.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">KYC/AML documentation handling and coordination.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Support with audits and tax filings.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Data processing for smart contracts and custody integration.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">4. Client Obligations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Clients must:</p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Provide timely, accurate source data (e.g., financials, smart-contract logs).</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Ensure legal authority over RWAs, token contracts, and investor records.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Obtain all necessary consents from end users and adhere to RBI's tokenization mandates.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Maintain internal controls; we rely on client‑provided data integrity.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">5. Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">You acknowledge that tokenization of RWAs and card‑on‑file tokens is governed by and other applicable laws.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Our Services do not constitute legal or regulatory advice. You are responsible for full compliance with laws, including circulars, data‑security norms, KYC/AML and securities regulations.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">6. Confidentiality & Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Confidential Information includes client data, platform details, investor identities, and tokenization mechanics.</span>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">We will:</p>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Protect such data with industry-standard safeguards.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Limit access to authorized staff.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Only disclose data when legally required or with your permission.</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">We will comply with applicable data privacy laws.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">7. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Client retains ownership of all input data.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">We retain IP rights in our systems and methods, while granting you a non-exclusive license to the Deliverables under these Terms.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">8. Fees & Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Fees are specified in individual statements of work.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Payment terms: [e.g., 30 days net].</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Late payments incur interest of 5% per annum.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">We disclaim liability for:</p>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Errors arising from incorrect data provided by the Client.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Third-party acts (e.g., token‑service providers).</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Indirect damages (lost revenue, reputation, etc.).</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Our total liability is capped at fees paid for the service period in question.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">10. Warranties & Representations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Client affirms:</p>
                  <div className="ml-4 space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">Funds used in tokenization are legally sourced.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">KYC/AML compliance is upheld.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-blue-600">◦</span>
                      <span className="text-gray-600">All asset rights are valid and in place.</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  We represent that we'll perform services diligently and competently.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">11. Term & Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Term starts on engagement date, continues until project completion.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Either party may terminate for material breach after a 30-day cure period.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">On termination, you pay for all work done to date; we return or destroy your data per your instructions.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">12. Dispute Resolution & Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Governed by laws of the State of Missouri.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Disputes will first seek informal resolution; if unresolved, referred to arbitration under Indian Arbitration & Conciliation Act, with seat in State of Missouri.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">13. Amendments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We reserve the right to update Terms. Material changes will be communicated; continued use after notice constitutes acceptance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
