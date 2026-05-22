import { Link } from "react-router-dom";
import { MessageSquare, PenTool, Printer, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    desc: "Understanding your brand, goals, and specific printing requirements.",
    icon: MessageSquare,
  },
  {
    title: "Design & Concept",
    desc: "Creative direction and visual layouts aligned with your corporate identity.",
    icon: PenTool,
  },
  {
    title: "Production",
    desc: "Using high-quality materials and precision execution to bring designs to life.",
    icon: Printer,
  },
  {
    title: "Installation & Delivery",
    desc: "Professional finishing and timely delivery with attention to every detail.",
    icon: Truck,
  },
];

export default function ProcessPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-accent"></div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">How We Work</span>
            <div className="h-0.5 w-8 bg-accent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Simple. Seamless. Successful.
          </h2>
          <p className="text-muted-foreground text-lg">
            We've refined our process to ensure efficiency and excellence at every stage of your project.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  {/* Step Number Circle */}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center shadow-md">
                      {i + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/process" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
            See Our Full Process <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}