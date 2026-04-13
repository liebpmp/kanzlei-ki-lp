import { motion } from "framer-motion";
import { Check, ClipboardList, FolderOpen, Clock } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Kanzlei-spezifische Agenten konfigurieren",
  "Training auf Ihre Mandantendaten & Prozesse",
  "Automatisierte Workflows aktivieren",
  "Performance-Monitoring einrichten",
];

const agents = [
  {
    icon: ClipboardList,
    name: "Bescheid-Agent",
    status: "Live",
    statusColor: "bg-emerald",
    textColor: "text-emerald",
    live: true,
  },
  {
    icon: FolderOpen,
    name: "Beleg-Agent",
    status: "Live",
    statusColor: "bg-emerald",
    textColor: "text-emerald",
    live: true,
  },
  {
    icon: Clock,
    name: "Fristen-Agent",
    status: "Wird trainiert...",
    statusColor: "bg-amber-400",
    textColor: "text-amber-400",
    live: false,
  },
];

export default function AgentDeploy() {
  return (
    <section id="agent-deploy" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Phase pill */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-maroon text-white text-[13px] font-bold">
                03
              </span>
              <span className="text-[13px] font-semibold text-maroon uppercase tracking-wider">
                Aktivierung
              </span>
              <span className="text-[12px] font-medium text-text-secondary bg-black/[0.05] px-2.5 py-1 rounded-full">
                Woche 4–8
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary font-heading">
              Trainierte KI-Agenten einsetzen
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] leading-relaxed text-text-secondary max-w-[480px]">
              Maßgeschneiderte KI-Agenten werden für Ihre Kanzlei konfiguriert —
              trainiert auf Ihre Mandantendaten, Prozesse und interne Sprache.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mt-2">
              {checklist.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-text-primary"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, ease, delay: 0.2 + i * 0.1 }}
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-maroon/10 shrink-0">
                    <Check className="w-3 h-3 text-maroon" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column — Agent Board Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[12px] text-white/40 ml-2 font-mono">
                  steuerclara — agenten
                </span>
              </div>

              {/* Agent Cards */}
              <div className="bg-[#0f0f0f] p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {agents.map((agent, i) => (
                    <motion.div
                      key={agent.name}
                      className="flex flex-col items-center gap-3 bg-white/[0.05] border border-white/[0.08] rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.3 }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.08]">
                        <agent.icon className="w-5 h-5 text-white/70" />
                      </div>
                      <span className="text-[13px] font-semibold text-white text-center">
                        {agent.name}
                      </span>
                      <span className={`flex items-center gap-1.5 text-[11px] font-medium ${agent.textColor}`}>
                        <motion.span
                          className={`w-1.5 h-1.5 rounded-full ${agent.statusColor}`}
                          animate={
                            agent.live
                              ? { opacity: [1, 0.4, 1] }
                              : { opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }
                          }
                          transition={{
                            duration: agent.live ? 2 : 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        {agent.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-4 text-[11px]">
                    <span className="text-emerald font-medium">2 Aktiv</span>
                    <span className="text-amber-400 font-medium">
                      1 In Training
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-white/30">67%</span>
                    <div className="w-20 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-maroon rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "67%" }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1.2, ease, delay: 1.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
