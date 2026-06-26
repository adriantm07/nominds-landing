// ─── Brand color tokens ───────────────────────────────────────
export const C = {
  white:     "#FAFAF8",
  offWhite:  "#F4F2EE",
  border:    "#E6E8E3",
  muted:     "#969C92",
  dark:      "#1A1D19",
  dark2:     "#272B25",
  dark3:     "#383D35",
  warmGray:  "#717870",
  green:     "#2E6B4E",   // bosque vivo — acción primaria, verde de confianza
  greenL:    "#3C8264",
  greenPale: "#E4EFE8",
  greenDeep: "#245840",
  sand:      "#D4DBD6",
  sandL:     "#ECF0ED",
  scan:      "#4CAF7A",
  amber:     "#C8922A",   // amarillo tierra — branding accent
  amberPale: "#F5EDD8",   // fondo suave para badges amber
  // ─── Estado (semánticos) ───
  error:     "#B84E2F",   // rojo tierra — error / probable error OCR
  info:      "#2D6CC4",   // azul — info / selección
} as const;

// ─── Reusable style objects ───────────────────────────────────
export const S = {
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
  } as React.CSSProperties,

  section: {
    padding: "88px 28px",
  } as React.CSSProperties,

  eyebrow: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "1.5px",
    color: C.amber,
    marginBottom: 14,
  } as React.CSSProperties,

  sectionTitle: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: "clamp(28px, 3.5vw, 44px)",
    lineHeight: 1.1,
    letterSpacing: "-0.5px",
    color: C.dark,
    marginBottom: 14,
    maxWidth: 600,
    fontWeight: 500,
  } as React.CSSProperties,

  sectionSub: {
    fontSize: 16,
    color: C.warmGray,
    fontWeight: 300,
    maxWidth: 540,
    lineHeight: 1.7,
  } as React.CSSProperties,

  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    background: C.green,
    color: "white",
    border: "none",
    borderRadius: 8,
    padding: "11px 22px",
    fontSize: 14.5,
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none",
    transition: "background 0.2s, transform 0.15s",
  } as React.CSSProperties,

  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    background: "transparent",
    color: C.dark,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: "11px 22px",
    fontSize: 14.5,
    fontWeight: 400,
    cursor: "pointer",
    textDecoration: "none",
    transition: "background 0.2s, border-color 0.2s",
  } as React.CSSProperties,
} as const;

// ─── Navigation links ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Producto",       href: "#producto" },
  { label: "Casos de uso",  href: "#casos" },
  { label: "Beneficios",    href: "#beneficios" },
  { label: "Por qué nominds", href: "#porque" },
  { label: "Contacto",      href: "#contacto" },
] as const;

// ─── Scan animation field data ────────────────────────────────
export const SCAN_FIELDS = [
  { id: "name",   icon: "👤", label: "Nombre completo",     value: "PÉREZ GARCÍA JOHN ALEJANDRO", conf: 98, tier: "high" as const, t: 560  },
  { id: "lic",    icon: "🪪", label: "No. Licencia",         value: "123456789012",                conf: 99, tier: "high" as const, t: 880  },
  { id: "curp",   icon: "🔑", label: "CURP",                 value: "PEGA850912HDFSRN03",          conf: 99, tier: "high" as const, t: 1160 },
  { id: "dob",    icon: "📅", label: "Fecha de nacimiento",  value: "12 / Sep / 1985",             conf: 97, tier: "high" as const, t: 1420 },
  { id: "exp",    icon: "⏳", label: "Expedición",            value: "15 / Abr / 2022",             conf: 95, tier: "high" as const, t: 1680 },
  { id: "addr",   icon: "📍", label: "Domicilio",             value: "AV. PRINCIPAL 456, EDOMEX",   conf: 88, tier: "med"  as const, t: 1920 },
] as const;

export const LASER_MS = 2300;

/* ═══════════════════════════════════════════════════════════════
   SEMANTIC DESIGN TOKENS · v1.0.0
   Nombres por función, no por valor. La capa `C`/`S` de arriba se
   mantiene como alias de retrocompatibilidad — no romper imports
   existentes. Para código nuevo, preferir `tokens.*`.
   Doc completa: BRAND_GUIDELINES.md §15.
═══════════════════════════════════════════════════════════════ */

