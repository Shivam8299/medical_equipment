import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <h1 className="text-7xl font-bold text-primary mb-2">404</h1>
            <p className="text-3xl font-semibold text-foreground">Page Not Found</p>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
