import { Button } from "@/components/ui/button";

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  count: number;
}

export default function PortfolioFilter({
  categories,
  activeCategory,
  onCategoryChange,
  count,
}: PortfolioFilterProps) {
  return (
    <section className="bg-white py-10 border-b border-border px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => onCategoryChange(category)}
                className={`rounded-full px-6 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent hover:bg-accent/90 text-white border-transparent"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Result Count */}
          <p className="text-muted-foreground text-sm font-medium">
            Showing <span className="text-foreground font-bold">{count}</span> projects
          </p>
        </div>
      </div>
    </section>
  );
}