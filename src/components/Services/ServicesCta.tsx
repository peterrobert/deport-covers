import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function ServicesCta() {
  return (
    <section className="gradient-accent py-16 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Start Your Branding Project?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Get in touch with our team and receive a free customized quote within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold px-8 h-14 text-base shadow-xl">
              Get a Free Quote
            </Button>
          </Link>
          <a href="tel:+254740653661">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold px-8 h-14 text-base">
              <PhoneCall className="mr-2 w-5 h-5" />
              Call Us Now: +254 740 653 661
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}