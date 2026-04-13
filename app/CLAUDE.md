# Project: KI-Mitarbeiter für Steuerkanzleien — Landing Page

## ⚠️ ITERATION V3 — Tom's Feedback on V2:
1. **Use V1 content quality** — V1 had excellent copy. Adopt the pain points, solution descriptions, specific German copy from `reference/v1-content.html`. The current V2 content is too thin/generic.
2. **Add scroll animations** — V1 had smooth reveal-on-scroll (IntersectionObserver + translateY + opacity). Add framer-motion or CSS-based reveal animations to ALL sections.
3. **More social proof** — Add more trust signals: partner logos, "Über 400 Unternehmen begleitet", certification badges, concrete numbers
4. **Bolder headline** — H1 must POP. Larger, bolder. Consider highlight color on key words like "kostenlos" or "KI-Mitarbeiter"
5. **Use REAL logos** — `public/fp-logo.png` (Förderperspektive, 1024x317) and `public/steuerclara-logo.png` (SteuerClara icon) in the header. Display both logos side by side with "×" between them.

**READ `reference/v1-content.html` for the excellent copy to reuse!** Especially:
- The 6 pain-point cards (Telefon-Chaos, DATEV-Zeitfresser, Fristen-Stress, Fachkräftemangel, Mandanten-Pingpong, Digitalisierungsdruck)
- The solution descriptions
- The Förderung section copy
- The FAQ answers
- The hero dashboard mockup concept
- The social proof numbers

## CRITICAL: Clone steuerclara.de Design!
This LP MUST look like it's from the same brand as steuerclara.de. Study these files FIRST:
- `reference/steuerclara-source.html` — Original HTML structure
- `reference/steuerclara-styles.css` — Original CSS (621 rules)
- `reference/steuerclara-fullpage.png` — Visual reference (analyze with image tool!)

