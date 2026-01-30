import Header from "@/components/Header";
import { useState } from "react";
import { ArrowRight, Filter } from "lucide-react";

const productCategories = [
  "All Products",
  "Diagnostic",
  "Monitoring",
  "Imaging",
  "Laboratory",
  "Surgical",
];

const products = [
  {
    id: 1,
    name: "Advanced ECG System",
    category: "Diagnostic",
    image: "/product1.jpg",
    description: "Multi-channel ECG machine with high-resolution thermal printing and digital display.",
    features: ["12-channel recording", "Real-time analysis", "Portable design"],
  },
  {
    id: 2,
    name: "Digital Ultrasound Scanner",
    category: "Imaging",
    image: "/product2.jpg",
    description: "Portable high-resolution ultrasound system with multi-probe support for versatile diagnostics.",
    features: ["4D imaging", "Multi-probe support", "Wireless connectivity"],
  },
  {
    id: 3,
    name: "Patient Monitoring Station",
    category: "Monitoring",
    image: "/t1.jpg",
    description: "Integrated vital signs monitor designed for intensive care units and critical patient care.",
    features: ["Real-time monitoring", "Data logging", "Network connectivity"],
  },
  {
    id: 4,
    name: "Hematology Analyzer",
    category: "Laboratory",
    image: "/t3.jpg",
    description: "Automated blood cell counter designed for high-volume clinical laboratories.",
    features: ["60 parameters", "High accuracy", "Maintenance friendly"],
  },
  {
    id: 5,
    name: "Surgical Power Tools",
    category: "Surgical",
    image: "/t4.jpg",
    description: "Precision surgical drills and saws optimized for complex orthopedic and neurosurgical procedures.",
    features: ["Adjustable intensity", "Long lifespan", "Energy efficient"],
  },
  {
    id: 6,
    name: "Dermadry Machine",
    category: "Diagnostic",
    image: "/dermadry.jpg",
    description: "Advanced solution for treating excessive sweating (hyperhidrosis) with clinically proven results.",
    features: ["Fast treatment", "Portable", "Customizable settings"],
  },
  {
    id: 7,
    name: "Infusion Pump",
    category: "Monitoring",
    image: "/t5.jpg",
    description: "Highly accurate volumetric infusion pump for standard clinical therapies and critical infusions.",
    features: ["Multiple modes", "User-friendly interface", "Advanced alarms"],
  },
  {
    id: 8,
    name: "Medical Ventilator",
    category: "Monitoring",
    image: "/t6.jpg",
    description: "Universal mechanical ventilator providing respiratory support for pediatric and adult patients.",
    features: ["Pediatric & Adult modes", "High precision", "Backup battery"],
  },
  {
    id: 9,
    name: "Operation Theatre Light",
    category: "Surgical",
    image: "/t7.jpg",
    description: "LED surgical lighting system with shadow-reduction technology and excellent color rendering.",
    features: ["Shadowless tech", "Color correct", "Easy adjustment"],
  },
  {
    id: 10,
    name: "Digital Radiography",
    category: "Imaging",
    image: "/t8.jpg",
    description: "Modern X-ray system for high-quality clinical imaging with minimal radiation exposure.",
    features: ["Fast imaging", "Low radiation", "Digital export"],
  },
  {
    id: 11,
    name: "Dermadry Ion",
    category: "Diagnostic",
    image: "/dermadry1.jpg",
    description: "Latest generation device for effective hyperhidrosis management at home or in clinical settings.",
    features: ["Newest technology", "Comfort-focused", "Long-term results"],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Catalog
            </p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-4">
              Medical Equipment Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our comprehensive range of quality medical equipment and diagnostic solutions
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-48">
              <div className="lg:block">
                <div className="flex items-center justify-between lg:block mb-4 lg:mb-0">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Filter size={20} />
                    Categories
                  </h3>
                  <button
                    onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                    className="lg:hidden text-primary font-semibold text-sm"
                  >
                    {mobileFilterOpen ? "Hide" : "Show"}
                  </button>
                </div>
                <div
                  className={`space-y-2 ${mobileFilterOpen ? "block" : "hidden"
                    } lg:block`}
                >
                  {productCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setMobileFilterOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all ${selectedCategory === category
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-8">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4 space-y-1">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-end pt-4 border-t border-border">
                        <button className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group">
                          Inquire
                          <ArrowRight
                            className="ml-1 group-hover:translate-x-1 transition-transform"
                            size={16}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No products found in this category
                  </p>
                  <button
                    onClick={() => setSelectedCategory("All Products")}
                    className="text-primary font-semibold hover:text-primary/80"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We have a wide range of medical equipment. Contact us for custom requirements and bulk orders.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Request a Quote
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
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
                <li><a href="#" className="hover:text-white transition-colors">Diagnostic Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monitoring Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imaging Solutions</a></li>
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
