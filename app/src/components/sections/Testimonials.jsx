import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wir haben dank der Förderung keinen Cent für die Schulung bezahlt — und jetzt übernimmt die KI 60% unserer Belegverarbeitung. Das hätte ich vorher nicht für möglich gehalten.",
    name: "Stefan K.",
    role: "Inhaber, Steuerkanzlei München",
    rating: 5,
  },
  {
    quote:
      "Der gesamte Förderprozess wurde für uns übernommen. Meine Mitarbeiter sind begeistert von der Schulung — praxisnah, ohne den Kanzleibetrieb zu stören.",
    name: "Claudia M.",
    role: "Partnerin, mittelständische Kanzlei NRW",
    rating: 5,
  },
  {
    quote:
      "Clara nimmt jetzt unsere Anrufe an. Seitdem arbeiten meine Fachangestellten endlich konzentriert. Allein das war die Sache wert — und es ist komplett gefördert.",
    name: "Dr. Thomas B.",
    role: "Steuerberater, Einzelkanzlei Hamburg",
    rating: 5,
  },
];

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease, delay: i * 0.1 },
  }),
};

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-maroon" />
            <span className="text-[13px] font-medium text-text-secondary uppercase tracking-wider">
              Erfahrungen
            </span>
          </div>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary">
            Das sagen unsere Kunden
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="flex flex-col gap-6 bg-cream rounded-[2px] p-8 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Large decorative quote mark */}
              <Quote className="size-16 text-maroon/[0.07] absolute top-4 right-4" />

              {/* Stars — staggered animation */}
              <motion.div
                className="flex gap-0.5"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.div key={i} custom={i} variants={starVariants}>
                    <Star className="size-4 text-amber-400 fill-amber-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-[15px] leading-[1.75] text-text-secondary flex-1 relative z-10">
                &bdquo;{t.quote}&ldquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border-light">
                <div className="flex items-center justify-center size-10 rounded-full bg-maroon/10 text-maroon font-bold text-[14px]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
