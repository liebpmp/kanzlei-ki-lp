# Project: KI-Mitarbeiter für Steuerkanzleien — Landing Page

## Tech Stack
- Single-file HTML with inline CSS and JS
- Google Fonts via <link> tag
- Mobile-first responsive design
- No external frameworks
- Clean, professional, German B2B

## Brand Guidelines
Orientiere dich STARK am steuerclara.de Design (Screenshot in reference/steuerclara-fullpage.png):
- Primary: Navy #14213D (wie SteuerClara)
- Accent: Gold/Amber #E2AC26 (wie SteuerClara)
- Secondary Accent: Emerald #10B981 (für Förderung/kostenlos-Badges)
- Light BG: #F8F9FA
- Dark BG: #0A1628
- Display Font: Plus Jakarta Sans (Google Fonts) — modern, tech, clean
- Body Font: Inter (Google Fonts)
- Logo: Text-basiert "Förderperspektive × SteuerClara" (kein Logo-File nötig)

## Design Skills
Read .claude/skills/frontend-design.md FIRST — follow its Anti-AI-Slop philosophy.
Study reference/steuerclara-fullpage.png for the EXACT design language — replicate the visual style, spacing, card designs, gradients, section patterns.
Also study reference/heyheinz-fullpage.png for the "KI-Mitarbeiter" messaging angle.

## Screenshot Loop (MANDATORY after every significant change)
1. Run: node screenshot.js index.html screenshots/current.png
2. Three screenshots generated: full page (1440px), viewport, mobile (375px)
3. Analyze ALL THREE visually — compare against references
4. Fix issues, re-screenshot, repeat until quality matches references
5. ⚠️ Disable for animated elements

## Reference Images (in reference/)
- reference/steuerclara-fullpage.png — CLONE THIS DESIGN LANGUAGE. Same fonts, same card styles, same gradient vibes, same section rhythms. Adapt content only.
- reference/heyheinz-fullpage.png — Borrow the "KI-Mitarbeiter" positioning and messaging structure

## Content & Messaging

### Headline
"KI-Mitarbeiter für Ihre Kanzlei — 100% staatlich gefördert"

### Subline
"Ihre Mitarbeiter werden zu IHK-zertifizierten KI-Fachkräften. Die Schulung ist kostenlos. Und parallel bauen wir Ihnen einen KI-Mitarbeiter, der immer mehr Prozesse übernimmt."

### Hero Section
- Große Headline + Subline
- CTA: "Kostenlose Potenzialanalyse vereinbaren"
- Trust-Badges: "IHK-zertifiziert" | "100% staatlich gefördert" | "Kein Eigenanteil"
- Subtle animated background (wie SteuerClara)

### Pain Points Section — "Kennen Sie das?"
Heading: "Der Kanzleialltag frisst Ihre Zeit"
4-6 Pain Cards:
1. **Telefon-Chaos:** Ständige Unterbrechungen durch Mandantenanrufe — keiner arbeitet konzentriert
2. **DATEV-Zeitfresser:** Belege manuell hochladen, Buchungen prüfen, FiBu vorbereiten — Stunden pro Tag
3. **Fristen-Stress:** Abgabefristen manuell tracken, Mandanten hinterherrennen, Erinnerungen vergessen
4. **Fachkräftemangel:** Gute Steuerfachangestellte sind kaum zu finden — und die vorhandenen sind überlastet
5. **Mandantenkommunikation:** E-Mails, Rückrufe, Unterlagen nachfordern — ein endloser Kreislauf
6. **Digitalisierungsdruck:** Sie wissen, dass KI helfen könnte — aber wo anfangen? Und wer setzt das um?

### Solution Section — "Ihr KI-Mitarbeiter übernimmt"
Heading: "Ein KI-Mitarbeiter, der nie krank wird und nie kündigt"
Subheading: "Schritt für Schritt automatisieren wir die zeitfressendsten Prozesse in Ihrer Kanzlei"

Feature Cards (6 Stück, mit Icons — SVG/Lucide, KEINE Emojis):
1. **Telefon-KI (Clara):** Nimmt jeden Anruf an, beantwortet Standardfragen, bucht Termine, leitet nur Wichtiges weiter. 24/7, keine Wartezeiten.
2. **DATEV-Automatisierung:** Belege automatisch verarbeiten, Buchungsvorschläge generieren, FiBu-Vorbereitung auf Knopfdruck.
3. **Fristen-Management:** Automatische Überwachung aller Abgabefristen. Mandanten werden rechtzeitig erinnert, Unterlagen angefordert.
4. **Mandanten-Kommunikation:** Automatische Follow-ups, Statusupdates, Dokumentenanforderungen per Mail/WhatsApp.
5. **Vorbereitende Buchhaltung:** KI sortiert, kategorisiert und bereitet Belege vor — Ihre MFAs prüfen nur noch.
6. **Individuelle Automatisierungen:** Jede Kanzlei hat eigene Abläufe. Wir analysieren und automatisieren genau Ihre Prozesse.

### Förderung Section — "Komplett kostenlos für Ihre Kanzlei"
Heading: "Der Staat zahlt — Sie profitieren"
Subheading: "Über das Qualifizierungschancengesetz (QCG) werden Schulung UND Implementierung finanziert"

3-Spalten Layout:
**Spalte 1 — Schulung (100% gefördert)**
- IHK-zertifizierte KI-Weiterbildung
- Speziell für die Steuerbranche
- 720 Unterrichtseinheiten
- Abschluss: "IHK-Fachkraft für KI in der Steuerbranche"
- Kosten für Sie: 0€

**Spalte 2 — Lohnkosten (75% erstattet)**
- 75% der Lohnkosten Ihrer Mitarbeiter werden erstattet
- Für die gesamte Dauer der Maßnahme (6-12 Monate)
- Bei einer Kanzlei mit 10 MA: bis zu 150.000€+ Erstattung

