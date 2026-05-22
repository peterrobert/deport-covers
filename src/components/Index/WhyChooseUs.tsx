import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "High-Quality Finishing",
      desc: "Superior materials and expert craftsmanship ensure every project looks premium.",
    },
    {
      title: "Creative & Customized Solutions",
      desc: "Tailored designs that match your brand's unique identity and business goals.",
    },
    {
      title: "Professional Workmanship",
      desc: "Our skilled team pays meticulous attention to every detail, from design to delivery.",
    },
    {
      title: "Timely Project Delivery",
      desc: "We understand your deadlines and pride ourselves on on-time delivery, every time.",
    },
    {
      title: "Affordable & Competitive Pricing",
      desc: "Get great value and premium quality without breaking your marketing budget.",
    },
    {
      title: "Reliable After-Service Support",
      desc: "Our relationship doesn't end at delivery; we stand behind every project we complete.",
    },
  ];

  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative accent blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img className="w-full aspect-video lg:aspect-square object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ef3ccd1a6f_a804a375e2fb6e1f.png" alt="Close up of high quality printing process on textile with vivid colors and sharp details" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-black text-xl italic leading-none">Best<br />Choice</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Why DCC</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight">
              Built on Quality.<br />Driven by Creativity.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}