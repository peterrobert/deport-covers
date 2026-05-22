import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Signage",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
    count: 4,
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_80a6778cb0_3c3b00076637d386.png"},
  {
    name: "Printing",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
    count: 4,
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ede9124b76_5350da15031e8ec4.png"},
  {
    name: "Apparel Branding",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
    count: 3,
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b707f0b42d_e48d631e4f9f37e6.png"},
  {
    name: "Promotional Items",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png",
    count: 2,
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ad64176c39_945c46a52ea8723d.png"}
];

export default function CategoryShowcase() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-4">Browse by Category</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img src={cat.img_url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{cat.name}</h3>
                    <div className="bg-accent/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block">
                      {cat.count} Projects
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}