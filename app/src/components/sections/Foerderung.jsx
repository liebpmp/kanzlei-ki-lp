import { GraduationCap, Banknote, Bot, Check } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    badge: "0€ für Sie",
    badgeColor: "bg-emerald text-white",
    title: "Schulung",
    subtitle: "100% gefördert",
    items: [
      "IHK-zertifizierte KI-Weiterbildung",
      "Speziell für die Steuerbranche",
      "720 Unterrichtseinheiten",
      'Abschluss: \u201EIHK-Fachkraft KI Steuerbranche\u201C',
    ],
  },
  {
    icon: Banknote,
    badge: "75% zurück",
    badgeColor: "bg-emerald text-white",
    title: "Lohnkosten",
    subtitle: "75% erstattet",
    items: [
      "75% der Lohnkosten erstattet",
      "Für die gesamte Maßnahme-Dauer",
      "Kanzlei mit 10 MA: bis 150.000€+ Erstattung",
    ],
  },
  {
    icon: Bot,
    badge: "0€ effektiv",
    badgeColor: "bg-emerald text-white",
    title: "KI-Implementierung",
    subtitle: "Aus Lohnkostenzuschuss finanziert",
    items: [
      "Mit dem Lohnkostenzuschuss finanziert",
      "KI-Mitarbeiter im Wert von 50.000–100.000€",
      "Effektiv kostenlos für Ihre Kanzlei",
    ],
  },
];

export default function Foerderung() {
  return (
    <section id="foerderung" className="bg-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">Förderung</span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Der Staat zahlt — Sie profitieren
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[560px]">
            Über das Qualifizierungschancengesetz (QCG) werden Schulung UND Implementierung finanziert.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-white/[0.05] border border-border-dark rounded-sm p-7 gap-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center size-10 rounded-sm bg-white/10">
                  <card.icon className="size-5 text-white" />
                </div>
                <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-sm ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-semibold text-white">{card.title}</h3>
                <p className="text-[14px] text-text-white-muted">{card.subtitle}</p>
              </div>

              <ul className="flex flex-col gap-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/80">
                    <Check className="size-4 text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
