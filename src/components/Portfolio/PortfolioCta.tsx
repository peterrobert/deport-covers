import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PortfolioCta() {
  return (
    <section className="gradient-accent py-16 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
          Start Your Project Today
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
          Join hundreds of satisfied clients who trust DCC for their branding needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button className="w-full bg-white text-accent hover:bg-white/90 px-8 py-7 h-auto text-lg font-bold rounded-xl shadow-xl transition-all hover:-translate-y-1">
              Get a Free Quote
            </Button>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-7 h-auto text-lg font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1">
              View Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}