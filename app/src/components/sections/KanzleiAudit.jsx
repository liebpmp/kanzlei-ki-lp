import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Bestehende Workflows & Tools erfassen",
  "DATEV-Integration prüfen",
  "KI-Potenziale identifizieren & priorisieren",
  "Individuellen Implementierungsplan erstellen",
];

const tableRows = [
  { tool: "DATEV Unternehmen online", status: "Verbunden", statusOk: true, potential: "87%" },
  { tool: "DMS (Dokumenten-Management)", status: "Verbunden", statusOk: true, potential: "92%" },
  { tool: "E-Mail / Outlook", status: "Verbunden", statusOk: true, potential: "76%" },
  { tool: "Mandantenportal", status: "Wird geprüft", statusOk: false, potential: "—" },
];

function MacWindowFrame({ title, children }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-black/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[12px] text-white/40 ml-2 font-mono">{title}</span>
      </div>
      {/* Content */}
      <div className="bg-[#0f0f0f]">{children}</div>
    </div>
  );
}

export default function KanzleiAudit() {
  return (
    <section id="kanzlei-audit" className="bg-cream py-20 md:py-28 lg:py-32">
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
                01
              </span>
              <span className="text-[13px] font-semibold text-maroon uppercase tracking-wider">
                Analyse
              </span>
              <span className="text-[12px] font-medium text-text-secondary bg-black/[0.05] px-2.5 py-1 rounded-full">
                Woche 1–2
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary font-heading">
              Umfassende Kanzlei-Analyse
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] leading-relaxed text-text-secondary max-w-[480px]">
              Wir analysieren Ihre bestehenden Prozesse, Tools und
              Mandantenstruktur — und identifizieren die Bereiche mit dem
              größten KI-Potenzial.
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

          {/* Right Column — UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <MacWindowFrame title="steuerclara — kanzlei-audit">
              <div className="p-0">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 border-b border-white/[0.06] text-[11px] font-semibold text-white/40 uppercase tracking-wider">
                  <span>Tool</span>
                  <span className="w-[100px] text-center">Status</span>
                  <span className="w-[80px] text-right">KI-Potenzial</span>
                </div>

                {/* Table Rows */}
                {tableRows.map((row, i) => (
                  <motion.div
                    key={row.tool}
                    className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3.5 border-b border-white/[0.04] last:border-b-0"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, ease, delay: 0.4 + i * 0.4 }}
                  >
                    <span className="text-[13px] text-white/80 font-medium">
                      {row.tool}
                    </span>
                    <span className="w-[100px] flex items-center justify-center gap-1.5">
                      {row.statusOk ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                          <span className="text-[12px] text-emerald font-medium">
                            {row.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-amber-400"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <span className="text-[12px] text-amber-400 font-medium">
                            {row.status}
                          </span>
                        </>
                      )}
                    </span>
                    <span className="w-[80px] text-right text-[13px] text-white/60 font-mono font-medium">
                      {row.potential}
                    </span>
                  </motion.div>
                ))}

                {/* Progress bar */}
                <div className="px-5 pt-3 pb-1">
                  <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-maroon rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 1.5, ease, delay: 2 }}
                    />
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-5 py-3 text-[11px]">
                  <span className="flex items-center gap-2 text-white/40">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-maroon"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    Scanning...
                  </span>
                  <span className="text-white/30">
                    3 von 4 Systemen analysiert
                  </span>
                </div>
              </div>
            </MacWindowFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
