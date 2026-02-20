import { C, S } from "@/lib/tokens";

const REASONS = [
  {
    title: "Entrenado con documentos reales",
    desc: "Nuestros modelos fueron entrenados con miles de documentos del contexto legal y notarial mexicano, no con datos genéricos.",
  },
  {
    title: "Privacidad y seguridad de nivel empresarial",
    desc: "Tus documentos nunca se usan para entrenar modelos. Encriptación en tránsito y en reposo. Cumplimiento LFPDPPP.",
  },
  {
    title: "Equipo con experiencia en lo legal",
    desc: "Detrás de nominds hay un equipo con experiencia real en tecnología aplicada al sector legal y notarial.",
  },
  {
    title: "Soporte y evolución continua",
    desc: "El producto evoluciona contigo. Escuchamos a cada notaría para mejorar los modelos y agregar los tipos de documentos que necesitas.",
  },
] as const;

export default function WhyNominds() {
  return (
    <section id="porque" style={S.section}>
      <div style={S.container}>
        <span style={S.eyebrow}>Por qué nominds</span>
        <h2 style={S.sectionTitle}>IA construida para el contexto legal mexicano</h2>
        <p style={S.sectionSub}>
          No adaptamos una herramienta genérica. Construimos nominds desde cero para los
          documentos, formatos y flujos del sistema notarial mexicano.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 36, marginTop: 48,
          }}
        >
          {REASONS.map((r, i) => (
            <div key={i}>
              <div
                style={{
                  width: 30, height: 3,
                  background: C.green,
                  borderRadius: 2, marginBottom: 18,
                }}
              />
              <div style={{ fontSize: 14.5, fontWeight: 600, color: C.dark, marginBottom: 7, lineHeight: 1.3 }}>
                {r.title}
              </div>
              <div style={{ fontSize: 13, color: C.warmGray, lineHeight: 1.65, fontWeight: 300 }}>
                {r.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
