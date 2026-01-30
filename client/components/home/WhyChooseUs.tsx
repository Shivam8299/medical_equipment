import { whyChooseUsLeft, whyChooseUsRight } from "@/data/homeData";

export default function WhyChooseUs() {
    return (
        <section className="py-12 ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Why We Stand Out
                    </p>
                    <h2 className="text-3xl md:text-4xl text-foreground">
                        What Makes Us Different
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        {whyChooseUsLeft.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {whyChooseUsRight.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <item.icon className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
