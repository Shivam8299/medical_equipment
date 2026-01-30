import Header from "@/components/Header";
import { ArrowRight, Award, Users, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const milestones = [
    { year: "1975", title: "Founded", description: "Jolly Technocrats established as a medical equipment distributor" },
    { year: "1990", title: "Expansion", description: "Expanded operations across major Indian cities" },
    { year: "2005", title: "Certification", description: "Achieved ISO 13485 and other international certifications" },
    { year: "2020", title: "Innovation", description: "Launched digital solutions and online ordering platform" },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We only distribute products that meet international standards and certifications",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our dedicated team provides exceptional support and personalized solutions",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly evolve to bring latest medical technology to our partners",
    },
    {
      icon: Globe,
      title: "Trust & Integrity",
      description: "Nearly 50 years of reliability and transparent business practices",
    },
  ];

  const teamMembers = [
    {
      name: "Raj Kumar",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Amit Patel",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Sneha Desai",
      role: "Sales Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
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
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Nearly 50 Years of Medical Excellence
            </h1>
            <p className="text-xl text-muted-foreground">
              Since 1975, Jolly Technocrats has been a trusted partner for hospitals, clinics, and diagnostic centers across India, delivering quality medical equipment and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                alt="Our History"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                  Building Trust Through Quality
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">
                What started as a small medical equipment distributor in 1975 has grown into a comprehensive healthcare solutions provider. Our journey reflects our commitment to bringing world-class medical technology to healthcare institutions across India.
              </p>
              <p className="text-muted-foreground text-lg">
                We understand that healthcare providers need reliable equipment and dependable partners. That's why we've built our reputation on quality products, timely delivery, and outstanding customer support.
              </p>
              <p className="text-muted-foreground text-lg">
                Over nearly five decades, we've helped thousands of healthcare providers serve their communities better. From diagnostic equipment to surgical systems, we're committed to advancing healthcare delivery in India.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-12  bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Key Milestones
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <p className="text-3xl font-bold text-primary mb-2">
                  {milestone.year}
                </p>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12  bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Leadership Team
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Meet Our Team
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12  bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                48+
              </p>
              <p className="text-white/80 font-semibold">
                Years in Business
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                500+
              </p>
              <p className="text-white/80 font-semibold">
                Healthcare Partners
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                10K+
              </p>
              <p className="text-white/80 font-semibold">
                Equipment Installed
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                24/7
              </p>
              <p className="text-white/80 font-semibold">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who trust Jolly Technocrats for their medical equipment needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Request a Quote
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
