import { extendedTestimonials } from "@/data/homeData";

export default function ExtendedTestimonials() {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Success Stories
                    </p>
                    <h2 className="text-3xl md:text-4xl text-foreground">
                        What Our Partners Say
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {extendedTestimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-white rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-primary font-semibold">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.organization}
                                    </p>
                                </div>
                            </div>
                            <p className="text-muted-foreground italic">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
