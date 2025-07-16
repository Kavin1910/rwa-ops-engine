import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your fund operations? Get in touch with our experts today.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Schedule a Consultation</CardTitle>  
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" type="text" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" type="text" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" type="text" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="fundType">Fund Type</Label>
                      <Input id="fundType" type="text" placeholder="e.g., Private Credit, Real Estate, Treasury" />
                    </div>
                    
                    <div>
                      <Label htmlFor="aum">Assets Under Management</Label>
                      <Input id="aum" type="text" placeholder="e.g., $50M - $500M" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your current operational challenges and what you'd like to discuss..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Schedule Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">contact@opsworks.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Offices</h4>
                      <p className="text-gray-600">
                        St. Louis, Missouri, United States<br />
                        Bangalore, Karnataka, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Support Hours</h4>
                      <p className="text-gray-600">24/7 Global Support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">1</span>
                      <div>
                        <h4 className="font-medium">Initial Consultation</h4>
                        <p className="text-gray-600 text-sm">30-minute discovery call to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">2</span>
                      <div>
                        <h4 className="font-medium">Detailed Assessment</h4>
                        <p className="text-gray-600 text-sm">Comprehensive review of your current operations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">3</span>
                      <div>
                        <h4 className="font-medium">Custom Proposal</h4>
                        <p className="text-gray-600 text-sm">Tailored solution with timeline and pricing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
