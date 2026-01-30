import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
// import Statistics from "@/components/home/Statistics";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import ExtendedTestimonials from "@/components/home/ExtendedTestimonials";
import Catalogs from "@/components/home/Catalogs";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";
import * as React from "react";

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesOverview />
      <FeaturedProducts />
      {/* <Statistics /> */}
      <ProductCategories />
      <WhyChooseUs />
      <Certifications />
      <ExtendedTestimonials />
      <Catalogs />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
