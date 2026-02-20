"use client";

import { C, S } from "@/lib/tokens";
import ScanAnimation from "./ScanAnimation";

export default function Hero() {
  return (
    <section
      id="producto"
      style={{
        ...S.section,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 110,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
        background: C.white,
      }}
    >
      {/* Subtle green radial glow top-right */}
      <div
        style={{
          position: "absolute", top: -180, right: -280,
          width: 720, height: 720,
          background: "radial-gradient(circle, rgba(47,79,62,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          ...S.container,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Copy ── */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: C.greenPale,
              color: C.greenDeep,
              border: "1px solid rgba(47,79,62,0.18)",
              borderRadius: 20,
              padding: "4px 12px",
              fontSize: 11.5, fontWeight: 500, letterSpacing: "0.3px",
              marginBottom: 22,
            }}
          >
            <svg width="7" height="7" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" fill={C.green} />
            </svg>
            Inteligencia documental para notarías
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(36px, 4.2vw, 58px)",
              lineHeight: 1.07,
              letterSpacing: "-1.5px",
              color: C.dark,
              marginBottom: 18,
              fontWeight: 400,
            }}
          >
            De documentos
            <br />en papel a datos
            <br />
            <em style={{ fontStyle: "italic", color: C.green }}>estructurados</em>
            <br />al instante
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: 16.5, lineHeight: 1.65,
              color: C.warmGray, maxWidth: 480,
              marginBottom: 32, fontWeight: 300,
            }}
          >
            nominds lee, extrae y valida la información de documentos legales y de
            identidad con inteligencia artificial, eliminando el trabajo manual en
            tus procesos notariales.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#contacto"
              style={S.btnPrimary}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.greenDeep;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.green;
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Agendar demo
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#casos"
              style={S.btnOutline}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = C.offWhite}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              Ver casos de uso
            </a>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 36 }}>
            <div style={{ display: "flex" }}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: C.sand,
                    border: "2px solid white",
                    marginLeft: i === 0 ? 0 : -7,
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: 12.5, color: C.muted }}>
              Utilizado por notarías en toda la república
            </span>
          </div>
        </div>

        {/* ── RIGHT: Animation ── */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ScanAnimation autoPlay />
        </div>
      </div>
    </section>
  );
}