**Clone these specific design patterns from steuerclara.de:**
- The warm cream/off-white backgrounds (#FCF8F2, #F7F6F5)
- The dark sections with #101010 background
- The red/maroon accent color (#A21E29 / #A21F29)
- Inter + Inter Display font family (same fonts!)
- The card styles with subtle shadows
- The section rhythm (light → dark → light)
- The clean, premium, conservative Steuerberater aesthetic
- The rounded corners, padding, spacing patterns

## Tech Stack
- React + Vite + Tailwind CSS v4
- shadcn/ui components (already initialized)
- lucide-react for icons
- framer-motion for animations
- Path alias: @/ → src/
- Build command: npm run build → dist/

## Design Guidelines (EXTRACTED from steuerclara.de)
### Colors
- Background Light: #FCF8F2 (warm cream), #F7F6F5 (light grey)
- Background Dark: #101010, #000000
- Text Primary: #000000, #333333
- Text Secondary: rgba(0,0,0,0.7), rgba(0,0,0,0.5), #595B63
- Accent/CTA: #A21E29 (maroon/red — steuerclara brand)
- **NEW for Förderung:** #10B981 (emerald green) for "kostenlos"/"gefördert" badges
- White text on dark sections: #FFFFFF, rgba(255,255,255,0.2)

### Fonts
- Display: "Inter Display SemiBold", "Inter Display Medium"
- Body: Inter, sans-serif
- Import both from Google Fonts or use @font-face

### Layout Patterns (from steuerclara.de)
- Max content width ~1200px, centered
- Generous padding: py-20 to py-32 per section
- Cards: rounded-2xl or rounded-3xl, subtle shadow, p-8
- Section labels: small uppercase text, sometimes with colored dot
- Headings: large (text-4xl to text-5xl), Inter Display SemiBold
- Alternating: warm cream sections ↔ dark #101010 sections

## Screenshot Loop (MANDATORY)
After every major section build:
```bash
node screenshot.js dist/index.html screenshots/current.png
```
Then analyze the screenshot with the image tool. Compare to reference/steuerclara-fullpage.png.
Build first with `npm run build`, then screenshot the dist/index.html.

## Content & Sections

### 1. STICKY HEADER
- Logo text: "Förderperspektive × SteuerClara" (left)
- Nav items: Vorteile | Förderung | Ablauf | FAQ
- CTA Button: "Potenzialanalyse vereinbaren" (maroon/red)

### 2. HERO SECTION (warm cream bg like steuerclara)
- Small label: "Staatlich gefördert durch das Qualifizierungschancengesetz"
- H1: "KI-Mitarbeiter für Ihre Steuerkanzlei"
- Subtitle: "Ihre Mitarbeiter werden zu IHK-zertifizierten KI-Fachkräften. Die Schulung ist kostenlos. Parallel bauen wir Ihnen einen KI-Mitarbeiter, der Prozesse übernimmt."
- Primary CTA: "Kostenlose Potenzialanalyse" (maroon)
- Secondary CTA: "Demo ansehen" (outline)
- Trust badges row: "IHK-zertifiziert" | "100% gefördert" | "Kein Eigenanteil" (green badges)
- Right side or below: Clean illustration or abstract visual

### 3. SOCIAL PROOF STRIP
- "400+ Unternehmen erfolgreich begleitet"
- Trust logos row: IHK, Agentur für Arbeit, QCG (text-based, subtle)

### 4. "WAS MACHT DER KI-MITARBEITER?" Section (like steuerclara's "Was macht Clara?")
- Section label: "Fähigkeiten"
- H2: "Was übernimmt Ihr KI-Mitarbeiter?"
- Subtitle: "Von der Telefonannahme bis zur DATEV-Automatisierung — Schritt für Schritt entlasten wir Ihren Kanzleialltag."
- 3-4 visual steps or flow (like steuerclara's 4-step flow):
  1. Anrufe entgegennehmen & qualifizieren (Clara)
  2. DATEV & Belege automatisch verarbeiten
  3. Fristen überwachen & Mandanten erinnern
  4. Vorbereitende Buchhaltung auf Knopfdruck

### 5. VORTEILE Section (like steuerclara's "Ihre Vorteile im Überblick")
- Section label: "Ihre Vorteile"
- H2: "Mehr Zeit für Beratung. Weniger Verwaltung."
- 6 cards (2x3 grid), each with lucide icon + title + description:
  1. **Telefon-KI (Clara):** Nimmt jeden Anruf an, qualifiziert Anliegen, bucht Termine. 24/7.
  2. **DATEV-Automatisierung:** Belege verarbeiten, Buchungsvorschläge, FiBu-Vorbereitung automatisch.
  3. **Fristen-Management:** Automatische Überwachung, rechtzeitige Mandanten-Erinnerungen.
  4. **Mandanten-Kommunikation:** Automatische Follow-ups, Statusupdates, Dokumentenanforderungen.
  5. **Vorbereitende Buchhaltung:** KI sortiert, kategorisiert, bereitet Belege vor.
  6. **Individuelle Automatisierungen:** Jede Kanzlei hat eigene Abläufe — wir automatisieren Ihre.

### 6. FÖRDERUNG Section (dark bg, #101010)
- Section label: "Förderung"
- H2: "Der Staat zahlt — Sie profitieren"
- Subtitle: "Über das Qualifizierungschancengesetz (QCG) werden Schulung UND Implementierung finanziert."
- 3 cards side by side:
  **Card 1 — Schulung (100% gefördert)**
  - IHK-zertifizierte KI-Weiterbildung
  - Speziell für die Steuerbranche
  - 720 Unterrichtseinheiten
  - Abschluss: "IHK-Fachkraft KI Steuerbranche"
  - Badge: "0€ für Sie"

  **Card 2 — Lohnkosten (75% erstattet)**
  - 75% der Lohnkosten erstattet
  - Gesamte Maßnahme-Dauer
  - Kanzlei mit 10 MA: bis 150.000€+ Erstattung
  - Badge: "75% zurück"

  **Card 3 — KI-Implementierung**
  - Mit dem Lohnkostenzuschuss finanziert
  - KI-Mitarbeiter im Wert von 50.000-100.000€
  - Effektiv kostenlos
  - Badge: "0€ effektiv"

### 7. ABLAUF Section (warm cream bg)
- Section label: "So einfach geht's"
- H2: "In 4 Schritten zum KI-Mitarbeiter"
- Numbered steps (vertical or horizontal timeline):
  1. **Potenzialanalyse** (30 Min, kostenlos) — Wir analysieren Ihre Kanzlei und berechnen die Fördersumme
  2. **Förderantrag** — Wir übernehmen alles. Sie müssen sich um nichts kümmern.
  3. **Schulung startet** — IHK-Weiterbildung, nur 2 Calls/Woche, Rest läuft im Tagesgeschäft
  4. **KI-Mitarbeiter live** — Parallel implementieren wir die Automatisierungen

### 8. SCHULUNG Section
- Section label: "Schulungskonzept"
- H2: "Ihre Mitarbeiter lernen nebenbei"
- Stat cards row: 15h/Woche | IHK-Zertifikat | Top-Dozenten | 6-12 Monate | Kein Ausfall
- Module overview (accordion or table):
  - 3× KI-Basis (je 160 UE): Prozessanalyse, Low-Code Tools, Einführung + Recht
  - 1× KI-Spezialisierung Steuerbranche (240 UE)
  - Optional: KI-Spezialist IHK (320 UE)

### 9. FAQ Section (like steuerclara's FAQ)
- H2: "Häufige Fragen"
- Accordion style (6 questions):
  1. Was kostet die Schulung? → Nichts. Bis 50 MA = 100% gefördert.
  2. Fallen Mitarbeiter im Tagesgeschäft aus? → Kaum. 2 Calls/Woche, Rest ist Praxis.
  3. Was ist das Qualifizierungschancengesetz? → Förderprogramm des Bundes...
  4. Was kann der KI-Mitarbeiter konkret? → Telefon, DATEV, Belege, Fristen...
  5. Wie lange dauert der Förderantrag? → Ca. 4-6 Wochen, wir übernehmen.
  6. Kann ich auch ohne Förderung starten? → Ja! Viele entscheiden sich direkt.

### 10. FINAL CTA Section (dark bg)
- H2: "Bereit für Ihren KI-Mitarbeiter?"
- Subtitle: "Vereinbaren Sie jetzt eine kostenlose Potenzialanalyse."
- CTA Button: "Jetzt Potenzialanalyse vereinbaren"
- Secondary: "Oder rufen Sie uns an: +49 XXX"

### 11. FOOTER
- "Förderperspektive × SteuerClara"
- Impressum | Datenschutz
- Kontakt

## Addressing
- "Sie" — formal B2B for Steuerberater

## Animations (REQUIRED — V1 had great ones, V2 lacks them!)
Use framer-motion for scroll-triggered animations:
```jsx
import { motion } from 'framer-motion';

// Reveal on scroll pattern
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-40px" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
```
- Every section header should animate in
- Cards should stagger-animate (0.1s delay between each)
- Use translateY(24px) → 0 + opacity for reveals
- Hero elements should animate sequentially (badge → h1 → subtitle → CTAs → trust badges)
- Pain cards should have hover effects (translateY(-3px) + shadow increase)

## Social Proof (MORE than V2!)
- "400+ Unternehmen erfolgreich begleitet" with counter animation
- Logos/text badges: IHK, Agentur für Arbeit, DIHK, QCG
- Trust strip below hero AND between sections
- Add a testimonial or quote section if possible
- Specific numbers: "720 Unterrichtseinheiten", "100% gefördert", "75% Lohnkosten zurück"

## Logo Usage
- Header: `<img src="/fp-logo.png" />` (Förderperspektive) × `<img src="/steuerclara-logo.png" />` (SteuerClara)
- Display both at ~32-40px height, separated by "×" text
- FP logo is full color (1024x317 PNG)
- SC logo is an icon (64x64 PNG) — pair with text "SteuerClara" next to it

## Prohibitions
- NO emoji as UI icons — use lucide-react SVG icons only
- NO purple gradients
- NO generic AI/tech aesthetic
- NO symmetric grid-of-4-equal-cards for every section — vary layouts!
- This is for CONSERVATIVE Steuerberater — premium, warm, trustworthy, NOT flashy
- Do NOT deviate from the steuerclara.de color palette and font choices
- Do NOT use opacity:0 as scroll animation — use translateY
- Content MUST be visible without JavaScript (critical content in HTML)
- Do NOT load reference images repeatedly — load them ONCE at the start
