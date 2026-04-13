import { motion } from "framer-motion";
import { GraduationCap, Banknote, Bot, Check } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    badge: "0 € für Sie",
    badgeColor: "bg-emerald text-white",
    title: "Schulung",
    subtitle: "100% gefördert",
    items: [
      "IHK-zertifizierte KI-Weiterbildung",
      "Speziell für die Steuerbranche",
      "720 Unterrichtseinheiten",
      "Abschluss: IHK-Fachkraft für KI",
    ],
    highlight: "Der Staat übernimmt 100% der Schulungskosten",
  },
  {
    icon: Banknote,
    badge: "75% zurück",
    badgeColor: "bg-emerald text-white",
    title: "Lohnkostenerstattung",
    subtitle: "75% erstattet",
    items: [
      "75% der Lohnkosten werden erstattet",
      "Für die gesamte Maßnahme-Dauer",
      "6–12 Monate Laufzeit",
    ],
    highlight: "Kanzlei mit 10 MA: bis 150.000 €+ Erstattung",
  },
  {
    icon: Bot,
    badge: "0 € effektiv",
    badgeColor: "bg-emerald text-white",
    title: "KI-Implementierung",
    subtitle: "Aus Lohnkostenzuschuss finanziert",
    items: [
      "KI-Mitarbeiter im Wert von 50.000–100.000 €",
      "Finanziert durch den Lohnkostenzuschuss",
      "Schritt-für-Schritt-Implementierung",
    ],
    highlight: "Effektiv kostenlos für Ihre Kanzlei",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Foerderung() {
  return (
    <section id="foerderung" className="bg-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald" />
            <span className="text-[13px] font-medium text-text-white-muted uppercase tracking-wider">
              Komplett kostenlos
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-white">
            Der Staat zahlt — Sie profitieren
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[600px]">
            Über das Qualifizierungschancengesetz (QCG) werden Schulung und
            Implementierung vollständig finanziert.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="flex flex-col bg-white/[0.07] border border-white/[0.1] rounded-[2px] p-7 gap-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center size-10 rounded-sm bg-white/10">
                  <card.icon className="size-5 text-white" />
                </div>
                <span
                  className={`text-[12px] font-semibold px-2.5 py-1 rounded-sm ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[18px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] text-text-white-muted">
                  {card.subtitle}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[14px] leading-relaxed text-white/80"
                  >
                    <Check className="size-4 text-emerald shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/[0.08]">
                <p className="text-[13px] font-medium text-emerald">
                  {card.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
