import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Award, BadgeCheck } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="bg-cream py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center max-w-[860px] mx-auto gap-10">
          {/* Label pill */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_1px_2px_rgba(8,8,8,0.05),0_3px_3px_rgba(8,8,8,0.04),inset_0_1px_1px_1px_rgba(255,255,255,0.15)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-[13px] text-text-secondary font-medium">
              Staatlich gefördert durch das Qualifizierungschancengesetz
            </span>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h1
              className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.06] tracking-[-0.03em] text-text-primary font-[800]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
            >
              KI-Mitarbeiter für Ihre Steuerkanzlei —{" "}
              <span className="text-emerald">100% staatlich gefördert</span>
            </motion.h1>
            <motion.p
              className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.7] text-text-secondary max-w-[680px] mx-auto"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
            >
              Dank des <strong className="text-text-primary">Qualifizierungschancengesetzes</strong> wird
              die Implementierung von KI-Prozessen in Ihrer Kanzlei jetzt staatlich gefördert — und
              Ihre Mitarbeiter werden dabei sogar <strong className="text-text-primary">kostenlos zu IHK-zertifizierten
              KI-Fachkräften</strong> geschult.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-hover text-white text-[15px] font-medium px-7 py-3.5 rounded-[2px] transition-colors cursor-pointer"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2.5 border border-border-light bg-white hover:bg-cream-dark text-text-primary text-[15px] font-medium px-7 py-3.5 rounded-[2px] transition-colors cursor-pointer"
            >
              <Play className="size-4" />
              Demo ansehen
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 pt-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
              <Award className="size-3.5" />
              IHK-zertifiziert
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
              <Shield className="size-3.5" />
              100% gefördert
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald/10 text-emerald px-3.5 py-2 rounded-[2px] text-[13px] font-medium">
              <BadgeCheck className="size-3.5" />
              Kein Eigenanteil
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
