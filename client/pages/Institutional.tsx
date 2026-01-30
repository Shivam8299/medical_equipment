import Header from "@/components/Header";
import { ArrowRight, Check, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Institutional() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Special rates for bulk orders and long-term partnerships",
    },
    {
      icon: Zap,
      title: "Priority Support",
      description: "Dedicated account managers and 24/7 customer service",
    },
    {
      icon: Shield,
      title: "Warranty & Service",
      description: "Extended warranty options and comprehensive maintenance plans",
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored equipment packages matching your institution's needs",
    },
  ];

  const partners = [
    {
      name: "Apollo Hospitals",
      category: "Multi-specialty Hospital",
      image: "https://images.unsplash.com/photo-1576091160643-112d4d3f32fd?w=300&h=200&fit=crop",
    },
    {
      name: "Max Healthcare",
      category: "Healthcare Network",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
    },
    {
      name: "Fortis Hospital",
      category: "Hospital Chain",
      image: "https://images.unsplash.com/photo-1631217314831-c02b2e9de868?w=300&h=200&fit=crop",
    },
    {
      name: "AIIMS Delhi",
      category: "Government Institution",
      image: "https://images.unsplash.com/photo-1576091160632-112d4d3f32fd?w=300&h=200&fit=crop",
    },
    {
      name: "Diagnostic Center Network",
      category: "Diagnostic Centers",
      image: "https://images.unsplash.com/photo-1576091160399-0ff1d3efaa4f?w=300&h=200&fit=crop",
    },
    {
      name: "Medical College",
      category: "Educational Institute",
      image: "https://images.unsplash.com/photo-1631217314831-c02b2e9de868?w=300&h=200&fit=crop",
    },
  ];

  const packages = [
    {
      name: "Startup Package",
      description: "Perfect for new diagnostic centers and small clinics",
      price: "Starting from ₹5 Lakhs",
      features: [
        "Basic diagnostic equipment",
        "Installation & training",
        "1-year warranty",
        "Email support",
      ],
    },
    {
      name: "Hospital Package",
      description: "Comprehensive solution for multi-specialty hospitals",
      price: "Starting from ₹50 Lakhs",
      features: [
        "Complete diagnostic suite",
        "ICU monitoring systems",
        "Surgical equipment",
        "24/7 priority support",
        "Extended warranty",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Package",
      description: "Full-scale solutions for large healthcare networks",
      price: "Custom Pricing",
      features: [
        "Unlimited equipment options",
        "Dedicated account manager",
        "Flexible payment terms",
        "Premium maintenance plan",
        "Technology upgrades",
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Meet with our team to understand your requirements",
    },
    {
      number: "2",
      title: "Proposal",
      description: "Receive customized proposal with pricing and timeline",
    },
    {
      number: "3",
      title: "Agreement",
      description: "Finalize terms and sign partnership agreement",
    },
    {
      number: "4",
      title: "Implementation",
      description: "Equipment delivery, installation, and staff training",
    },
    {
      number: "5",
      title: "Support",
      description: "Ongoing maintenance and technical support",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Institutional Solutions
            </p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Comprehensive Healthcare Equipment Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Tailored packages and special pricing for hospitals, healthcare networks, government institutions, and diagnostic centers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Partnership Benefits
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Why Choose Jolly Technocrats
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Packages */}
      <section className="py-12  bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Solutions
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Institutional Packages
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose the package that best fits your institution's needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-8 transition-all ${pkg.highlighted
                  ? "border-primary bg-white shadow-xl scale-105"
                  : "border-border bg-white hover:shadow-lg"
                  }`}
              >
                {pkg.highlighted && (
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <p className="text-2xl font-bold text-primary mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="text-primary flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-2.5 rounded-lg font-semibold text-center transition-colors ${pkg.highlighted
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary/5"
                    }`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Partnership Process
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 md:gap-2">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                      {step.number}
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-primary/20" />
                    )}
                  </div>
                  <div className="text-center mt-8">
                    <h4 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-12  bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Partners
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Trusted by Leading Institutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-primary">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is the minimum order value for bulk discounts?",
                a: "We offer flexible pricing starting from ₹5 lakhs. Discounts increase with order volume.",
              },
              {
                q: "Do you offer installation and training?",
                a: "Yes, installation and comprehensive staff training are included in all our packages.",
              },
              {
                q: "What is your warranty period?",
                a: "Standard warranty is 1-2 years depending on equipment. Extended warranties available.",
              },
              {
                q: "Do you provide maintenance contracts?",
                a: "Yes, we offer annual maintenance contracts with priority support.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-border hover:border-primary transition-all"
              >
                <h4 className="font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-12 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how Jolly Technocrats can support your healthcare facility with best-in-class equipment and service.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors group"
          >
            Request Institutional Quote
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className="text-sm text-white/70">
                Leading medical equipment provider since 1975
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link to="/products" className="hover:text-white transition-colors">Diagnostic Equipment</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Monitoring Systems</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Imaging Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-white/70 text-center">
              &copy; 2024 Jolly Technocrats. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
