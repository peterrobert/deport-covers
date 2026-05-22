import { CheckCircle2 } from "lucide-react";

const reasons = [
  "High-quality finishing",
  "Creative solutions",
  "Professional workmanship",
  "Timely delivery",
  "Affordable pricing",
  "After-service support"
];

export default function WhyChooseUs() {
  return (
    <section className="bg-secondary/30 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-primary mb-6">Why Businesses Trust DCC</h2>
            <p className="text-muted-foreground mb-8">
              We combine years of industry expertise with state-of-the-art equipment to deliver branding results that actually work for your business growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/90 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl transform rotate-2"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden border border-border">
              <img className="w-full aspect-[4/3] object-cover rounded-2xl shadow-inner" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_c149a40b78_e48409a1286b133c.png" alt="professional branding printing company team Kenya office" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}