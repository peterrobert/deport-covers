import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedProject() {
  const features = [
    "Logo & Brand Identity",
    "Storefront Signage (x3 locations)",
    "Staff Uniforms (150 pieces)",
    "Marketing Collateral",
  ];

  return (
    <section className="bg-primary py-16 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img className="w-full h-auto aspect-[4/3] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_88059966e9_7d708cf4e71f238b.png" alt="award-winning complete brand identity signage printing project Kenya" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Featured Project
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Complete Brand Identity — RetailHub Kenya
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Full-scope branding project including logo design, signage, uniforms, stationery, and promotional materials for a leading retail chain.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 h-auto text-lg font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1">
              View Similar Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}