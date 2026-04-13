import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-dark py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(162,30,41,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Gradient transition line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent" />

      <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center relative z-10">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-[-0.02em] text-white">
            Bereit für Ihren KI-Mitarbeiter?
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[480px]">
            Vereinbaren Sie jetzt eine kostenlose Potenzialanalyse. Wir
            berechnen, wie viel Förderung für Ihre Kanzlei möglich ist.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 pt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-hover text-white text-[15px] font-medium px-7 py-3.5 rounded-[2px] transition-all duration-300 cursor-pointer hover:shadow-[0_4px_20px_rgba(162,30,41,0.4)]"
            >
              Jetzt Potenzialanalyse vereinbaren
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-text-white-muted text-[14px] pt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Phone className="size-4" />
            <span>Oder rufen Sie uns an: +49 XXX XXXXXXX</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
