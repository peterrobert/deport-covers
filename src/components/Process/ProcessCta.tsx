import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProcessCta() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] gradient-accent p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the first step — reach out for a free consultation with our team and let's bring your creative vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-accent font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
            >
              Start the Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}