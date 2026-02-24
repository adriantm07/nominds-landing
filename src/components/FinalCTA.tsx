"use client";

import { C, S } from "@/lib/tokens";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      style={{
        background: C.dark,
        padding: "108px 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700, height: 500,
          background: "radial-gradient(ellipse, rgba(47,79,62,0.35) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute", top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: 120, height: 2,
          background: `linear-gradient(90deg, transparent, ${C.scan}, transparent)`,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, ...S.container }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* ── Left: text ── */}
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "rgba(76,175,122,0.1)",
                border: "1px solid rgba(76,175,122,0.2)",
                borderRadius: 20, padding: "5px 14px",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: C.scan,
                  boxShadow: `0 0 6px ${C.scan}`,
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: C.scan, letterSpacing: "0.5px" }}>
                Empieza hoy
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'NeueHaas', 'Helvetica Neue', sans-serif",
                fontSize: "clamp(32px, 3.5vw, 50px)",
                lineHeight: 1.08, letterSpacing: "-1.5px",
                color: C.white,
                fontWeight: 500,
                margin: "0 0 20px",
              }}
            >
              Procesa documentos legales de forma inteligente
            </h2>

            <p
              style={{
                fontSize: 16, color: "rgba(250,250,248,0.5)",
                fontWeight: 300, lineHeight: 1.7,
                margin: 0, maxWidth: 400,
              }}
            >
              Agenda una demo personalizada. Te mostramos nominds
              funcionando con tus documentos reales, sin compromiso.
            </p>
          </div>

          {/* ── Right: action card ── */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              padding: "40px 36px",
            }}
          >
            {/* 3 trust points */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {[
                { icon: "✓", text: "Sin tarjeta de crédito" },
                { icon: "✓", text: "Demo con tus documentos reales" },
                { icon: "✓", text: "Respuesta en menos de 24 horas" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      background: "rgba(76,175,122,0.12)",
                      border: "1px solid rgba(76,175,122,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, color: C.scan, fontWeight: 700,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 14, color: "rgba(250,250,248,0.7)", fontWeight: 300 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 28 }} />

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:demo@nominds.mx"
                style={{
                  background: C.white, color: C.dark,
                  border: "none", borderRadius: 10,
                  padding: "14px 24px", fontSize: 14.5, fontWeight: 600,
                  cursor: "pointer", textDecoration: "none",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:hola@nominds.mx"
                style={{
                  background: "transparent",
                  color: "rgba(250,250,248,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10, padding: "13px 24px",
                  fontSize: 14, fontWeight: 400,
                  cursor: "pointer", textDecoration: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.9)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.6)";
                }}
              >
                Hablar con el equipo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}