// ─── Color (semántico) ────────────────────────────────────────
export const color = {
  background: {
    base:      C.white,      // #FAFAF8 — fondo primario (no blanco puro)
    subtle:    C.offWhite,   // #F4F2EE
    sand:      C.sandL,      // #ECF0ED
    inverse:   C.dark,       // #1A1D19
    inverse2:  C.dark2,      // #272B25
  },
  border: {
    default:   C.border,     // #E6E8E3
    strong:    C.sand,       // #D4DBD6
  },
  text: {
    primary:   C.dark,       // #1A1D19
    secondary: C.dark2,      // #272B25
    tertiary:  C.warmGray,   // #717870
    muted:     C.muted,      // #969C92
    inverse:   C.white,      // #FAFAF8
  },
  action: {
    primary:        C.green,     // #2E6B4E — bosque vivo
    primaryHover:   C.greenDeep, // #245840
    primarySubtle:  C.greenPale, // #E4EFE8
  },
  accent: {
    scan:        C.scan,      // #4CAF7A — progreso / láser
    brand:       C.amber,     // #C8922A — acento de marca
    brandSubtle: C.amberPale, // #F5EDD8
  },
  status: {
    success: C.green,  // #2E6B4E
    warning: C.amber,  // #C8922A
    error:   C.error,  // #B84E2F
    info:    C.info,   // #2D6CC4
  },
  mark: {
    selection: "rgba(74,144,226,0.42)", // selección estilo Word
  },
} as const;

// ─── Tipografía ───────────────────────────────────────────────
export const font = {
  // v1.1.0: DM Serif Display (titulares) + DM Sans (body / UI) + DM Mono (datos).
  // Reemplaza NeueHaas + Satoshi de la v1.0.0. Ver §6 de las brand guidelines.
  display: "'DM Serif Display', Georgia, serif",
  body:    "'DM Sans', 'Helvetica Neue', sans-serif",
  mono:    "'DM Mono', monospace",
} as const;

export const fontWeight = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

/** Escala tipográfica · [fontSize, lineHeight, letterSpacing] */
export const fontSize = {
  displayXl: { size: 64, lh: 1.05, ls: "-2px" },
  displayL:  { size: 48, lh: 1.07, ls: "-1.5px" },
  displayM:  { size: 36, lh: 1.1,  ls: "-0.8px" },
  h1:        { size: 30, lh: 1.1,  ls: "-0.5px" },
  h2:        { size: 24, lh: 1.15, ls: "-0.4px" },
  h3:        { size: 20, lh: 1.2,  ls: "-0.3px" },
  h4:        { size: 17, lh: 1.3,  ls: "0" },
  bodyL:     { size: 18, lh: 1.6,  ls: "0" },
  bodyM:     { size: 16, lh: 1.65, ls: "0" },
  bodyS:     { size: 14, lh: 1.55, ls: "0" },
  bodyXs:    { size: 12, lh: 1.5,  ls: "0.1px" },
  eyebrow:   { size: 11, lh: 1.2,  ls: "1.5px" },
  mono:      { size: 14, lh: 1.4,  ls: "0.5px" },
} as const;

// ─── Espaciado · base 4px ─────────────────────────────────────
export const space = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24,
  8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96, 32: 128,
} as const;

// ─── Radio ────────────────────────────────────────────────────
export const radius = {
  sm: 8, md: 12, lg: 16, xl: 20, full: 9999,
} as const;

// ─── Sombra ───────────────────────────────────────────────────
export const shadow = {
  sm: "0 1px 20px rgba(26,29,25,0.06)",
  md: "0 8px 32px rgba(26,25,22,0.07)",
  lg: "0 20px 48px rgba(26,29,25,0.22)",
} as const;

// ─── Motion ───────────────────────────────────────────────────
export const motion = {
  ease: {
    standard: "cubic-bezier(0.4,0,0.2,1)",
    linear:   "linear",
    organic:  "ease-in-out",
  },
  duration: {
    fast: "0.2s",
    base: "0.4s",
    slow: "0.7s",
  },
  laserMs: LASER_MS,
} as const;

// ─── Layout ───────────────────────────────────────────────────
export const layout = {
  containerMax: 1100,
  sectionPy:    88,  // editorial (compacto = 48)
  sectionPx:    28,
  zIndex: { base: 0, laser: 20, header: 100, overlay: 1000, modal: 1010, toast: 1020 },
} as const;

// ─── Token raíz (acceso unificado) ────────────────────────────
export const tokens = {
  color, font, fontWeight, fontSize, space, radius, shadow, motion, layout,
} as const;

/* ─── Tipos exportados ───────────────────────────────────────── */
export type ColorToken     = typeof C;
export type ColorName      = keyof typeof C;
export type SemanticColor  = typeof color;
export type FontFamily     = keyof typeof font;
export type FontWeight     = keyof typeof fontWeight;
export type TypeScale      = keyof typeof fontSize;
export type SpacingScale   = keyof typeof space;
export type RadiusScale    = keyof typeof radius;
export type ShadowScale    = keyof typeof shadow;
export type Tokens         = typeof tokens;
