import { MapPin, Map as MapIcon, ParkingCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactMap() {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-4">Find Us in Nairobi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located at Nairobi Textiles, Luthuli Avenue, Nairobi — easy to find in the heart of the city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2 relative">
            <div className="h-[400px] w-full rounded-2xl bg-primary overflow-hidden flex items-center justify-center relative shadow-2xl">
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] [background-size:20px_20px]" />
              </div>
              
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-6 animate-pulse">
                  <MapPin className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Nairobi Textiles, Luthuli Ave</h3>
                <p className="text-white/60 mb-6 max-w-xs">Nairobi, Kenya</p>
                <a href="https://maps.google.com/?q=Luthuli+Avenue+Nairobi" target="_blank" rel="noopener noreferrer">
                  <Button className="gradient-accent text-white font-bold px-8 py-6 rounded-xl hover:shadow-accent/40 shadow-xl transition-all">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { 
                icon: MapIcon, 
                title: "Centrally Located", 
                desc: "Easy access from all parts of the CBD and surroundings." 
              },
              { 
                icon: ParkingCircle, 
                title: "Ample Parking", 
                desc: "Secure parking spots available for clients visiting our office." 
              },
              { 
                icon: Users, 
                title: "Easy Public Access", 
                desc: "Just a short walk from major bus and matatu terminals." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-border/40 flex gap-4 items-start hover:border-accent/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}