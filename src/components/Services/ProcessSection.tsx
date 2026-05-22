import { Search, Layout, Settings, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-6 h-6 text-accent" />,
    title: "Consultation",
    desc: "Discussing your vision and requirements."
  },
  {
    icon: <Layout className="w-6 h-6 text-accent" />,
    title: "Design",
    desc: "Creating visual concepts for your brand."
  },
  {
    icon: <Settings className="w-6 h-6 text-accent" />,
    title: "Production",
    desc: "High-quality printing and manufacturing."
  },
  {
    icon: <Truck className="w-6 h-6 text-accent" />,
    title: "Delivery",
    desc: "Final inspection and prompt delivery."
  }
];

export default function ProcessSection() {
  return (
    <section className="bg-primary-dark py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">How We Bring Your Vision to Life</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:-translate-y-1">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}