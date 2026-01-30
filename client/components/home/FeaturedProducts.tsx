import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProducts } from "@/data/homeData";

export default function FeaturedProducts() {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Featured Products
                    </p>
                    <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                        Quality Medical Equipment
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore our curated selection of premium medical equipment
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.slice(0, 3).map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden bg-slate-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm rounded-full text-[10px] font-bold text-primary uppercase tracking-wider border border-primary/10">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div
                                        className="inline-flex items-center text-sm font-bold text-primary opacity-70 cursor-default"
                                    >
                                        View Details
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div
                        className="inline-flex items-center px-10 py-4 bg-primary/80 text-white font-bold rounded-2xl cursor-default opacity-80"
                    >
                        View All Products
                        <ArrowRight className="ml-2" size={24} />
                    </div>
                </div>
            </div>
        </section>
    );
}
