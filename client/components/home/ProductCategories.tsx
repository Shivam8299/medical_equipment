import { Zap, ArrowRight } from "lucide-react";
import { productCategories } from "@/data/homeData";

export default function ProductCategories() {
    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Zap size={14} className="fill-primary" />
                        Specialized Solutions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Explore Our <span className="text-primary">Specializations</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Complete medical equipment solutions across multiple healthcare specialties, engineered for excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 bg-white rounded-[2rem] border border-slate-100 cursor-default overflow-hidden"
                        >
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                                <category.icon size={120} />
                            </div>

                            <div className={`w-14 h-14 rounded-2xl ${category.color} border flex items-center justify-center mb-6`}>
                                <category.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                {category.title}
                            </h3>
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                                {category.subtitle}
                            </p>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {category.description}
                            </p>

                            <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider gap-2">
                                View Solutions
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
