import { MessageCircle, DollarSign, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "You're kept informed at every stage with regular updates and approvals before we move forward."
  },
  {
    icon: DollarSign,
    title: "No Hidden Costs",
    description: "Transparent pricing from the initial consultation to final delivery, with no surprises on your invoice."
  },
  {
    icon: BadgeCheck,
    title: "Quality Guaranteed",
    description: "Every project undergoes rigorous quality control checks before it leaves our production floor."
  }
];

export default function ProcessBenefits() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}