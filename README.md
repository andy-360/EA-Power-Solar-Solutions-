# EA Power & Solar Solutions — Website Prototype

A responsive marketing site prototype for EA Power & Solar Solutions, a Kenyan
solar/electrical services company. Built with React, TypeScript, Vite and
Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/          One component per section (Navbar, Hero, Solutions, …)
  components/graphics/ Custom SVG illustrations and the circuit-trace divider
  data/                 Static content (nav links, solutions, projects, appliance catalog)
  lib/planner.ts         Energy Planner sizing calculations
  types.ts               Shared TypeScript types
```

## Notes on content

- All contact details (`+254 XXX XXX XXX`, `info@eapowersolar.co.ke`), the
  founder cards, and the project case studies are clearly-labelled
  placeholders — replace them with real information before launch.
- The Energy Planner produces an **illustrative, preliminary estimate only**.
  The sizing formulas (in `src/lib/planner.ts`) use simplified assumptions
  (peak sun hours, inverter safety margin, battery depth-of-discharge) that
  are reasonable for a rough sizing conversation, not a substitute for a
  professional site assessment.
- The quote form's submission is simulated in the browser (no backend) —
  wire `handleSubmit` in `src/components/QuoteForm.tsx` to a real endpoint
  when ready.
- No EPRA licensing or other credentials are claimed anywhere in the copy,
  per the brief.

## Design tokens

- **Color:** deep navy (`#0F1B2D`) and warm paper (`#F7F5F0`) as the two base
  surfaces; solar gold (`#E8A73B`) for primary actions and key figures;
  electric blue (`#2E6F9E`) for structural/technical accents; a small amount
  of green (`#4F9D69`) reserved for sustainability moments.
- **Type:** Space Grotesk for headlines, IBM Plex Sans for body copy, IBM
  Plex Mono for numeric readouts in the Energy Planner (tabular figures).
- **Motif:** a thin "circuit trace" divider (see `CircuitDivider.tsx`) is
  used between a couple of major sections instead of a plain hairline rule.
