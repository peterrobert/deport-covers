import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="gradient-accent py-16 md:py-24 relative overflow-hidden">
       {/* Pattern Background */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-8 h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border-r border-white h-full"></div>
            ))}
          </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to Build Your Brand With Us?
          </h2>
          <p className="text-xl text-white/90">
            Partner with Kenya's trusted branding and printing experts.
            We turn your vision into high-impact reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold h-14 px-10 rounded-xl shadow-xl shadow-black/10 transition-transform active:scale-95">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold h-14 px-10 rounded-xl transition-transform active:scale-95">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}