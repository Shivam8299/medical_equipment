import { ArrowRight, Briefcase, TrendingUp, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section id="about" className="py-12 bg-white relative overflow-hidden">
            {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform origin-right -z-0" /> */}

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-lg group-hover:bg-primary/10 transition-colors duration-500" />
                        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-white/20 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
                            <img
                                src="/aboutImg.jpg"
                                alt="About Jolly Technocrats"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}

                            {/* Floating Experience Badge */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white shadow-xl">
                                <p className="text-4xl font-bold mb-1">50+</p>
                                <p className="text-sm font-medium uppercase tracking-widest opacity-90">Years of Dedicated Excellence</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                                <Briefcase size={14} />
                                About Our Legacy
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Trusted Medical Equipment Partner <span className="text-primary">Since 1975</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                                For nearly 50 years, Jolly Technocrats has been at the forefront of medical equipment distribution in India. We pride ourselves on delivering quality products and exceptional service to hospitals, diagnostic centers, and healthcare providers.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Industry Experience</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Decades of deep-rooted expertise in medical technology.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Quality Certified</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        All products meet rigorous international standards.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group sm:col-span-2">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Wide Coverage</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Strategically serving hospitals and specialized clinics across the entire nation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div
                                className="inline-flex items-center justify-center px-10 py-4 bg-slate-800 text-white font-bold rounded-xl cursor-default opacity-90"
                            >
                                Explore Our Portfolio
                                <ArrowRight className="ml-2" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