**Spalte 3 — Implementierung (daraus finanziert)**
- Mit dem Lohnkostenzuschuss finanzieren Sie die KI-Implementierung
- KI-Mitarbeiter im Wert von 50.000-100.000€
- Effektiv: kostenlos für Ihre Kanzlei

### Ablauf Section — "So einfach geht's"
Heading: "In 4 Schritten zum KI-Mitarbeiter"

Steps (mit Nummern-Badges):
1. **Potenzialanalyse** (30 Min, kostenlos): Wir analysieren Ihre Kanzlei und berechnen die mögliche Fördersumme
2. **Förderantrag:** Wir übernehmen den kompletten Antrag — Sie müssen sich um nichts kümmern
3. **Schulung startet:** Ihre Mitarbeiter lernen KI-Anwendung in der Praxis. Nur 2 kurze Calls/Woche, der Rest läuft im Tagesgeschäft
4. **KI-Mitarbeiter live:** Parallel zur Schulung implementieren wir Schritt für Schritt die Automatisierungen

### Schulungskonzept Section — "Kein Ausfall, maximaler Nutzen"
Heading: "Ihre Mitarbeiter lernen nebenbei — ohne das Tagesgeschäft zu stören"

Key Facts (als horizontale Stat-Cards):
- **15h/Woche** — davon nur 2 Live-Calls, Rest = Praxis an eigenen Systemen
- **IHK-Zertifikat** — "KI-Fachkraft Steuerbranche" — anerkannter Abschluss
- **Top-Dozenten** — Experten aus der Steuerbranche, nicht generische KI-Trainer
- **6-12 Monate** — je nach gewähltem Umfang, flexibel anpassbar
- **Kein Ausfall** — Mitarbeiter arbeiten normal weiter, nur mit KI-Fokus

Modulübersicht (Aufklappbar oder Tabelle):
- 3× KI-Basis (Prozessanalyse, Low-Code Tools, Einführung + Recht) — je 160 UE
- 1× KI-Spezialisierung Steuerbranche — 240 UE
- Optional: KI-Spezialist (IHK) — 320 UE, höchstes Level

### Social Proof / Trust Section
Heading: "Vertrauen Sie auf bewährte Partner"

Trust-Elemente:
- "IHK-zertifiziert" Badge
- "Qualifizierungschancengesetz" — Bundesministerium für Arbeit
- "Bereits 400+ Unternehmen bei der Förderung begleitet"
- "SteuerClara — Die #1 Telefon-KI für Steuerkanzleien"
- Partner-Logos: IHK, Agentur für Arbeit (nur Text-Referenz, keine echten Logos ohne Genehmigung)

### FAQ Section (6 Fragen)
1. **Was kostet die Schulung?** — Nichts. Bei Kanzleien bis 50 MA übernimmt der Staat 100% der Schulungskosten.
2. **Fallen meine Mitarbeiter im Tagesgeschäft aus?** — Kaum. Nur 2 kurze Live-Calls pro Woche, der Rest ist Praxis direkt an Ihren Systemen. 
3. **Was ist das Qualifizierungschancengesetz?** — Ein Förderprogramm des Bundes. Unternehmen mit bis zu 49 MA bekommen 100% der Schulungskosten und 75% der Lohnkosten erstattet.
4. **Was kann der KI-Mitarbeiter konkret?** — Telefon, DATEV, Belege, Fristen, Mandantenkommunikation, vorbereitende Buchhaltung — alles was heute noch manuell läuft.
5. **Wie lange dauert der Förderantrag?** — Ca. 4-6 Wochen. Wir übernehmen den kompletten Prozess für Sie.
6. **Kann ich auch ohne Förderung starten?** — Ja! Viele Kanzleien entscheiden sich direkt für die Implementierung. Die Förderung ist ein Bonus, kein Muss.

### CTA Section (Bottom)
Heading: "Bereit für Ihren KI-Mitarbeiter?"
Subline: "Vereinbaren Sie jetzt eine kostenlose Potenzialanalyse. Wir berechnen, wie viel Förderung für Ihre Kanzlei möglich ist."
Button: "Jetzt Potenzialanalyse vereinbaren" → Link (Calendly/Formular Placeholder)
Secondary: "Oder rufen Sie uns an: [Telefonnummer]"

### Footer
- Impressum | Datenschutz (Placeholder-Links)
- "Ein Angebot von Förderperspektive × SteuerClara"
- Kontaktdaten

## Addressing
"Sie" — formales B2B für Steuerkanzlei-Inhaber/Partner

## Design Direction
- Premium B2B SaaS feel (wie steuerclara.de)
- Dark sections wechseln mit hellen sections (Rhythmus)
- Glassmorphism-Cards wo passend (wie SteuerClara)
- Subtle gradients (Navy → Deep Blue)
- Gold/Amber Accents für CTAs und Highlights
- Emerald/Green für "kostenlos" und "gefördert" Badges
- Großzügiger Whitespace
- Smooth scroll animations (translateY, nicht opacity)
- Sticky Header mit CTA-Button
- Mobile: Alles einspalt, Cards stacken, Touch-friendly

## Prohibitions
- NO emoji as UI icons (SVG only, use Lucide/Heroicons)
- NO Inter as DISPLAY font (only as body)
- NO purple gradients
- NO generic stock photo aesthetics
- NO symmetric grid-of-4-equal-cards for every section — vary layouts!
- NO opacity:0 as scroll animation default
- Content must be visible without JavaScript
- NO "AI Slop" — no generic tech-bro aesthetic. This is for conservative Steuerberater.
- NO English terms where German alternatives exist
- NO fake testimonials with stock photos
