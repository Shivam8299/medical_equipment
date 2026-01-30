import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const productCategories = [
  {
    icon: "❤️",
    name: "Cardiology",
    items: ["ECG Machines", "Defibrillators", "Cardiac Monitors", "Angiography Systems"],
  },
  {
    icon: "🔬",
    name: "Surgery",
    items: ["OT Lights", "Surgical Tables", "Anesthesia Machines", "Electrosurgery"],
  },
  {
    icon: "👶",
    name: "Neonatology",
    items: ["Incubators", "Ventilators", "Phototherapy Units", "Monitoring Systems"],
  },
  {
    icon: "📡",
    name: "Radiology",
    items: ["X-Ray Systems", "CT Scanners", "MRI Equipment", "Ultrasound"],
  },
  {
    icon: "🧪",
    name: "Laboratory",
    items: ["Analyzers", "Microscopes", "Centrifuges", "Incubators"],
  },
  {
    icon: "🔍",
    name: "Forensic",
    items: ["Autopsy Tables", "Forensic Cameras", "Evidence Storage", "Lab Equipment"],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 cursor-default">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JT</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-foreground leading-none">
                Jolly
              </h1>
              <p className="text-xs text-muted-foreground">Technocrats</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="px-4 py-2 text-sm font-medium text-foreground cursor-default"
            >
              Home
            </div>

            {/* Products Mega Menu */}
            <div className="group" ref={dropdownRef}>
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                    }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full bg-white border border-border rounded-lg shadow-xl pt-2 w-screen max-w-4xl z-50 ${productsDropdownOpen ? "block" : "hidden group-hover:block"
                  }`}
              >
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {productCategories.map((category) => (
                      <div key={category.name}>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span>{category.icon}</span>
                          {category.name}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item}>
                              <span
                                className="text-sm text-muted-foreground cursor-default"
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <span
                      className="inline-block text-sm font-semibold text-primary cursor-default"
                    >
                      Download Full Catalog →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-4 py-2 text-sm font-medium text-foreground cursor-default"
            >
              About Us
            </div>

            <div
              className="px-4 py-2 text-sm font-medium text-foreground cursor-default"
            >
              Institutional
            </div>

            <div
              className="px-4 py-2 text-sm font-medium text-foreground cursor-default"
            >
              Contact
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-medium rounded-lg opacity-80 cursor-default"
            >
              Request Quote
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-0 pt-4">
              <div
                className="px-4 py-3 text-sm font-medium text-foreground cursor-default"
              >
                Home
              </div>

              {/* Mobile Products Dropdown */}
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors w-full text-left flex items-center justify-between"
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productsDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {productsDropdownOpen && (
                <div className="bg-muted px-4 py-3 space-y-4">
                  {productCategories.map((category) => (
                    <div key={category.name}>
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <span>{category.icon}</span>
                        {category.name}
                      </h4>
                      <ul className="space-y-1 ml-6">
                        {category.items.map((item) => (
                          <li key={item}>
                            <span
                              className="text-xs text-muted-foreground cursor-default"
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <span
                    className="inline-block text-xs font-semibold text-primary cursor-default"
                  >
                    Download Full Catalog →
                  </span>
                </div>
              )}

              <div
                className="px-4 py-3 text-sm font-medium text-foreground cursor-default"
              >
                About Us
              </div>

              <div
                className="px-4 py-3 text-sm font-medium text-foreground cursor-default"
              >
                Institutional
              </div>

              <div
                className="px-4 py-3 text-sm font-medium text-foreground cursor-default"
              >
                Contact
              </div>

              <div
                className="mx-4 px-4 py-2.5 bg-primary text-white font-medium rounded-lg text-center mt-4 opacity-80 cursor-default"
              >
                Request Quote
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
