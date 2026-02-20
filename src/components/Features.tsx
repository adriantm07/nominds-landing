"use client";

import { C, S } from "@/lib/tokens";

const FEATURES = [
  {
    icon: "🔍",
    title: "Extracción inteligente de datos",
    desc: "Lee y estructura automáticamente la información de INEs, pasaportes, actas, contratos y escrituras con precisión superior al 95%.",
  },
  {
    icon: "🛡️",
    title: "Validación en tiempo real",
    desc: "Verifica CURPs, fechas de vigencia, consistencia de datos y señales de alteración. Alertas automáticas cuando algo requiere revisión.",
  },
  {
    icon: "📊",
    title: "Confianza por campo",
    desc: "Cada dato extraído incluye un porcentaje de confianza. Tu equipo revisa solo los campos que lo necesitan, no todo el documento.",
  },
  {
    icon: "🔗",
    title: "Integración con tu sistema",
    desc: "API REST y webhooks listos para conectarse con tu sistema de gestión notarial, ERP, o base de datos existente.",
  },
  {
    icon: "📁",
    title: "Expediente digital",
    desc: "Organiza y centraliza todos los documentos y datos extraídos por cliente, trámite o expediente. Búsqueda instantánea.",
  },
  {
    icon: "🏛️",
    title: "Diseñado para lo legal",
    desc: "No es un OCR genérico. nominds fue entrenado con documentos del contexto legal y notarial mexicano para máxima precisión.",
  },
] as const;

export default function Features() {
  return (
    <section id="producto-features" style={S.section}>
      <div style={S.container}>
        <span style={S.eyebrow}>Lo que hace nominds</span>
        <h2 style={S.sectionTitle}>Inteligencia en cada paso del proceso documental</h2>
        <p style={S.sectionSub}>
          Una plataforma diseñada específicamente para los flujos de trabajo de notarías,
          con tecnología de IA de última generación.
        </p>

        {/* 3×2 grid with 1px separator lines */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: C.border,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            overflow: "hidden",
            marginTop: 52,
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCell key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCell({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: C.white,
        padding: "30px 26px",
        transition: "background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = C.offWhite)}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = C.white)}
    >
      <div
        style={{
          width: 38, height: 38,
          background: C.greenPale,
          borderRadius: 9,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 17, marginBottom: 18,
        }}
      >
        {icon}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: C.dark, marginBottom: 7, lineHeight: 1.3 }}>
        {title}
      </div>
      <div style={{ fontSize: 13.5, color: C.warmGray, lineHeight: 1.6, fontWeight: 300 }}>
        {desc}
      </div>
    </div>
  );
}
