# CLAUDE.md — Kanzlei KI LP V6b: New Premium Sections

## Mission
Add 5 NEW sections to the existing LP, inserted between Ablauf and Schulung. These are visually rich, animation-heavy sections inspired by https://clara-agent-core.lovable.app/. The content is adapted for our context: Förderperspektive × SteuerClara crosssell (QCG-funded KI training + implementation for Steuerkanzleien).

## Tech Stack (DO NOT CHANGE)
- React + Vite + Tailwind CSS + shadcn/ui + framer-motion
- Build: `npm run build`

## Brand Colors (DO NOT CHANGE)
- Cream: #FCF8F2, Dark cream: #F7F6F5, Dark: #101010, Black: #000000
- Maroon: #A21E29, Emerald: #10B981
- Fonts: Inter + Inter Display

## Section Order (UPDATED)
Header → Hero → SocialProof → PainPoints → Vorteile → Testimonials → Förderung → Ablauf → **KanzleiAudit** → **KanzleiDatenbank** → **AgentDeploy** → **AgentBoard** → **PrivateLLM** → Schulung → FAQ → FinalCTA → Footer

Update `App.jsx` to include the 5 new sections in this order.

## NEW SECTION 1: KanzleiAudit.jsx
**Background: cream (light). Layout: 2 columns (text left, UI mockup right).**

### Left Column:
- Phase pill: `01` in maroon circle + "ANALYSE" label + "Woche 1–2" time pill
- Headline (serif-style, large): "Umfassende Kanzlei-Analyse"
- Paragraph: "Wir analysieren Ihre bestehenden Prozesse, Tools und Mandantenstruktur — und identifizieren die Bereiche mit dem größten KI-Potenzial."
- Checklist (4 items with maroon checkmarks):
  - "Bestehende Workflows & Tools erfassen"
  - "DATEV-Integration prüfen"
  - "KI-Potenziale identifizieren & priorisieren"
  - "Individuellen Implementierungsplan erstellen"

### Right Column — UI Mockup (macOS-style window):
- Title bar: traffic light dots + "steuerclara — kanzlei-audit"
- Table with 4 rows, columns: Tool | Status | KI-Potenzial
  - DATEV Unternehmen online | ✓ Verbunden | 87%
  - DMS (Dokumenten-Management) | ✓ Verbunden | 92%
  - E-Mail / Outlook | ✓ Verbunden | 76%
  - Mandantenportal | ⟳ Wird geprüft | —
- Bottom bar: "🔴 Scanning..." left, "3 von 4 Systemen analysiert" right
- **Animation:** Rows fade in one by one (stagger 0.4s). Progress bar animates width from 0% to 75%. Subtle pulse on the red "Scanning" dot.

## NEW SECTION 2: KanzleiDatenbank.jsx
**Background: white. Layout: 2 columns (text left, visualization right).**

### Left Column:
- Phase pill: `02` + "AUFBAU" + "Woche 2–4"
- Headline: "Ihre Kanzlei-Wissensdatenbank"
- Paragraph: "Wir verbinden alle Ihre Systeme und schaffen eine zentrale Datenbasis — die Grundlage für intelligente KI-Prozesse."
- Checklist:
  - "Alle bestehenden Tools & Systeme verbinden"
  - "Mandanten, Bescheide, Belege & Fristen synchronisieren"
  - "Einheitliches Datenmodell aufbauen"
  - "Echtzeit-Sync — immer aktuell"

### Right Column — Knowledge Graph Mockup:
- macOS window: "steuerclara — wissensdatenbank"
- Show a simplified knowledge graph visualization:
  - Central node: "Kanzlei-DB" (large, maroon)
  - Connected nodes: "DATEV" (green, connected), "DMS" (green), "E-Mail" (green), "Mandanten" (green), "Fristen" (green)
  - Use SVG circles + lines, with pulse animation on connections
- Stats bar: "131.499 Datensätze indexiert" | "12ms Latenz" | "Echtzeit"
- **Animation:** Nodes appear one by one from center outward. Lines draw themselves. Stats count up.

## NEW SECTION 3: AgentDeploy.jsx
**Background: cream. Layout: 2 columns (text left, UI right).**

### Left Column:
- Phase pill: `03` + "AKTIVIERUNG" + "Woche 4–8"
- Headline: "Trainierte KI-Agenten einsetzen"
- Paragraph: "Maßgeschneiderte KI-Agenten werden für Ihre Kanzlei konfiguriert — trainiert auf Ihre Mandantendaten, Prozesse und interne Sprache."
- Checklist:
  - "Kanzlei-spezifische Agenten konfigurieren"
  - "Training auf Ihre Mandantendaten & Prozesse"
  - "Automatisierte Workflows aktivieren"
  - "Performance-Monitoring einrichten"

### Right Column — Agent Board Mockup:
- macOS window: "steuerclara — agenten"
- 3 agent cards in a row:
  - 📋 "Bescheid-Agent" — Status: "● Live" (green)
  - 📁 "Beleg-Agent" — Status: "● Live" (green)
  - ⏰ "Fristen-Agent" — Status: "Wird trainiert..." (amber, pulse)
- Bottom: "2 Aktiv" | "1 In Training" | progress bar 67%
- **Animation:** Cards slide in from left one by one. Status dots pulse. Progress bar fills.

