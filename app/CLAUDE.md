# CLAUDE.md — Kanzlei KI LP V6: Visual Upgrade

## Mission
Upgrade the existing React LP from V5 to V6 with **dramatically better animations and visual elements** inspired by https://clara-agent-core.lovable.app/ (reference HTML in `reference/lovable/lovable-source.html`, animations in `reference/lovable/lovable-animations.css`).

**Keep ALL existing content and sections. This is a VISUAL upgrade, not a content rewrite.**

## Tech Stack (DO NOT CHANGE)
- React + Vite + Tailwind CSS + shadcn/ui + framer-motion
- Existing project at `./src/`
- Build: `npm run build` → `dist/`

## Brand Colors (DO NOT CHANGE)
- Cream: #FCF8F2, Dark cream: #F7F6F5
- Dark: #101010, Black: #000000
- Maroon: #A21E29 (SteuerClara brand)
- Emerald: #10B981 (success/funded)
- Text: #000000, #595B63
- Fonts: Inter + Inter Display

## CRITICAL: Headline Colors
- "KI-Mitarbeiter" = `text-maroon` (red)
- "100% staatlich gefördert" = `text-emerald` (green)
- DO NOT change these.

## CRITICAL: Logos
- FP logo: `./public/fp-logo.png`
- SteuerClara logo: `./public/steuerclara-logo.jpg`
- DO NOT change logo references.

## Animation Upgrades Required

### 1. HERO SECTION — Add Live Dashboard Mockup
Add a **fake dashboard card** to the right side of the hero (desktop: 2-column layout, mobile: stacked).
The dashboard should look like a macOS window with:
- Traffic light dots (red/yellow/green) in title bar
- Title: "KI-Kanzlei-Assistent — Live"
- 4 animated task rows that fade in one by one (staggered 0.3s delay):
  - "📋 Steuerbescheid geprüft — 2 Abweichungen erkannt" ✓
  - "📁 34 Belege klassifiziert — DATEV-Import bereit" ✓
  - "⏰ USt-VA Frist in 3 Tagen — Erinnerung versandt" ✓
  - "🤖 KI-Fachkraft: 8 Prozesse automatisiert" ✓
- Bottom bar: "4 Prozesse aktiv" left, green dot + "System läuft" right
- Subtle pulse-dot animation on the green indicators
- The whole card should have a subtle float animation (translateY -4px to 4px, 4s ease-in-out infinite)
- Use white background, subtle border, rounded-xl, soft shadow

### 2. SCROLL ANIMATIONS — Upgrade All Sections
Replace basic framer-motion fade-ups with richer animations:
- **Cards**: Staggered entrance with slight scale (0.95→1) + opacity + translateY
- **Section headers**: Slide in from left with blur fade (filter: blur(8px)→blur(0))
- **Stats/numbers**: Count-up animation (animate numbers from 0 to target)
- **Lists/checkmarks**: Stagger each item with 100ms delay
- Use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Easing: `[0.16, 1, 0.3, 1]` (match Lovable's cubic-bezier)

### 3. SOCIAL PROOF — Logo Marquee
Replace static badges with a **horizontal scrolling marquee** (infinite loop):
- Auto-scrolling logos/badges from left to right
- Use CSS `@keyframes marquee { 0% { transform: translate(0); } 100% { transform: translate(-50%); } }`
- Duplicate the items for seamless loop
- Add gradient fade on left/right edges (transparent→cream)
- Speed: 30s for full cycle

### 4. FÖRDERUNG SECTION (Dark) — Enhanced Cards
- Add subtle **border-glow animation** on hover (border-color pulsing from rgba(162,30,41,0.2) to rgba(162,30,41,0.5))
- Cards should have a glass-morphism effect: `backdrop-blur-sm bg-white/[0.05]`
- Add a subtle **gradient orb** behind the section (radial-gradient, very dim maroon glow)

### 5. ABLAUF SECTION — Timeline Rail
- Add a **vertical connecting line** between the 4 steps (left side on desktop)
- Each step number circle should have a **pulse animation** when it enters viewport
- The connecting line should **draw itself** (animate height from 0 to 100%) as user scrolls
- Step content fades in from the right as each step becomes visible

### 6. FAQ — Smooth Accordion
- Accordion open/close should use `accordion-down` / `accordion-up` keyframes (Lovable pattern)
- Add subtle rotation animation on the chevron icon (0deg → 180deg)

### 7. TESTIMONIALS — Enhanced
- Add subtle **quote mark** decorative element (large, semi-transparent)
- Cards should have hover: slight lift + shadow increase
- Star ratings should animate in (stagger each star)

### 8. GENERAL POLISH
- Add `scroll-smooth` to html (already there)
- Subtle parallax on hero background (optional, very subtle)
- All hover states should have `transition-all duration-300`
- Add a subtle **gradient line** between light/dark sections as a transition element

## CSS Keyframes to Add (from Lovable reference)
```css
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.5); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes border-glow {
  0%, 100% { border-color: rgba(162, 30, 41, 0.2); }
  50% { border-color: rgba(162, 30, 41, 0.5); }
}
@keyframes marquee {
  0% { transform: translate(0); }
  100% { transform: translate(-50%); }
}
@keyframes count-up {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

## Component Architecture
Keep the existing component structure:
- `src/components/sections/` — one file per section
- `src/App.jsx` — imports and renders all sections
- `src/index.css` — global styles and Tailwind theme

You may add NEW utility components (e.g., `AnimatedCounter.jsx`, `DashboardMockup.jsx`, `MarqueeRow.jsx`) in `src/components/ui/`.

## Screenshot Verification
After building, run: `node serve-and-screenshot.js`
This builds, serves on localhost:8799, and takes screenshots to `screenshots/`.

## Rules
- DO NOT remove any existing content or sections
- DO NOT change brand colors, fonts, or logo references
- DO NOT add npm packages (use framer-motion which is already installed for all animations)
- Keep mobile-responsive (test at 375px width)
- Section order stays the same: Header → Hero → SocialProof → PainPoints → Vorteile → Testimonials → Förderung → Ablauf → Schulung → FAQ → FinalCTA → Footer
