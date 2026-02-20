"use client";

import { C, S } from "@/lib/tokens";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      style={{
        background: C.dark,
        padding: "108px 28px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 560, height: 560,
          background: "radial-gradient(circle, rgba(47,79,62,0.22) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, ...S.container }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 11, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "1.5px",
            color: C.greenL, marginBottom: 18,
          }}
        >
          Empieza hoy
        </span>

        <h2
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(32px, 3.8vw, 52px)",
            lineHeight: 1.1, letterSpacing: "-1.5px",
            color: C.white, maxWidth: 640,
            margin: "0 auto 18px", fontWeight: 400,
          }}
        >
          Tu notaría puede procesar documentos de forma inteligente
        </h2>

        <p
          style={{
            fontSize: 16.5, color: "rgba(250,250,248,0.48)",
            fontWeight: 300, maxWidth: 460,
            margin: "0 auto 36px", lineHeight: 1.65,
          }}
        >
          Agenda una demo personalizada. Te mostramos nominds funcionando con tus
          documentos reales, sin compromiso.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
          <a
            href="mailto:demo@nominds.mx"
            style={{
              background: C.white, color: C.dark,
              border: "none", borderRadius: 8,
              padding: "12px 26px", fontSize: 14.5, fontWeight: 500,
              cursor: "pointer", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 7,
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ECE9E3";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = C.white;
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Agendar demo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="mailto:hola@nominds.mx"
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "rgba(250,250,248,0.75)",
              border: "1px solid rgba(255,255,255,0.13)",
              borderRadius: 8, padding: "12px 26px",
              fontSize: 14.5, fontWeight: 400,
              cursor: "pointer", textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)")}
          >
            Hablar con el equipo
          </a>
        </div>

        <p style={{ fontSize: 12, color: "rgba(250,250,248,0.28)", marginTop: 22 }}>
          Sin tarjeta de crédito · Demo gratuita · Respuesta en 24 horas
        </p>
      </div>
    </section>
  );
}
