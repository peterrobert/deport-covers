import { CheckCircle2 } from "lucide-react";

const milestones = [
  { year: "2012", title: "Founded", desc: "Started as a small printing shop in Nairobi." },
  { year: "2015", title: "Expanded Services", desc: "Introduced large format and embroidery." },
  { year: "2018", title: "500th Project", desc: "Reached a major milestone in client delivery." },
  { year: "2023", title: "Industry Leader", desc: "Recognized for excellence in branding solutions." },
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-video lg:aspect-[4/5]">
              <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_cf2577e0e0_12368c3e3d225d8c.png" alt="printing company production floor quality craftsmanship Kenya" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/5 rounded-full -z-0"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                Crafting Visual Excellence <br className="hidden md:block" /> Since 2012
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Depot Covers Company (DCC) is a full-service branding and printing company based in Kenya, 
                dedicated to delivering high-quality visual solutions that elevate brands. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in transforming ideas into impactful physical experiences through precision 
                printing, creative execution, and professional installations. Our approach combines 
                innovation, craftsmanship, and attention to detail to ensure every project reflects excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-border bg-muted/30 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-xl font-bold text-primary">{item.year}</span>
                  </div>
                  <h4 className="font-bold text-primary text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}