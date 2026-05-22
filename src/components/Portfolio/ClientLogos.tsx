export default function ClientLogos() {
  const clients = [
    { name: "RetailHub", initial: "R" },
    { name: "TechVault", initial: "T" },
    { name: "BizPro", initial: "B" },
    { name: "NairobiEats", initial: "N" },
    { name: "KenyaFresh", initial: "K" },
    { name: "SafariTours", initial: "S" },
  ];

  return (
    <section className="bg-muted/30 py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-xl font-bold text-muted-foreground mb-10 tracking-wide uppercase">
          Trusted by Businesses Across Kenya
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-border shadow-sm hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg group-hover:from-accent group-hover:to-orange-600 transition-all">
                {client.initial}
              </div>
              <span className="font-bold text-primary tracking-tight">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}