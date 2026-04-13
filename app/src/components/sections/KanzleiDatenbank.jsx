import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const checklist = [
  "Alle bestehenden Tools & Systeme verbinden",
  "Mandanten, Bescheide, Belege & Fristen synchronisieren",
  "Einheitliches Datenmodell aufbauen",
  "Echtzeit-Sync — immer aktuell",
];

const nodes = [
  { label: "DATEV", angle: 0 },
  { label: "DMS", angle: 72 },
  { label: "E-Mail", angle: 144 },
  { label: "Mandanten", angle: 216 },
  { label: "Fristen", angle: 288 },
];

function CountUpNumber({ target, suffix = "", duration = 2000 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const numTarget = parseInt(target.replace(/\./g, ""), 10);
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * numTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  const formatted = value.toLocaleString("de-DE");
  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

function KnowledgeGraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const centerX = 160;
  const centerY = 140;
  const radius = 100;

  return (
    <div ref={ref} className="flex items-center justify-center py-6">
      <svg
        viewBox="0 0 320 280"
        className="w-full max-w-[320px] h-auto"
        fill="none"
      >
        {/* Connection lines */}
        {nodes.map((node, i) => {
          const rad = (node.angle - 90) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);
          return (
            <motion.line
              key={`line-${node.label}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={isInView ? { strokeDashoffset: 0 } : {}}
              transition={{ duration: 0.8, ease, delay: 0.5 + i * 0.2 }}
              opacity={0.5}
            />
          );
        })}

        {/* Center node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        >
          <circle cx={centerX} cy={centerY} r="28" fill="#A21E29" />
          <text
            x={centerX}
            y={centerY - 4}
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            Kanzlei
          </text>
          <text
            x={centerX}
            y={centerY + 8}
            textAnchor="middle"
            fill="white"
            fontSize="9"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            DB
          </text>
          {/* Pulse ring */}
          <motion.circle
            cx={centerX}
            cy={centerY}
            r="28"
            fill="none"
            stroke="#A21E29"
            strokeWidth="1"
            animate={
              isInView
                ? {
                    r: [28, 40],
                    opacity: [0.4, 0],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.g>

        {/* Outer nodes */}
        {nodes.map((node, i) => {
          const rad = (node.angle - 90) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(rad);
          const y = centerY + radius * Math.sin(rad);
          return (
            <motion.g
              key={node.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, ease, delay: 0.3 + i * 0.2 }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            >
              <circle cx={x} cy={y} r="20" fill="#10B981" />
              <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                fill="white"
                fontSize="8"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {node.label}
              </text>
              {/* Pulse on connection */}
              <motion.circle
                cx={x}
                cy={y}
                r="20"
                fill="none"
                stroke="#10B981"
                strokeWidth="1"
                animate={
                  isInView
                    ? {
                        r: [20, 28],
                        opacity: [0.3, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.3,
                }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default function KanzleiDatenbank() {
  return (
    <section id="kanzlei-datenbank" className="bg-white py-20 md:py-28 lg:py-32">
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
                02
              </span>
              <span className="text-[13px] font-semibold text-maroon uppercase tracking-wider">
                Aufbau
              </span>
              <span className="text-[12px] font-medium text-text-secondary bg-black/[0.05] px-2.5 py-1 rounded-full">
                Woche 2–4
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] leading-tight tracking-tight text-text-primary font-heading">
              Ihre Kanzlei-Wissensdatenbank
            </h2>

            {/* Paragraph */}
            <p className="text-[16px] leading-relaxed text-text-secondary max-w-[480px]">
              Wir verbinden alle Ihre Systeme und schaffen eine zentrale
              Datenbasis — die Grundlage für intelligente KI-Prozesse.
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

          {/* Right Column — Knowledge Graph Mockup */}
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
                  steuerclara — wissensdatenbank
                </span>
              </div>

              {/* Graph */}
              <div className="bg-[#0f0f0f] px-4">
                <KnowledgeGraph />
              </div>

              {/* Stats bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-[#0f0f0f] border-t border-white/[0.06] text-[11px]">
                <span className="text-emerald font-medium">
                  <CountUpNumber target="131499" /> Datensätze indexiert
                </span>
                <span className="text-white/30">12ms Latenz</span>
                <span className="flex items-center gap-1.5 text-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                  Echtzeit
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
