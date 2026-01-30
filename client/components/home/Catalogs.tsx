import { ArrowRight } from "lucide-react";

export default function Catalogs() {
    const resources = [
        { title: "Full Product Catalog", desc: "Complete equipment directory" },
        { title: "Technical Specs", desc: "Detailed specifications" },
        { title: "Pricing Guide", desc: "Current pricing information" },
    ];

    return (
        <section className="py-12  bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Resources
                    </p>
                    <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                        Download Our Catalogs
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive product documentation and technical specifications
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {resources.map((resource, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-xl border border-border text-center cursor-default"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <ArrowRight size={24} className="text-primary/70" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">
                                {resource.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{resource.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
