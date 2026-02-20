"use client";

import { C, S } from "@/lib/tokens";

const CASES = [
  {
    icon: "🪪",
    docTitle: "Identificación oficial",
    docSub: "INE / Pasaporte",
    tag: "Identidad",
    title: "Validación de identidad en comparecencias",
    desc: "Extrae y valida automáticamente nombre, CURP, fecha de nacimiento y vigencia de INEs y pasaportes. Detecta inconsistencias en segundos.",
  },
  {
    icon: "📋",
    docTitle: "Acta de nacimiento",
    docSub: "Registro Civil",
    tag: "Estado civil",
    title: "Procesamiento de actas del Registro Civil",
    desc: "Lee actas de nacimiento, matrimonio y defunción. Extrae fechas, nombres, números de registro y los integra directamente al expediente.",
  },
  {
    icon: "🏠",
    docTitle: "Escritura pública",
    docSub: "Compraventa",
    tag: "Inmuebles",
    title: "Extracción en escrituras de compraventa",
    desc: "Identifica inmueble, precio, partes, folio real y folios notariales en escrituras complejas de varias páginas. Listo para firma electrónica.",
  },
  {
    icon: "💼",
    docTitle: "Poder notarial",
    docSub: "General / Especial",
    tag: "Poderes",
    title: "Digitalización de poderes notariales",
    desc: "Extrae poderdante, apoderado, alcance, limitaciones y vigencia de poderes generales y especiales. Cruce automático contra base de datos.",
  },
] as const;

function DocPreview({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div
      style={{
        background: "white",
        border: `1px solid ${C.border}`,
        borderRadius: 10, padding: 13, width: 196,
        boxShadow: "0 4px 14px rgba(26,29,25,0.07)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div
          style={{
            width: 26, height: 26, borderRadius: 6,
            background: C.greenPale,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13,
          }}
        >
          {icon}
        </div>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 600, color: C.dark }}>{title}</div>
          <div style={{ fontSize: 9.5, color: C.muted }}>{sub}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {[90, 55, 80, 68].map((w, i) => (
          <div
            key={i}
            style={{
              height: 5.5, borderRadius: 3,
              background: i === 1 ? "rgba(47,79,62,0.2)" : C.border,
              width: `${w}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="casos" style={S.section}>
      <div style={S.container}>
        <span style={S.eyebrow}>Casos de uso</span>
        <h2 style={S.sectionTitle}>Para cada tipo de trámite notarial</h2>
        <p style={S.sectionSub}>
          nominds se adapta a los documentos y flujos más frecuentes en una notaría moderna.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 22, marginTop: 48,
          }}
        >
          {CASES.map((c, i) => (
            <UseCaseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  icon, docTitle, docSub, tag, title, desc,
}: (typeof CASES)[number]) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: 16, overflow: "hidden",
        background: "white",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = C.sand;
        el.style.boxShadow = "0 8px 32px rgba(26,25,22,0.07)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = C.border;
        el.style.boxShadow = "none";
      }}
    >
      {/* Visual */}
      <div
        style={{
          height: 150, background: C.offWhite,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20, position: "relative", overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: -38, right: -38,
            width: 110, height: 110,
            background: "radial-gradient(circle, rgba(47,79,62,0.07), transparent)",
            borderRadius: "50%",
          }}
        />
        <DocPreview icon={icon} title={docTitle} sub={docSub} />
      </div>

      {/* Content */}
      <div style={{ padding: 22 }}>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: C.sandL, color: C.warmGray,
            fontSize: 10.5, fontWeight: 500,
            padding: "3px 9px", borderRadius: 20, marginBottom: 9,
          }}
        >
          {tag}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: C.dark, marginBottom: 6, lineHeight: 1.35 }}>
          {title}
        </div>
        <div style={{ fontSize: 13.5, color: C.warmGray, lineHeight: 1.6, fontWeight: 300 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
