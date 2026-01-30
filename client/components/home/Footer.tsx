import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-foreground text-white py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-semibold mb-4">About</h3>
                        <p className="text-sm text-white/70">
                            Leading medical equipment provider since 1975
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Products</h3>
                        <ul className="space-y-2 text-sm text-white/70 cursor-default">
                            <li><span>Diagnostic Equipment</span></li>
                            <li><span>Monitoring Systems</span></li>
                            <li><span>Imaging Solutions</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-white/70 cursor-default">
                            <li><span>Installation</span></li>
                            <li><span>Training</span></li>
                            <li><span>Support</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-white/70 cursor-default">
                            <li><span>Privacy Policy</span></li>
                            <li><span>Terms of Service</span></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8">
                    <p className="text-sm text-white/70 text-center">
                        &copy; 2024 Jolly Technocrats. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
