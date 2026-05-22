import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Layers, 
  Gift, 
  Megaphone, 
  Maximize, 
  Scissors, 
  MapPin, 
  Palette,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Paper Printing",
    desc: "Quality business cards, flyers, and stationery.",
    icon: FileText,
  },
  {
    title: "Screen Printing",
    desc: "Durable prints on apparel and various fabrics.",
    icon: Layers,
  },
  {
    title: "Promotional Items",
    desc: "Customized pens, mugs, and corporate gifts.",
    icon: Gift,
  },
  {
    title: "Advertisement Solutions",
    desc: "Strategic indoor and outdoor ad placements.",
    icon: Megaphone,
  },
  {
    title: "Large Format Printing",
    desc: "High-res banners, roll-ups, and posters.",
    icon: Maximize,
  },
  {
    title: "Embroidery",
    desc: "Professional stitched branding for uniforms.",
    icon: Scissors,
  },
  {
    title: "Signages",
    desc: "Eye-catching 3D signs and lightboxes.",
    icon: MapPin,
  },
  {
    title: "Branding",
    desc: "Complete visual identity and vehicle wraps.",
    icon: Palette,
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">What We Offer</span>
            <div className="h-0.5 w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Complete Branding & Printing Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From small-scale prints to large-scale corporate branding, we provide end-to-end services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <Link 
              key={i} 
              to="/services" 
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent relative overflow-hidden"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
              
              {/* Hover Accent Border */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl px-8 group">
            <Link to="/services" className="flex items-center gap-2">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}