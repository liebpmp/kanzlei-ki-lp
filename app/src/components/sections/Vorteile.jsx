import { motion } from "framer-motion";
import {
  Phone,
  Database,
  CalendarClock,
  MessageSquare,
  Receipt,
  Cog,
} from "lucide-react";

const benefits = [
  {
    icon: Phone,
    title: "Telefon-KI (Clara)",
    description:
      "Nimmt jeden Anruf an, beantwortet Standardfragen, bucht Termine, leitet nur Wichtiges weiter. 24/7, keine Wartezeiten.",
  },
  {
    icon: Database,
    title: "DATEV-Automatisierung",
    description:
      "Belege automatisch verarbeiten, Buchungsvorschläge generieren, FiBu-Vorbereitung auf Knopfdruck.",
  },
  {
    icon: CalendarClock,
    title: "Fristen-Management",
    description:
      "Automatische Überwachung aller Abgabefristen. Mandanten werden rechtzeitig erinnert, Unterlagen angefordert.",
  },
  {
    icon: MessageSquare,
    title: "Mandanten-Kommunikation",
    description:
      "Automatische Follow-ups, Statusupdates, Dokumentenanforderungen per Mail und WhatsApp.",
  },
  {
    icon: Receipt,
    title: "Vorbereitende Buchhaltung",
    description:
      "KI sortiert, kategorisiert und bereitet Belege vor — Ihre Mitarbeiter prüfen nur noch.",
  },
  {
    icon: Cog,
    title: "Individuelle Automatisierungen",
    description:
      "Jede Kanzlei hat eigene Abläufe. Wir analysieren und automatisieren genau Ihre Prozesse.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Vorteile() {
  return (
    <section id="vorteile" className="bg-cream-dark py-20 md:py-28 lg:py-32">
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
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              Ihre Vorteile
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Ein KI-Mitarbeiter, der nie krank wird
            <br className="hidden md:block" /> und nie kündigt
          </h2>
          <p className="text-[16px] leading-relaxed text-text-secondary max-w-[600px]">
            Schritt für Schritt automatisieren wir die zeitfressendsten Prozesse
            in Ihrer Kanzlei.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="flex flex-col gap-5 bg-white rounded-[2px] p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-center size-10 rounded-sm bg-cream">
                <benefit.icon className="size-5 text-maroon" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
