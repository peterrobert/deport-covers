import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ProcessHero() {
  return (
    <section className="relative gradient-hero py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav className="flex justify-center items-center space-x-2 text-sm text-white/70 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Process</span>
        </nav>

        {/* Eyebrow */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
          <span className="text-accent font-semibold tracking-wide text-sm uppercase">Our Process</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          How We Work
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          A streamlined, transparent process designed to bring your vision to life — from first conversation to final delivery.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {["Simple", "Transparent", "Efficient", "Results-Driven"].map((item) => (
            <span
              key={item}
              className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}