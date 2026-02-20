import { C, S } from "@/lib/tokens";

const BEFORE = [
  ["📄", "Documento físico llega a la ventanilla"],
  ["👁️", "Empleado lee y captura datos manualmente campo por campo"],
  ["⚠️", "Error de captura detectado → reproceso"],
  ["🕐", "45–90 minutos por expediente"],
  ["🗂️", "Datos en hojas de cálculo desconectadas"],
];

const AFTER = [
  ["📸", "Fotografía o escaneo del documento"],
  ["🤖", "IA extrae y valida todos los campos automáticamente"],
  ["✅", "Confianza por campo — alertas solo cuando importa"],
  ["⚡", "Menos de 90 segundos por documento"],
  ["🔗", "Datos estructurados listos para tu sistema"],
];

export default function Problem() {
  return (
    <section style={{ ...S.section, background: C.dark }}>
      <div style={S.container}>
        <span style={{ ...S.eyebrow, color: C.greenL }}>El problema actual</span>
        <h2
          style={{
            ...S.sectionTitle,
            color: C.white,
            maxWidth: 680,
          }}
        >
          Los procesos manuales frenan a las notarías modernas
        </h2>
        <p style={{ ...S.sectionSub, color: "rgba(250,250,248,0.5)" }}>
          Cada día, tu equipo dedica horas a capturar datos de documentos físicos.
          Errores humanos, reprocesos y cuellos de botella que cuestan tiempo y dinero.
        </p>

        {/* Flow diagram */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 0,
            alignItems: "start",
            marginTop: 52,
          }}
        >
          {/* ─ BEFORE ─ */}
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: 10.5, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "1.5px",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.4)",
                borderRadius: 4, padding: "5px 11px", marginBottom: 18,
              }}
            >
              Sin nominds
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {BEFORE.map(([icon, text], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 10,
                  }}
                >
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.48)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─ ARROW ─ */}
          <div
            style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "0 32px", paddingTop: 46,
            }}
          >
            <div
              style={{
                width: 1, height: 160,
                background: `linear-gradient(to bottom, transparent, ${C.green}, transparent)`,
              }}
            />
            <div
              style={{
                background: C.green, color: "white",
                fontSize: 10, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.5px",
                padding: "5px 12px", borderRadius: 20,
                margin: "10px 0", whiteSpace: "nowrap",
              }}
            >
              nominds
            </div>
            <div
              style={{
                width: 1, height: 160,
                background: `linear-gradient(to bottom, transparent, ${C.green}, transparent)`,
              }}
            />
          </div>

          {/* ─ AFTER ─ */}
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: 10.5, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "1.5px",
                background: "rgba(47,79,62,0.18)",
                color: C.greenL,
                borderRadius: 4, padding: "5px 11px", marginBottom: 18,
              }}
            >
              Con nominds
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {AFTER.map(([icon, text], i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "12px 14px",
                    background: "rgba(47,79,62,0.09)",
                    border: "1px solid rgba(47,79,62,0.22)",
                    borderRadius: 10,
                  }}
                >
                  <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(250,250,248,0.82)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
