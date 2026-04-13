import { Phone, Database, CalendarClock, MessageSquare, Receipt, Cog } from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "Telefon-KI (Clara)",
    description: "Nimmt jeden Anruf an, qualifiziert Anliegen, bucht Termine. 24/7, keine Wartezeiten.",
  },
  {
    icon: Database,
    title: "DATEV-Automatisierung",
    description: "Belege verarbeiten, Buchungsvorschläge generieren, FiBu-Vorbereitung automatisch.",
  },
  {
    icon: CalendarClock,
    title: "Fristen-Management",
    description: "Automatische Überwachung aller Abgabefristen. Rechtzeitige Mandanten-Erinnerungen.",
  },
  {
    icon: MessageSquare,
    title: "Mandanten-Kommunikation",
    description: "Automatische Follow-ups, Statusupdates und Dokumentenanforderungen per Mail.",
  },
  {
    icon: Receipt,
    title: "Vorbereitende Buchhaltung",
    description: "KI sortiert, kategorisiert und bereitet Belege vor. Ihre MFAs prüfen nur noch.",
  },
  {
    icon: Cog,
    title: "Individuelle Automatisierungen",
    description: "Jede Kanzlei hat eigene Abläufe — wir analysieren und automatisieren genau Ihre Prozesse.",
  },
];

export default function Vorteile() {
  return (
    <section id="vorteile" className="bg-cream-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">Ihre Vorteile</span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Mehr Zeit für Beratung. Weniger Verwaltung.
          </h2>
        </div>

        {/* 3-col top row, 3-col bottom row (varied sizing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-5 bg-white rounded-sm p-7"
            >
              <div className="flex items-center justify-center size-10 rounded-sm bg-cream">
                <benefit.icon className="size-5 text-maroon" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold text-text-primary">{benefit.title}</h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
