import { Heart, Quote, Building2, MapPin, Zap } from "lucide-react";
import { testimonials } from "@/data/homeData";

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Heart size={14} fill="currentColor" className="opacity-80" />
                        Success Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Trusted by Leading <span className="text-primary">Healthcare Providers</span>
                    </h2>
                    <p className="text-slate-600">
                        Join hundreds of hospitals and diagnostic centers across India that rely on our equipment for life-saving precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="relative group p-8 bg-white rounded-3xl border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
                                        <Building2 size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                                            <MapPin size={12} />
                                            {testimonial.location}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="flex-grow">
                                    <p className="text-slate-600 leading-relaxed italic relative z-10">
                                        "{testimonial.text}"
                                    </p>
                                </blockquote>

                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Zap key={s} size={12} className="text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Verified Partner</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
