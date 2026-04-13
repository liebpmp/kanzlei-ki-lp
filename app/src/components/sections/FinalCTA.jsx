import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-dark py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[800px] px-6 lg:px-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-white">
            Bereit für Ihren KI-Mitarbeiter?
          </h2>
          <p className="text-[16px] leading-relaxed text-text-white-muted max-w-[480px]">
            Vereinbaren Sie jetzt eine kostenlose Potenzialanalyse. Wir berechnen, wie viel Förderung für Ihre Kanzlei möglich ist.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-hover text-white text-[15px] font-medium px-6 py-3 rounded-sm transition-colors cursor-pointer"
            >
              Jetzt Potenzialanalyse vereinbaren
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-text-white-muted text-[14px] pt-2">
            <Phone className="size-4" />
            <span>Oder rufen Sie uns an: +49 XXX XXXXXXX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
