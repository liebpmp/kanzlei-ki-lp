import { ArrowRight, Play, Shield, Award, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-cream py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-10">
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-[0_1px_2px_rgba(8,8,8,0.05),0_3px_3px_rgba(8,8,8,0.04),inset_0_1px_1px_1px_rgba(255,255,255,0.15)]">
            <span className="size-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-[13px] text-text-secondary font-medium">
              Staatlich gefördert durch das Qualifizierungschancengesetz
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-text-primary">
              KI-Mitarbeiter für Ihre Steuerkanzlei
            </h1>
            <p className="text-[clamp(1rem,2vw,1.125rem)] leading-[1.7] text-text-secondary max-w-[600px] mx-auto">
              Ihre Mitarbeiter werden zu IHK-zertifizierten KI-Fachkräften. Die Schulung ist kostenlos.
              Parallel bauen wir Ihnen einen KI-Mitarbeiter, der Prozesse übernimmt.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
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
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
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
          </div>
        </div>
      </div>
    </section>
  );
}
