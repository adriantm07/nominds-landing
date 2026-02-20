import { C, S } from "@/lib/tokens";

const BENEFITS = [
  {
    num: "01",
    title: "Reducción drástica de tiempo de captura",
    desc: "Lo que antes tomaba 45 minutos, ahora toma menos de 2. Tu equipo se enfoca en lo que realmente agrega valor.",
  },
  {
    num: "02",
    title: "Precisión superior al humano",
    desc: "Más del 96% de precisión en extracción, con alertas inteligentes cuando la confianza es baja.",
  },
  {
    num: "03",
    title: "Sin cambiar tu forma de trabajar",
    desc: "nominds se integra con los sistemas que ya usas. No requiere migración de datos ni procesos desde cero.",
  },
  {
    num: "04",
    title: "Trazabilidad y cumplimiento",
    desc: "Registro de cada extracción, usuario y revisión. Auditoría completa para cumplimiento regulatorio.",
  },
] as const;

const METRICS = [
  { value: "96", unit: "%", label: "de precisión promedio en extracción de datos" },
  { value: "<90", unit: "s", label: "para procesar un documento completo" },
  { value: "10", unit: "×", label: "más rápido que la captura manual tradicional" },
] as const;

export default function Benefits() {
  return (
    <section id="beneficios" style={{ ...S.section, background: C.offWhite }}>
      <div style={S.container}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 72, alignItems: "start",
          }}
        >
          {/* ── Left: benefits list ── */}
          <div>
            <span style={S.eyebrow}>Beneficios</span>
            <h2
              style={{
                ...S.sectionTitle,
                fontSize: "clamp(24px, 2.8vw, 36px)",
              }}
            >
              Por qué las notarías eligen nominds
            </h2>
            <p style={{ ...S.sectionSub, fontSize: 14.5, marginTop: 10 }}>
              No solo automatizas. Transformas la forma en que opera tu notaría.
            </p>

            <div style={{ marginTop: 32 }}>
              {BENEFITS.map((b, i) => (
                <div
                  key={i}
                  style={{
                    paddingTop: 22, paddingBottom: 22,
                    borderBottom: `1px solid ${C.border}`,
                    ...(i === 0 ? { borderTop: `1px solid ${C.border}` } : {}),
                    display: "flex", gap: 16, alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontSize: 27, color: C.green,
                      lineHeight: 1, flexShrink: 0, width: 34, fontWeight: 400,
                    }}
                  >
                    {b.num}
                  </div>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: C.dark, marginBottom: 5 }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.6, fontWeight: 300 }}>
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: trust panel ── */}
          <div
            style={{
              background: "white",
              border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 34,
              display: "flex", flexDirection: "column", gap: 26,
            }}
          >
            {METRICS.map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 50, lineHeight: 1,
                    color: C.dark, letterSpacing: "-2px", fontWeight: 400,
                  }}
                >
                  {m.value}
                  <span style={{ color: C.green }}>{m.unit}</span>
                </div>
                <div style={{ fontSize: 13.5, color: C.warmGray, fontWeight: 300, marginTop: 4 }}>
                  {m.label}
                </div>
                {i < METRICS.length - 1 && (
                  <div style={{ height: 1, background: C.border, marginTop: 22 }} />
                )}
              </div>
            ))}

            <div style={{ height: 1, background: C.border }} />

            {/* Testimonial */}
            <div>
              <p
                style={{
                  fontSize: 15, fontStyle: "italic",
                  color: C.dark3, lineHeight: 1.65,
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontWeight: 400,
                }}
              >
                &ldquo;Antes perdíamos horas capturando datos de expedientes. Con nominds,
                procesamos el triple de trámites con el mismo equipo.&rdquo;
              </p>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>
                — Notaría, Ciudad de México
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
