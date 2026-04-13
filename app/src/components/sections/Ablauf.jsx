import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Potenzialanalyse",
    meta: "30 Min, kostenlos",
    description:
      "Wir analysieren Ihre Kanzlei und berechnen die mögliche Fördersumme.",
  },
  {
    number: "2",
    title: "Förderantrag",
    meta: "Wir übernehmen alles",
    description:
      "Wir übernehmen den kompletten Antrag — Sie müssen sich um nichts kümmern.",
  },
  {
    number: "3",
    title: "Schulung startet",
    meta: "2 Calls / Woche",
    description:
      "Ihre Mitarbeiter lernen KI-Anwendung in der Praxis. Der Rest läuft im Tagesgeschäft.",
  },
  {
    number: "4",
    title: "KI-Mitarbeiter live",
    meta: "Parallel zur Schulung",
    description:
      "Schritt für Schritt implementieren wir die Automatisierungen in Ihrer Kanzlei.",
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

export default function Ablauf() {
  return (
    <section id="ablauf" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-20"
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
        </motion.div>

        {/* Steps - centered numbers, V1-style layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-5 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-border-light" />
              )}

              {/* Big centered number */}
              <div className="relative z-10 flex items-center justify-center size-14 rounded-full bg-maroon text-white text-[22px] font-bold shadow-[0_4px_12px_rgba(162,30,41,0.25)]">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-bold text-text-primary leading-snug">
                  {step.title}
                </h3>
                <span className="text-[13px] font-semibold text-maroon uppercase tracking-wide">
                  {step.meta}
                </span>
                <p className="text-[15px] leading-relaxed text-text-secondary mt-1 max-w-[240px] mx-auto">
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
