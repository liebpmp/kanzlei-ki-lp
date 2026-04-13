import { motion } from "framer-motion";
import { Building2, Award, Briefcase, ShieldCheck, GraduationCap } from "lucide-react";

const partners = [
  { icon: Award, label: "IHK-zertifiziert" },
  { icon: Briefcase, label: "Agentur für Arbeit" },
  { icon: ShieldCheck, label: "DIHK" },
  { icon: GraduationCap, label: "Qualifizierungschancengesetz" },
];

export default function SocialProof() {
  return (
    <motion.section
      className="bg-white py-6 border-y border-border-light"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {/* Counter */}
          <div className="flex items-center gap-2.5 text-text-primary">
            <Building2 className="size-5 text-maroon" />
            <span className="text-[15px] font-semibold">
              400+ Unternehmen erfolgreich begleitet
            </span>
          </div>

          <div className="hidden md:block w-px h-6 bg-border-light" />

          {/* Partner badges */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {partners.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-1.5 text-text-muted"
              >
                <p.icon className="size-3.5" />
                <span className="text-[13px] font-medium tracking-wide">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
