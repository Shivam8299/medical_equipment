import { Shield } from "lucide-react";

export default function Certifications() {
    const certifications = [
        "ISO 13485",
        "FDA Approved",
        "CE Certified",
        "AABB Certified",
    ];

    return (
        <section className="py-12  bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Certifications
                    </p>
                    <h2 className="text-3xl md:text-4xl text-foreground">
                        Trusted & Certified
                    </h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-xl border border-border text-center hover:border-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-primary" size={24} />
                            </div>
                            <p className="font-semibold text-foreground">{cert}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
