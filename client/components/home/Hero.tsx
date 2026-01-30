import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { brands } from "@/data/homeData";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 pb-16 md:pb-24 ">
            <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10 grid lg:grid-cols-2 gap-12 items-stretch">
                {/* Left Column - Content & Buttons */}
                <div className="text-left space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-primary/20 shadow-sm mb-4 group cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-primary uppercase">
                                Medical Equipment Solutions
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6 leading-tight">
                            Comprehensive Solutions Across All Medical Specialties
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mb-8">
                            For nearly 50 years, Jolly Technocrats has provided cutting-edge medical equipment to every healthcare specialty across India.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div
                            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-primary/80 to-primary/70 text-white font-semibold rounded-lg cursor-default"
                        >
                            Request a Quote
                            <ArrowRight className="ml-2" size={20} />
                        </div>
                        <div
                            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary/50 text-primary/70 font-semibold rounded-lg cursor-default"
                        >
                            View All Products
                            <Zap className="ml-2" size={20} />
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative group h-full">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition-all duration-700 bg-slate-50/50 backdrop-blur-sm h-full flex items-center justify-center">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fddca040706ff4edd8fe00119641c13ad%2F234b901d8c8c461d87529bfa4fcea393?format=webp&width=800&height=1200"
                            alt="Medical Equipment Display"
                            className="max-h-full w-auto object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-200/5 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Centered Integrated Slider */}
            <div className="mt-8 py-6">
                <div className="container mx-auto px-4">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            dragFree: true,
                        }}
                        plugins={[
                            AutoScroll({
                                speed: 1,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {brands.map((brand, idx) => (
                                <CarouselItem key={idx} className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
                                    <div className="flex items-center justify-center p-2 bg-white rounded-xl border border-border shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group h-24 overflow-hidden">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="max-w-[90%] max-h-[85%] object-contain transition-all duration-300"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            {/* Statistics */}
            <div className="container mx-auto px-4 mt-8">
                <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-2xl sm:text-4xl font-bold text-primary mb-1">50+</p>
                        <p className="text-[10px] sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Brand Partners
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-4xl font-bold text-primary mb-1">200+</p>
                        <p className="text-[10px] sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Product Categories
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl sm:text-4xl font-bold text-primary mb-1">500+</p>
                        <p className="text-[10px] sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            Healthcare Clients
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
