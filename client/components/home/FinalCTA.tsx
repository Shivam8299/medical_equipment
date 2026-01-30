import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
    return (
        <section className="py-12  bg-gradient-to-r from-primary via-secondary to-primary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl mb-6">
                    Ready to Upgrade Your Healthcare Facility?
                </h2>
                <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg">
                    Join hundreds of hospitals and diagnostic centers that trust Jolly Technocrats for premium medical equipment solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div
                        className="inline-flex items-center justify-center px-8 py-3.5 bg-white/90 text-primary font-semibold rounded-lg cursor-default"
                    >
                        Institutional Solutions
                        <ArrowRight className="ml-2" size={20} />
                    </div>
                    <div
                        className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/50 text-white/90 font-semibold rounded-lg cursor-default"
                    >
                        Get a Quote
                    </div>
                </div>
            </div>
        </section>
    );
}
