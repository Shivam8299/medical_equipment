import { Heart, Zap, Stethoscope, Award, Users, Shield, Microscope, Baby, FlaskConical, Scan, Search, Briefcase, TrendingUp, MapPin, CheckCircle } from "lucide-react";

export const featuredProducts = [
    {
        id: 1,
        name: "Advanced ECG System",
        category: "Diagnostic",
        icon: Heart,
        description: "Multi-channel ECG machine with high-resolution thermal printing.",
        image: "/product1.jpg",
    },
    {
        id: 2,
        name: "Digital Ultrasound",
        category: "Imaging",
        icon: Zap,
        description: "Portable ultrasound system with high-frequency transducers.",
        image: "/product2.jpg",
    },
    {
        id: 3,
        name: "Patient Monitoring Station",
        category: "Monitoring",
        icon: Stethoscope,
        description: "Integrated vital signs monitor for intensive care units.",
        image: "/t3.jpg",
    },
    {
        id: 4,
        name: "Hematology Analyzer",
        category: "Laboratory",
        icon: Award,
        description: "Automated blood cell counter for high-volume laboratories.",
        image: "/t3.jpg",
    },
    {
        id: 5,
        name: "Surgical Power Tools",
        category: "Surgery",
        icon: Zap,
        description: "Precision surgical drills and saws for orthopedic procedures.",
        image: "/t4.jpg",
    },
    {
        id: 6,
        name: "Dermadry Machine",
        category: "Dermatology",
        icon: Shield,
        description: "Advanced solution for treating excessive sweating (hyperhidrosis).",
        image: "/dermadry.jpg",
    },
    {
        id: 7,
        name: "Infusion Pump",
        category: "Critical Care",
        icon: Zap,
        description: "Highly accurate volumetric infusion pump for clinical therapies.",
        image: "/t5.jpg",
    },
    {
        id: 8,
        name: "Medical Ventilator",
        category: "Intensive Care",
        icon: Stethoscope,
        description: "Universal ventilator for pediatric and adult respiratory support.",
        image: "/t6.jpg",
    },
    {
        id: 9,
        name: "Operation Theatre Light",
        category: "Surgery",
        icon: Zap,
        description: "LED surgical lighting system with shadow-reduction technology.",
        image: "/t7.jpg",
    },
    {
        id: 10,
        name: "Digital Radiography",
        category: "Imaging",
        icon: Zap,
        description: "Modern X-ray system for high-quality clinical imaging.",
        image: "/t8.jpg",
    },
    {
        id: 11,
        name: "Dermadry Ion",
        category: "Dermatology",
        icon: Shield,
        description: "Latest generation device for effective hyperhidrosis management.",
        image: "/dermadry1.jpg",
    },
];

export const services = [
    {
        icon: Heart,
        title: "Product Distribution",
        description: "Wide range of medical equipment from leading manufacturers",
    },
    {
        icon: Users,
        title: "Technical Support",
        description: "Expert support and maintenance for all equipment",
    },
    {
        icon: Award,
        title: "Quality Assurance",
        description: "Certified products meeting international standards",
    },
    {
        icon: Stethoscope,
        title: "Training & Installation",
        description: "Professional installation and staff training services",
    },
];

export const testimonials = [
    {
        name: "Apollo Hospitals",
        text: "Excellent service and reliable equipment. Jolly Technocrats has been our trusted partner for years.",
        location: "Pan India",
    },
    {
        name: "Max Healthcare",
        text: "Professional approach and timely delivery. Highly recommended for medical equipment needs.",
        location: "New Delhi",
    },
    {
        name: "Fortis Hospital",
        text: "Great customer service and quality products. They truly understand hospital requirements.",
        location: "National",
    },
];

export const extendedTestimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Hospital Director",
        organization: "Apollo Hospitals",
        text: "Outstanding service and reliable equipment. Jolly Technocrats has been an invaluable partner in our journey to provide best healthcare.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
        name: "Ms. Priya Sharma",
        role: "Operations Manager",
        organization: "Max Healthcare",
        text: "Professional approach, timely delivery, and exceptional support. They truly understand our requirements and deliver accordingly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
        name: "Mr. Amit Desai",
        role: "Chief Administrator",
        organization: "Fortis Hospital",
        text: "Great customer service and quality products. The team's expertise and dedication made our equipment acquisition seamless.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
];

