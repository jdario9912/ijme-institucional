import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/libs/faqs";

const Faq = () => {
  return (
    <Accordion type="single" collapsible>
      {faqs.map(({ pregunta, respuesta }, i) => (
        <AccordionItem value={`item-${i}`} key={`item-${i}`}>
          <AccordionTrigger>{pregunta}</AccordionTrigger>
          <AccordionContent>{respuesta}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
