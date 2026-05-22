import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactCta() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-accent py-20 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="0" r="40" fill="white" />
          <circle cx="100" cy="100" r="40" fill="white" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Start Your Project Today</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't wait — your brand transformation begins with one message. Reach out to our experts and let's create something extraordinary.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToForm}
            className="bg-white text-accent hover:bg-white/90 font-bold px-8 py-7 rounded-2xl text-lg shadow-2xl transition-all active:scale-95 group"
          >
            <MessageSquare className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
            Get a Free Quote
          </Button>
          
          <a href="tel:+254740653661">
            <Button 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-accent font-bold px-8 py-7 rounded-2xl text-lg transition-all active:scale-95"
            >
              <Phone className="mr-2 h-6 w-6" />
              Call Us: +254 740 653 661
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}