## NEW SECTION 4: AgentBoard.jsx
**Background: dark (#101010). Full width. THE SHOWPIECE SECTION.**

### Header:
- Subheading: "Nach der Implementierung"
- Headline: "Was Ihre KI-Abteilung **heute** erledigt." (word "heute" in gold gradient: from #D3A55B to #E8C97A)
- Paragraph: "Bescheide prüfen, Belege kontieren, Fristen überwachen, Mandanten informieren — alles gleichzeitig, 24/7."

### Agent Filter Pills (horizontal row):
- 6 pills: BP Bescheid (maroon, active) | BA Beleg (maroon) | FA Fristen (maroon) | KA Kommunikation (gray) | PA Prüfung (gray) | LK Lohnkosten (gray)

### Kanban Board (3 columns):
**TO DO (3)**
- "Jahresabschluss Müller GmbH — Unterlagen anfordern" [BP badge]
- "USt-VA März — Abgabefrist prüfen" [FA badge]
- "Neue Belege — 12 Dokumente klassifizieren" [BA badge]

**IN PROGRESS (2)**
- "Steuerbescheid Schmidt — Abweichungsanalyse" [BP badge] — progress bar 60%
- "Lohnabrechnung Q1 — Daten konsolidieren" [LK badge] — progress bar 30%

**COMPLETED (3)**
- "47 Belege klassifiziert — DATEV-Import abgeschlossen" [BA badge] ✓
- "USt-VA Februar — fristgerecht eingereicht" [FA badge] ✓
- "3 Bescheide geprüft — 1 Einspruch empfohlen" [BP badge] ✓

### Footer bar:
- Left: "127 Aufgaben erledigt diese Woche"
- Right: "24/7 autonom" in maroon

### Animations:
- Cards fade in with stagger (column by column, left to right)
- Progress bars animate from 0% to target
- Filter pills have subtle hover glow
- Completed items have a subtle green checkmark animation
- The whole section uses `fade-section` pattern (opacity 0→1, translateY 30→0 on scroll)

## NEW SECTION 5: PrivateLLM.jsx
**Background: dark (#0a0a0a). THE PREMIUM SECTION.**

### Header:
- Pill: "Nach den 8 Wochen verfügbar" with green dot
- Headline: "Ihr **privates** KI-Modell. Trainiert auf Ihre Kanzlei." (word "privates" in gold gradient)
- Paragraph: "Nach der Implementierung steht Ihnen ein eigenes Sprachmodell zur Verfügung — verbunden mit DATEV und allen Tools, die Sie nutzen."

### Layout: 2 columns

### Left Column — Chat UI Mockup:
- macOS dark window: title "Kanzlei-LLM — Privat & DSGVO-konform"
- Chat conversation:
  - **User** (maroon bubble): "Welche Mandanten haben noch offene Belege für Q1?"
  - **AI** (dark bubble, "Kanzlei-LLM" label): "3 Mandanten haben offene Belege:\n• Müller GmbH — 4 Belege (Reisekosten)\n• Schmidt & Partner — 2 Belege (Bewirtung)\n• Weber KG — 1 Beleg (Abschreibung)\nSoll ich automatische Erinnerungen versenden?"
  - **User**: "Ja, und prüfe gleichzeitig den Bescheid von Müller GmbH"
  - **AI**: "Erledigt. Erinnerungen sind raus. Bescheid-Analyse läuft — Ergebnis in ~2 Minuten."
- Typing indicator (3 dots animation) at bottom

### Right Column — Tech Stack + Capabilities:
**Top: 2×3 grid of connection cards:**
- 📊 DATEV — "Verbunden" (green dot)
- 📁 DMS — "Verbunden"
- 📧 E-Mail — "Verbunden"
- 🏛️ ELSTER — "Verbunden"
- 🌐 Mandantenportal — "Verbunden"
- 🏦 Finanzverwaltung — "Verbunden"

**Below: "Was Ihr LLM kann" box:**
- → Mandantendaten kanzleiübergreifend abfragen
- → Bescheide analysieren & Einsprüche formulieren
- → Fehlende Belege identifizieren & anfordern
- → Fristen prüfen & proaktiv kommunizieren
- → Steuerliche Fragen mit Kanzlei-Kontext beantworten
- → Reports & Auswertungen in Sekunden erstellen

**Bottom: 4 stat cards in a row:**
- "100% Deutsche Server"
- "<2s Antwortzeit"
- "DSGVO Vollkonform"
- "∞ Anfragen/Monat"

### Animations:
- Chat messages appear one by one (stagger 0.6s) on scroll
- Typing dots: 3-dot bounce animation (infinite)
- Connection cards: stagger fade-in
- Stat numbers: count-up animation
- Green dots: pulse animation
- Subtle radial gradient glow behind chat window (maroon, very dim)

## CSS Additions
Add to index.css:
```css
.text-gradient-gold {
  background: linear-gradient(135deg, #D3A55B, #E8C97A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes typing-dot {
  0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
  30% { opacity: 1; transform: translateY(-4px); }
}

@keyframes draw-line {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}

@keyframes progress-fill {
  0% { width: 0%; }
  100% { width: var(--target-width); }
}
```

## Rules
- Use framer-motion for all scroll-triggered animations (whileInView, viewport once)
- macOS window mockups: rounded-xl, subtle shadow, traffic light dots (w-2.5 h-2.5), dark title bar with gray text
- Agent filter pills: rounded-full, small text, maroon for active, gray/muted for inactive
- Kanban columns: semi-transparent cards on dark bg (bg-white/[0.05] border border-white/[0.08])
- Chat bubbles: user = maroon bg, AI = dark-gray bg, both rounded-2xl with padding
- Tech stack cards: dark bg with subtle border, green dot for connected status
- ALL sections must be mobile-responsive
- Keep existing sections UNCHANGED
- DO NOT add npm packages

## Screenshot Verification
After building, run: `node serve-and-screenshot.js`
