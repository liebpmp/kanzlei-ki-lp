import { Building2 } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="bg-white py-6 border-y border-border-light">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-text-secondary">
            <Building2 className="size-4" />
            <span className="text-[14px] font-medium">400+ Unternehmen erfolgreich begleitet</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-border-light" />
          <div className="flex flex-wrap items-center justify-center gap-8 text-[13px] text-text-muted font-medium tracking-wide uppercase">
            <span className="font-medium">IHK</span>
            <span className="font-medium">Agentur für Arbeit</span>
            <span className="font-medium">Qualifizierungschancengesetz</span>
          </div>
        </div>
      </div>
    </section>
  );
}
