import { Shield } from "lucide-react";
import { services } from "@/data/homeData";

export default function ServicesOverview() {
    return (
        <section className="py-12 bg-slate-50/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Shield size={14} className="fill-primary" />
                        Our Excellence
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Comprehensive Healthcare <span className="text-primary">Solutions</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        We provide end-to-end medical equipment solutions with professional support and expertise developed over decades of industry leadership.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group p-8 bg-white rounded-2xl border border-border shadow-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                                <service.icon size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
