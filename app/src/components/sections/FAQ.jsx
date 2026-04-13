import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Was kostet die Schulung?",
    answer: "Nichts. Bei Kanzleien mit bis zu 50 Mitarbeitern übernimmt der Staat 100% der Schulungskosten über das Qualifizierungschancengesetz.",
  },
  {
    question: "Fallen meine Mitarbeiter im Tagesgeschäft aus?",
    answer: "Kaum. Nur 2 kurze Live-Calls pro Woche, der Rest ist Praxis direkt an Ihren eigenen Systemen. Ihre Mitarbeiter arbeiten ganz normal weiter — nur mit KI-Fokus.",
  },
  {
    question: "Was ist das Qualifizierungschancengesetz?",
    answer: "Ein Förderprogramm des Bundes. Unternehmen mit bis zu 49 Mitarbeitern bekommen 100% der Schulungskosten und 75% der Lohnkosten erstattet — für die gesamte Dauer der Maßnahme.",
  },
  {
    question: "Was kann der KI-Mitarbeiter konkret?",
    answer: "Telefon-KI (Clara), DATEV-Automatisierung, Belegverarbeitung, Fristen-Management, Mandantenkommunikation und vorbereitende Buchhaltung — alles, was heute noch manuell läuft.",
  },
  {
    question: "Wie lange dauert der Förderantrag?",
    answer: "Ca. 4–6 Wochen. Wir übernehmen den kompletten Prozess für Sie — von der Antragstellung bis zur Bewilligung.",
  },
  {
    question: "Kann ich auch ohne Förderung starten?",
    answer: "Ja! Viele Kanzleien entscheiden sich direkt für die Implementierung. Die Förderung ist ein Bonus, kein Muss.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Häufige Fragen
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-sm border border-border-light px-6 data-[state=open]:border-maroon/20"
            >
              <AccordionTrigger className="text-[15px] font-medium text-text-primary text-left py-4 cursor-pointer hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-text-secondary pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