export const brands = [
    { name: "Lisa Weider", logo: "/logo1.jpg" },
    { name: "Swarnraj Aygun", logo: "/logo2.jpg" },
    { name: "Surgical Instrument", logo: "/logo3.jpg" },
    { name: "Cogent", logo: "/logo4.jpg" },
    { name: "Nitrocare EN", logo: "/logo5.jpg" },
    { name: "Brymill", logo: "/logo6.jpg" },
    { name: "Cryoiq", logo: "/logo7.jpg" },
    { name: "Dermadry", logo: "/logo8.jpg" },
    { name: "Partner 9", logo: "/logo9.jpg" },
    { name: "Partner 11", logo: "/logo11.jpg" },
    { name: "Partner 12", logo: "/logo12.jpg" },
    { name: "Partner 13", logo: "/logo13.jpg" },
    { name: "Partner 14", logo: "/logo14.jpg" },
    { name: "Partner 15", logo: "/logo15.jpg" },
    { name: "Partner 16", logo: "/logo16.jpg" },
    { name: "Partner 17", logo: "/logo17.jpg" },
    { name: "Partner 18", logo: "/logo18.jpg" },
    { name: "Partner 19", logo: "/logo19.jpg" },
    { name: "Partner 20", logo: "/logo20.jpg" },
    { name: "Partner 21", logo: "/logo21.jpg" },
];

export const productCategories = [
    {
        title: "Cardiology",
        subtitle: "Cardiac Equipment",
        icon: Heart,
        color: "bg-red-50 text-red-600 border-red-100",
        description: "Advanced diagnostic and monitoring systems for comprehensive cardiac care."
    },
    {
        title: "Surgery",
        subtitle: "OR Equipment",
        icon: Microscope,
        color: "bg-blue-50 text-blue-600 border-blue-100",
        description: "Next-generation surgical instruments and operating room technology."
    },
    {
        title: "Neonatology",
        subtitle: "Baby Care",
        icon: Baby,
        color: "bg-amber-50 text-amber-600 border-amber-100",
        description: "Specialized life-support and monitoring systems for neonatal intensive care."
    },
    {
        title: "Radiology",
        subtitle: "Imaging Systems",
        icon: Scan,
        color: "bg-indigo-50 text-indigo-600 border-indigo-100",
        description: "High-precision diagnostic imaging solutions and radiological equipment."
    },
    {
        title: "Laboratory",
        subtitle: "Lab Analyzers",
        icon: FlaskConical,
        color: "bg-emerald-50 text-emerald-600 border-emerald-100",
        description: "Automated laboratory analyzers and diagnostic research equipment."
    },
    {
        title: "Forensic",
        subtitle: "Forensic Equipment",
        icon: Search,
        color: "bg-slate-100 text-slate-700 border-slate-200",
        description: "Specialized forensic investigation tools and high-precision laboratory systems."
    }
];

export const whyChooseUsLeft = [
    {
        icon: Award,
        title: "ISO Certified",
        desc: "ISO 13485 and international quality certifications",
    },
    {
        icon: TrendingUp,
        title: "Latest Technology",
        desc: "Cutting-edge medical equipment from top manufacturers",
    },
    {
        icon: Shield,
        title: "Warranty Support",
        desc: "Extended warranty and comprehensive maintenance plans",
    },
];

export const whyChooseUsRight = [
    {
        icon: Users,
        title: "Expert Team",
        desc: "Experienced professionals with deep medical knowledge",
    },
    {
        icon: Briefcase,
        title: "Flexible Solutions",
        desc: "Custom packages tailored to your institution's needs",
    },
    {
        icon: CheckCircle,
        title: "Quick Delivery",
        desc: "Fast delivery with professional installation service",
    },
];
