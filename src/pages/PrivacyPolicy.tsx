
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                OpsWorks values your privacy. We're dedicated to safeguarding any information you share with us on this website.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Scope</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                This policy outlines how OpsWorks collects, uses, stores, secures, and discloses information from visitors to this website. 
                It applies only to data obtained directly through this site—offline or third-party sources are not included.
              </p>
              <p>
                By using this website, you agree to the terms of this Privacy Policy. If you disagree, please refrain from using the site. 
                We may update this policy periodically; continued use signifies acceptance of any changes. Check back regularly for revisions.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">1. Information You Provide</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We collect information you volunteer when interacting with our site, such as:</p>
              <ul>
                <li>Data entered on forms (e.g., service inquiries, support requests)</li>
                <li>Registration details for access to online tools or reports</li>
                <li>Correspondence you send (e.g., emails), including contact info like names, email addresses, and phone numbers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">2. Information Collected Automatically</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>As you browse, we may gather usage data without your input, including:</p>
              <ul>
                <li>IP address and general location</li>
                <li>Browser type, version, and language settings</li>
                <li>Visit timestamps, duration, frequency, and visited pages</li>
              </ul>
              <p>Technical tools we use include:</p>
              <ul>
                <li>Server logs that record visitor interactions</li>
                <li>Cookies, local storage, and web caches for storing browser session info</li>
                <li>Google Analytics for tracking site usage metrics anonymized; no personal data is tied to analytics sessions, and you can disable tracking via your browser's "Do Not Track" setting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">3. How Your Information Is Used</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <ul>
                <li>To manage and respond to inquiries or service requests</li>
                <li>To analyze and enhance website behavior and functionality</li>
                <li>For internal market research and business development</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">4. Information Sharing & Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>OpsWorks does not sell your personal data. We may share your information in these scenarios:</p>
              <ul>
                <li>With affiliates or service providers under confidentiality agreements</li>
                <li>During corporate restructuring events (e.g., mergers, acquisitions)</li>
                <li>With your consent</li>
                <li>To comply with legal obligations or enforce our Terms of Use</li>
                <li>To protect user safety or company rights, including fraud prevention</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">5. Security Measures</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We use industry-standard safeguards to prevent unauthorized access or misuse of your data. However, internet transmission 
                is never fully secure; you bear the risk for any data transmitted. Passwords must be kept confidential, and OpsWorks is 
                not liable for compromised credentials.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">6. External Website Links</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Our policy covers information collected solely on this site. We are not responsible for privacy practices or content on 
                third-party sites linked from our pages. Please consult their privacy policies before sharing any personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">7. Children Under 13</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We do not knowingly collect information from children under 13. If we become aware of such data, we will remove it as 
                soon as possible. Minors under 13 should not use or provide data on this site.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">8. Email Communication</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By giving us your email, you consent to receive electronic communications from OpsWorks. We may retain contents of these 
                messages as needed.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">9. Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Our Privacy Policy is subject to change. The date of the latest update appears at the top. Please review it each time you visit.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">10. Additional Rights (EU, UK, CA, SG, Cayman)</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Residents of the European Union, United Kingdom, California, Singapore, or the Cayman Islands may have extra rights under 
                their local privacy laws.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                For questions about this policy or personal data we hold, email us at <a href="mailto:contact@opsworks.io" className="text-blue-600 hover:underline">contact@opsworks.io</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
