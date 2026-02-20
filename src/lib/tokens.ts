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
  green:     "#2F4F3E",
  greenL:    "#3D6350",
  greenPale: "#E8EFEB",
  greenDeep: "#243D2F",
  sand:      "#D4DBD6",
  sandL:     "#ECF0ED",
  scan:      "#4CAF7A",
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
    color: C.green,
    marginBottom: 14,
  } as React.CSSProperties,

  sectionTitle: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: "clamp(28px, 3.5vw, 44px)",
    lineHeight: 1.1,
    letterSpacing: "-0.8px",
    color: C.dark,
    marginBottom: 14,
    maxWidth: 600,
    fontWeight: 400,
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
  { id: "name", icon: "👤", label: "Nombre completo",    value: "JORGE ANTONIO RAMÍREZ LUNA", conf: 97, tier: "high" as const, t: 620  },
  { id: "curp", icon: "🪪", label: "CURP",               value: "RALJ940315HDFMNR03",        conf: 99, tier: "high" as const, t: 980  },
  { id: "dob",  icon: "📅", label: "Fecha de nacimiento",value: "15 / Mar / 1994",            conf: 98, tier: "high" as const, t: 1300 },
  { id: "vig",  icon: "⏳", label: "Vigencia",            value: "Enero 2026",                 conf: 84, tier: "med"  as const, t: 1600 },
] as const;

export const LASER_MS = 1900;
