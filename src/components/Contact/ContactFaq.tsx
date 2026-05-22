import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    q: "How quickly will I get a quote?",
    a: "Within 24 hours of submitting your inquiry. For urgent requests, please give us a call directly."
  },
  {
    q: "Is the consultation free?",
    a: "Yes, initial consultations are completely free. We discuss your project and provide a no-obligation quote."
  },
  {
    q: "Do you work outside Nairobi?",
    a: "Yes, we serve clients across Kenya. We can arrange for shipping or delivery of finished items to your location."
  }
];

export default function ContactFaq() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary mb-4">Quick Answers</h2>
          <p className="text-muted-foreground">Some of the most common questions our clients ask.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <HelpCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}