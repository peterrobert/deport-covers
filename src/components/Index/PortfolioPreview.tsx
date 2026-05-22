import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

const projects = [
  {
    title: "Corporate Fleet Branding",
    category: "Branding",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9d2f1139a1_ba8d55f2bafd58c1.png",
  },
  {
    title: "Event Signage Kit",
    category: "Signages",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_8e1031693e_7db855d98276e1e5.png",
  },
  {
    title: "Premium Product Packaging",
    category: "Printing",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_6b3fbac979_d893184971a11e3e.png",
  },
  {
    title: "Uniform Embroidery",
    category: "Embroidery",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a518e32689_a5566f0e314c50c8.png",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Recent Projects That Speak for Themselves
            </h2>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl hidden md:flex">
            <Link to="/portfolio" className="flex items-center gap-2">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white shadow-md aspect-[4/5]">
              <img src={project.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block self-start px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight mb-4">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center self-end border border-white/30">
                  <Search className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl w-full">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}