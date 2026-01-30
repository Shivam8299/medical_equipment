import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you for your inquiry. We'll contact you at ${formData.email} soon!`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const offices = [
    {
      city: "New Delhi",
      address: "123 Medical Plaza, Delhi - 110001",
      phone: "+91 11 XXXX XXXX",
      email: "delhi@jollytechnocrats.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Mumbai",
      address: "456 Healthcare Hub, Mumbai - 400001",
      phone: "+91 22 XXXX XXXX",
      email: "mumbai@jollytechnocrats.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Bangalore",
      address: "789 MedTech Center, Bangalore - 560001",
      phone: "+91 80 XXXX XXXX",
      email: "bangalore@jollytechnocrats.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
    {
      city: "Kolkata",
      address: "101 Health Services, Kolkata - 700001",
      phone: "+91 33 XXXX XXXX",
      email: "kolkata@jollytechnocrats.in",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
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
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Contact Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our products or services? We're here to help. Reach out to us through any of our offices or via the contact form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Installation & Support">Installation & Support</option>
                        <option value="Institutional Partnership">Institutional Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      className="w-full px-4 py-2.5 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      info@jollytechnocrats.in
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      +91 XXXX XXXXXX
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Business Hours
                    </h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12  bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Offices
            </p>
            <h2 className="text-3xl md:text-4xl text-foreground">
              Visit Us Across India
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={16} />
                    <p className="text-xs text-muted-foreground">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={16} />
                    <p className="text-xs text-muted-foreground">
                      {office.phone}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={16} />
                    <p className="text-xs text-muted-foreground">
                      {office.email}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary flex-shrink-0 mt-1" size={16} />
                    <p className="text-xs text-muted-foreground">
                      {office.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">
              Locate Us
            </h2>
            <p className="text-muted-foreground">
              Conveniently located across major cities in India
            </p>
          </div>
          <div className="w-full h-96 bg-muted rounded-xl border border-border overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5674999999998!2d77.20986!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd288b1fdddd%3A0x3b0d04b20b07e70!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12  bg-muted/30">
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
                q: "What is your average response time?",
                a: "We typically respond to inquiries within 24 hours. For urgent matters, call our 24/7 support line.",
              },
              {
                q: "Do you offer free consultation?",
                a: "Yes, we offer complimentary consultation to understand your needs and provide customized solutions.",
              },
              {
                q: "Can I request a demo before purchasing?",
                a: "Absolutely! We arrange product demos at your facility or at our showrooms. Contact us to schedule.",
              },
              {
                q: "What is your delivery timeframe?",
                a: "Standard delivery is 5-7 working days. Express delivery available for urgent orders.",
              },
              {
                q: "Do you provide after-sales support?",
                a: "Yes, we offer comprehensive after-sales support including installation, training, and maintenance.",
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
            Need Immediate Assistance?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our support team is ready to help. Reach out via phone or email for urgent matters.
          </p>
          <a
            href="tel:+911234567890"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors group"
          >
            <Phone className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            Call Us Now
          </a>
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
