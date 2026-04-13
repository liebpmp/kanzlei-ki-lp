import { motion } from "framer-motion";
import { Search, FileCheck, BookOpen, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Potenzialanalyse",
    meta: "30 Min, kostenlos",
    description:
      "Wir analysieren Ihre Kanzlei und berechnen die mögliche Fördersumme.",
  },
  {
    icon: FileCheck,
    number: "2",
    title: "Förderantrag",
    meta: "Wir übernehmen alles",
    description:
      "Wir übernehmen den kompletten Antrag — Sie müssen sich um nichts kümmern.",
  },
  {
    icon: BookOpen,
    number: "3",
    title: "Schulung startet",
    meta: "2 Calls / Woche",
    description:
      "Ihre Mitarbeiter lernen KI-Anwendung in der Praxis. Der Rest läuft im Tagesgeschäft.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "KI-Mitarbeiter live",
    meta: "Parallel zur Schulung",
    description:
      "Schritt für Schritt implementieren wir die Automatisierungen in Ihrer Kanzlei.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Ablauf() {
  return (
    <section id="ablauf" className="bg-cream py-20 md:py-28 lg:py-32">
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
              So einfach geht's
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            In 4 Schritten zum KI-Mitarbeiter
          </h2>
          <p className="text-[16px] leading-relaxed text-text-secondary max-w-[600px]">
            Von der ersten Analyse bis zum laufenden KI-System — wir begleiten
            Sie durch den gesamten Prozess.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="flex flex-col items-start gap-4 relative"
            >
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4 w-full">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex items-center justify-center size-10 rounded-full bg-maroon text-white text-[15px] font-semibold shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-border-light" />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 md:pr-4">
                <h3 className="text-[16px] font-semibold text-text-primary">
                  {step.title}
                </h3>
                <span className="text-[12px] font-medium text-maroon">
                  {step.meta}
                </span>
                <p className="text-[14px] leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
