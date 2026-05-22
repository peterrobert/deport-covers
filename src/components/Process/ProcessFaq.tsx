import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Depending on scope, most projects take 5–15 business days from approval to delivery."
  },
  {
    question: "Do you offer design services if I don't have artwork?",
    answer: "Yes! Our in-house design team handles everything from concept to final artwork."
  },
  {
    question: "What information do I need to provide to get started?",
    answer: "Just your brand brief, preferred colors, logo files (if available), and project requirements."
  },
  {
    question: "Do you offer bulk order discounts?",
    answer: "Absolutely. We offer competitive pricing for bulk orders across all our services."
  },
  {
    question: "What file formats do you accept for printing?",
    answer: "We accept PDF, AI, PSD, PNG, and JPEG files. High-resolution files (300 DPI+) are recommended."
  },
  {
    question: "Can I get a sample before the full production run?",
    answer: "Yes, we can provide physical samples or proofs before full production upon request."
  }
];

export default function ProcessFaq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl font-bold">Common Questions About Our Process</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-4 overflow-hidden bg-white hover:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-lg text-left py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}