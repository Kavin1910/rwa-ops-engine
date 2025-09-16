import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We needed operations across four jurisdictions and didn't have time to build a team. OPSworks gave us an embedded crew in less time, ready with KYC and fund workflows.",
      author: "COO, Tokenization Platform",
      company: "Leading RWA Tokenization Platform"
    },
    {
      quote: "Their investor support is better than in-house. We scaled users without adding headcount.",
      author: "Head of Product, Tokenized Treasury Platform",
      company: "Digital Asset Management Firm"
    },
    {
      quote: "As a lean start-up, we didn't have the expertise to set up compliant onboarding and fund operations. OPSworks plugged in seamlessly, letting us focus on product and capital raising while they handled the workflows.",
      author: "Founder, Tokenization Start-up",
      company: "Emerging RWA Platform"
    },
    {
      quote: "Expanding into digital assets meant new compliance and reporting demands we weren't resourced for. OPSworks gave us scalable back-office strength, from subscriptions to reconciliations, without building a new department.",
      author: "Managing Partner, Alternative Asset Manager",
      company: "Traditional Asset Management Firm"
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            What our clients say about working with OPSworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-blue-800/50 border-blue-700">
              <CardContent className="p-8">
                <blockquote className="text-lg text-blue-100 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-blue-200 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;