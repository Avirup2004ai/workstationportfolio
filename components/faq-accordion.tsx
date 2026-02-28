import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQItem } from "@/lib/types";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full rounded-2xl border border-border bg-card/70 px-5">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
