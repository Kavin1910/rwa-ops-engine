import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Users, Award, CheckCircle } from 'lucide-react';

const StaffAugmentation = () => {
  const services = [
    {
      icon: Code,
      title: 'Technology Staff Augmentation',
      description: 'Extend your in-house technology capabilities with skilled professionals who integrate seamlessly into your team.',
      details: [
        'Hire blockchain, smart contract, and API integration specialists',
        'Hire data engineers, BI analysts, and reporting experts for platform needs',
        'Hire DevOps, QA, and automation support for system reliability',
        'Align with your existing tech stack and development workflows'
      ],
      value: [
        'Faster project execution without long hiring cycles',
        'Flexible scaling of technical teams as projects demand',
        'Cost-efficient access to specialized blockchain & platform expertise'
      ]
    },
    {
      icon: Users,
      title: 'Business & Operations Augmentation',
      description: 'Strengthen your middle- and back-office functions with skilled professionals trained in fund operations, compliance, and investor servicing.',
      details: [
        'Deploy fund admin and finance specialists for day-to-day operations',
        'Provide KYC/AML analysts, onboarding coordinators, and support staff',
        'Offer investor relations associates for Tier 1 query handling',
        'Manage workflows across subscription/redemption, reporting, and fund accounting'
      ],
      value: [
        'Reduced operational bottlenecks with trained professionals',
        'Stronger compliance posture through skilled middle-office support',
        'Ability to scale investor servicing teams in line with fund growth'
      ]
    },
    {
      icon: Award,
      title: 'Specialized Staff Augmentation',
      description: 'Access niche expertise and on-demand professionals for complex, high-impact needs.',
      details: [
        'Suggest regulatory compliance consultants',
        'Suggest RWA tokenization specialists for structuring and process alignment',
        'Suggest finance transformation and digital asset accounting experts',
        'Engage domain specialists for short-term projects or ongoing advisory roles'
      ],
      value: [
        'Expert access without long-term headcount commitments',
        'Faster execution of complex or regulated workflows',
        'Enhanced investor and regulator confidence through specialist oversight'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Rapid Deployment',
      description: 'Get skilled professionals working on your projects within days, not months'
    },
    {
      title: 'Flexible Scaling',
      description: 'Scale your team up or down based on project requirements and business needs'
    },
    {
      title: 'Cost Efficiency',
      description: 'Access specialized talent without the overhead of full-time hiring and benefits'
    },
    {
      title: 'Domain Expertise',
      description: 'Professionals with deep knowledge in RWA tokenization and fund operations'
    },
    {
      title: 'Reduced Risk',
      description: 'Avoid long-term hiring commitments while maintaining high-quality output'
    },
    {
      title: 'Seamless Integration',
      description: 'Our professionals integrate with your existing teams and workflows'
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Staff Augmentation</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            OPSworks provides flexible Staff Augmentation Services that allow asset managers, digital investment platforms, and protocols to scale their teams without the long lead times, overhead, and risks of traditional hiring.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <service.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">Value:</h4>
                    <ul className="space-y-3">
                      {service.value.map((val, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-green-600 mt-0.5 mr-3 flex-shrink-0" size={18} />
                          <span className="text-gray-600">{val}</span>
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
            <h2 className="text-3xl font-bold mb-6">Agile Team Scaling</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              OPSworks Staff Augmentation gives you the agility to scale teams on-demand, access specialized expertise, and reduce hiring risks — ensuring you always have the right talent to meet your operational, compliance, and technology needs.
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

export default StaffAugmentation;