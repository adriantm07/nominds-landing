"use client";

import { useState, useEffect, useRef } from "react";
import { C } from "@/lib/tokens";

/* ────────────────────────────────────────────────────────────────
   nominds — Brand Guidelines (live)
   Renderiza el sistema de diseño usando la tipografía y la paleta
   reales. Es la prueba de que el sistema funciona sobre sí mismo.
   Documento espejo de BRAND_GUIDELINES.md · v1.0.0
──────────────────────────────────────────────────────────────── */

const DISPLAY = "'DM Serif Display', Georgia, serif";
const BODY = "'DM Sans', 'Helvetica Neue', sans-serif";
const MONO = "'DM Mono', monospace";

const SECTIONS = [
  { id: "intro", label: "Introducción" },
  { id: "esencia", label: "Esencia de marca" },
  { id: "logo", label: "Logo" },
  { id: "color", label: "Color" },
  { id: "tipografia", label: "Tipografía" },
  { id: "espaciado", label: "Espaciado" },
  { id: "iconografia", label: "Iconografía" },
  { id: "componentes", label: "Componentes" },
  { id: "patrones", label: "Patrones nativos" },
  { id: "motion", label: "Motion" },
  { id: "voz", label: "Voz y tono" },
  { id: "tokens", label: "Tokens" },
  { id: "accesibilidad", label: "Accesibilidad" },
];

/* ─── primitives ─────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: C.amber, marginBottom: 14 }}>
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,3.5vw,40px)", lineHeight: 1.1, letterSpacing: "-0.8px", color: C.dark, margin: "0 0 12px", fontWeight: 500 }}>
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 16, color: C.warmGray, fontWeight: 300, lineHeight: 1.7, maxWidth: 620, margin: "0 0 32px" }}>{children}</p>;
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ padding: "72px 0", borderBottom: `1px solid ${C.border}`, scrollMarginTop: 24 }}>
      {children}
    </section>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "white", border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, ...style }}>
      {children}
    </div>
  );
}

/* ─── Color swatch ───────────────────────────────────────────── */

function Swatch({ name, hex, token, on, contrast }: { name: string; hex: string; token: string; on?: string; contrast?: string }) {
  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", background: "white" }}>
      <div style={{ height: 76, background: hex, display: "flex", alignItems: "flex-end", padding: 10 }}>
        {on && <span style={{ fontSize: 12, color: on, fontWeight: 500 }}>Texto</span>}
      </div>
      <div style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: C.dark }}>{name}</div>
        <div style={{ fontSize: 11, color: C.muted, fontFamily: MONO, marginTop: 2 }}>{hex}</div>
        <div style={{ fontSize: 10.5, color: C.warmGray, marginTop: 3 }}>{token}</div>
        {contrast && <div style={{ fontSize: 10, color: C.warmGray, marginTop: 4 }}>{contrast}</div>}
      </div>
    </div>
  );
}

/* ─── Live laser scan demo (compact, replay) ─────────────────── */

const DEMO_FIELDS = [
  { label: "Nombre", value: "PÉREZ GARCÍA JOHN", conf: 98, tier: "high", t: 500 },
  { label: "CURP", value: "PEGA850912HDFSRN03", conf: 99, tier: "high", t: 850 },
  { label: "Vigencia", value: "15 / Abr / 2026", conf: 95, tier: "high", t: 1200 },
  { label: "Domicilio", value: "AV. PRINCIPAL 456, EDOMEX", conf: 86, tier: "med", t: 1550 },
] as const;

function ScanDemo() {
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("idle");
  const [lit, setLit] = useState<number[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  const run = () => {
    timers.current.forEach(clearTimeout);
    setPhase("idle"); setLit([]);
    const start = setTimeout(() => {
      setPhase("scanning");
      if (lineRef.current) {
        lineRef.current.style.transition = "none";
        lineRef.current.style.transform = "translateY(0px)";
        // force reflow then animate
        void lineRef.current.offsetHeight;
        lineRef.current.style.transition = "transform 1800ms linear";
        lineRef.current.style.transform = "translateY(150px)";
      }
      DEMO_FIELDS.forEach((f, i) => {
        timers.current.push(setTimeout(() => setLit((p) => [...p, i]), f.t));
      });
      timers.current.push(setTimeout(() => setPhase("done"), 2100));
    }, 60);
    timers.current.push(start);
  };

  useEffect(() => {
    run();
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {/* doc */}
      <div style={{ position: "relative", width: 150, height: 150, flexShrink: 0, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}`, background: "linear-gradient(160deg,#f9f9f7,#e8e8e3)", boxShadow: "0 4px 16px rgba(26,29,25,.12)" }}>
        <div style={{ padding: 12, fontFamily: "Arial, sans-serif" }}>
          <div style={{ fontSize: 7, fontWeight: 900, color: "#8B1A1A", marginBottom: 6 }}>LICENCIA · EDOMEX</div>
          {["PÉREZ GARCÍA JOHN", "PEGA850912HDFSRN03", "15/04/2026", "AV. PRINCIPAL 456"].map((t, i) => (
            <div key={i} style={{ fontSize: 6.5, color: lit.includes(i) ? C.dark : "#9a9a96", borderLeft: lit.includes(i) ? `2px solid ${C.scan}` : "2px solid transparent", paddingLeft: 3, marginBottom: 5, background: lit.includes(i) ? "rgba(76,175,122,0.08)" : "transparent", transition: "all .35s" }}>{t}</div>
          ))}
        </div>
        {phase === "scanning" && (
          <div ref={lineRef} style={{ position: "absolute", left: 0, right: 0, top: 0, height: 2, background: `linear-gradient(to right,transparent,${C.scan},transparent)`, boxShadow: `0 0 12px 3px rgba(76,175,122,.45)`, zIndex: 5 }} />
        )}
      </div>

      {/* fields */}
      <div style={{ flex: 1, minWidth: 240 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: phase === "done" ? C.green : C.scan, animation: phase === "scanning" ? "bgPulse 1.5s ease-in-out infinite" : "none" }} />
          <span style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: C.muted }}>{phase === "done" ? "Extracción completa" : "Escaneando…"}</span>
          <button onClick={run} style={{ marginLeft: "auto", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, padding: "3px 12px", fontSize: 11, color: C.muted, cursor: "pointer", fontFamily: BODY }}>↺ Replay</button>
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          {DEMO_FIELDS.map((f, i) => {
            const high = f.tier === "high";
            const visible = lit.includes(i);
            return (
              <div key={i} style={{ background: "white", border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 10px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)", transition: "all .35s cubic-bezier(0.4,0,0.2,1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".4px", color: C.muted }}>{f.label}</span>
                  <span style={{ marginLeft: "auto", fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 8, background: high ? C.greenPale : C.amberPale, color: high ? C.green : C.amber }}>{f.conf}%</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: C.dark, fontFamily: MONO, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.value}</div>
                <div style={{ height: 2, background: C.border, borderRadius: 2, marginTop: 5, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 2, background: high ? C.green : C.amber, width: visible ? `${f.conf}%` : "0%", transition: "width .7s cubic-bezier(0.4,0,0.2,1) .25s" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Buttons demo ───────────────────────────────────────────── */

function BtnPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{ display: "inline-flex", alignItems: "center", gap: 7, background: C.green, color: "white", border: "none", borderRadius: 8, padding: "11px 22px", fontSize: 14.5, fontWeight: 500, cursor: "pointer", fontFamily: BODY, transition: "background .2s, transform .15s" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = C.greenDeep; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = C.green; e.currentTarget.style.transform = "translateY(0)"; }}
    >{children}</button>
  );
}

/* ─── main page ──────────────────────────────────────────────── */

export default function BrandPage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: C.white, color: C.dark, fontFamily: BODY, minHeight: "100vh" }}>
      <style>{`
        @keyframes bgPulse {0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.7)}}
        @keyframes bgFloat {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes bgGrow {from{width:0}to{width:var(--w,90%)}}
        .brand-link:hover{color:${C.dark}!important;background:${C.offWhite}!important;}
        html{scroll-behavior:smooth;}
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", maxWidth: 1280, margin: "0 auto" }}>
        {/* ── Sidebar ── */}
        <aside style={{ position: "sticky", top: 0, alignSelf: "start", height: "100vh", overflowY: "auto", borderRight: `1px solid ${C.border}`, padding: "32px 20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Brand guidelines/Logo/Logo Files/png/Black logo - no background.png" alt="nominds" style={{ height: 24, width: "auto" }} />
          </div>
          <div style={{ fontSize: 11, color: C.muted, marginBottom: 24, letterSpacing: ".3px" }}>Brand Guidelines · v1.0.0</div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="brand-link"
                 style={{ fontSize: 13, padding: "7px 10px", borderRadius: 7, textDecoration: "none", fontWeight: active === s.id ? 600 : 400, color: active === s.id ? C.green : C.warmGray, background: active === s.id ? C.greenPale : "transparent", transition: "color .15s, background .15s" }}>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* ── Content ── */}
        <main style={{ padding: "0 48px 96px" }}>
          {/* Hero */}
          <header style={{ padding: "72px 0 0" }}>
            <Eyebrow>Sistema de diseño</Eyebrow>
            <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(40px,5vw,64px)", lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 16px", fontWeight: 500 }}>
              nominds<span style={{ color: C.green }}>.</span> Brand Guidelines
            </h1>
            <Lead>
              Inteligencia documental para el mundo legal y notarial de México. Esta página renderiza el sistema con la tipografía y la paleta reales —es la prueba de que funciona sobre sí mismo.
            </Lead>
          </header>

          {/* 1 · Intro */}
          <Section id="intro">
            <Eyebrow>01 · Introducción</Eyebrow>
            <SectionTitle>Qué es nominds</SectionTitle>
            <Lead>
              nominds lee, extrae y estructura automáticamente la información de documentos mexicanos —INE, actas, CSF/SAT, escrituras, licencias— para notarías, despachos y empresas con alto volumen de KYC. Convierte papel en datos estructurados, listos para usar.
            </Lead>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
              {[
                { t: "Diseñadores", d: "Paleta, tipografía, espaciado, componentes, do's & don'ts." },
                { t: "Desarrollo", d: "Tokens (CSS / Tailwind / JSON), specs de componentes, motion." },
                { t: "Marketing", d: "Voz, tono, glosario, aplicaciones por canal, uso del logo." },
              ].map((a) => (
                <Card key={a.t}>
                  <div style={{ fontFamily: DISPLAY, fontSize: 17, fontWeight: 500, marginBottom: 6 }}>{a.t}</div>
                  <div style={{ fontSize: 13.5, color: C.warmGray, lineHeight: 1.6, fontWeight: 300 }}>{a.d}</div>
                </Card>
              ))}
            </div>
          </Section>

          {/* 2 · Esencia */}
          <Section id="esencia">
            <Eyebrow>02 · Esencia de marca</Eyebrow>
            <SectionTitle>Inteligencia documental, legal-first</SectionTitle>
            <Lead>
              nominds es inteligencia documental construida desde cero para el contexto legal y notarial mexicano. No es un OCR genérico. Arquetipo: <strong style={{ color: C.dark, fontWeight: 600 }}>Sabio + Artesano</strong>.
            </Lead>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
              {[
                ["Honestidad de producto", "Extrae y estructura. Comunicamos lo que hace, con datos citados con humildad."],
                ["Especialización legal", "Cada decisión parte de los documentos y flujos reales del sector."],
                ["Sobriedad editorial", "Diseño pensado, no decorado. Aire, jerarquía, acento medido."],
                ["Confianza verificable", "Cada extracción trae su nivel de confianza. La máquina propone; el profesional decide."],
                ["Mexicanidad sin folclor", "Español neutro de México, estética contemporánea."],
              ].map(([t, d]) => (
                <Card key={t} style={{ background: C.offWhite, border: "none" }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.dark, marginBottom: 6 }}>{t}</div>
                  <div style={{ fontSize: 12.5, color: C.warmGray, lineHeight: 1.55, fontWeight: 300 }}>{d}</div>
                </Card>
              ))}
            </div>
          </Section>

          {/* 3 · Logo */}
          <Section id="logo">
            <Eyebrow>03 · Logo</Eyebrow>
            <SectionTitle>Símbolo entrelazado + wordmark</SectionTitle>
            <Lead>
              Un nudo infinito de tres listones (documentos y datos que se enlazan) + el wordmark <code style={{ fontFamily: MONO, color: C.green }}>nominds</code>, siempre en minúsculas. El logo dark es el primario (full color canónico = monocromo <code style={{ fontFamily: MONO }}>nm-dark</code>).
            </Lead>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Card style={{ background: C.white, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 140 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Brand guidelines/Logo/Logo Files/png/Black logo - no background.png" alt="nominds dark" style={{ height: 40 }} />
              </Card>
              <Card style={{ background: C.dark, border: "none", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 140 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Brand guidelines/Logo/Logo Files/png/White logo - no background.png" alt="nominds white" style={{ height: 40 }} />
              </Card>
            </div>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Card style={{ background: C.greenPale, border: "none" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.green, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 8 }}>✓ Permitido</div>
                <ul style={{ fontSize: 13, color: C.dark2, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                  <li>Dark sobre fondos claros</li>
                  <li>White sobre fondos oscuros / verde</li>
                  <li>Clearspace ≥ 1X (X = altura de la &quot;n&quot;)</li>
                </ul>
              </Card>
              <Card style={{ background: "rgba(184,78,47,0.08)", border: `1px solid rgba(184,78,47,0.2)` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.error, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 8 }}>✕ Prohibido</div>
                <ul style={{ fontSize: 13, color: C.dark2, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                  <li>Rotar, deformar o recolorear</li>
                  <li>Capitalizar (Nominds / NOMINDS)</li>
                  <li>Efectos, sombras, sobre foto sin caja</li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* 4 · Color */}
          <Section id="color">
            <Eyebrow>04 · Color</Eyebrow>
            <SectionTitle>Verde &quot;bosque vivo&quot; como color principal</SectionTitle>
            <Lead>
              El verde es el ancla de la marca: tierra pero vivo —confianza, seguridad, profesionalismo, evolución—. El ámbar es el único acento cromático. Neutros cálidos y mucho aire.
            </Lead>

            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: C.muted, margin: "8px 0 12px" }}>Verdes de marca</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12, marginBottom: 28 }}>
              <Swatch name="Green (primario)" hex={C.green} token="action-primary" on="#fff" contrast="white 5.9:1 ✓ AA" />
              <Swatch name="Green deep" hex={C.greenDeep} token="action-primary-hover" on="#fff" contrast="white 8.2:1 ✓ AAA" />
              <Swatch name="Green light" hex={C.greenL} token="green-l" on="#fff" />
              <Swatch name="Green pale" hex={C.greenPale} token="action-primary-subtle" contrast="green 5.5:1 ✓" />
              <Swatch name="Scan" hex={C.scan} token="accent-scan" contrast="láser / progreso" />
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: C.muted, margin: "8px 0 12px" }}>Neutros y texto</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12, marginBottom: 28 }}>
              <Swatch name="White (fondo)" hex={C.white} token="background-base" />
              <Swatch name="Off-white" hex={C.offWhite} token="background-subtle" />
              <Swatch name="Sand-l" hex={C.sandL} token="background-sand" />
              <Swatch name="Border" hex={C.border} token="border-default" />
              <Swatch name="Dark (texto)" hex={C.dark} token="text-primary" on="#fff" contrast="15.8:1 ✓ AAA" />
              <Swatch name="Dark-2" hex={C.dark2} token="text-secondary" on="#fff" contrast="13.0:1 ✓ AAA" />
              <Swatch name="Warm gray" hex={C.warmGray} token="text-tertiary" on="#fff" contrast="4.6:1 ✓ AA" />
              <Swatch name="Muted" hex={C.muted} token="text-muted" contrast="2.9:1 ⚠ grande" />
            </div>

            <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: C.muted, margin: "8px 0 12px" }}>Acento + estado</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 12 }}>
              <Swatch name="Amber" hex={C.amber} token="accent-brand" on="#fff" contrast="eyebrow / acento" />
              <Swatch name="Amber pale" hex={C.amberPale} token="accent-brand-subtle" />
              <Swatch name="Error" hex={C.error} token="status-error" on="#fff" contrast="rojo tierra" />
              <Swatch name="Info" hex={C.info} token="status-info" on="#fff" contrast="selección / info" />
            </div>
          </Section>

          {/* 5 · Tipografía */}
          <Section id="tipografia">
            <Eyebrow>05 · Tipografía</Eyebrow>
            <SectionTitle>DM Serif Display · DM Sans · DM Mono</SectionTitle>
            <Lead>
              DM Serif Display para display y headings (serif editorial, su firma). DM Sans para body y UI (sobre mucho aire). DM Mono solo para datos, OCR e IDs.
            </Lead>
            <Card style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div>
                <Meta>Display XL · DM Serif Display · −2px</Meta>
                <div style={{ fontFamily: DISPLAY, fontSize: 60, lineHeight: 1.05, letterSpacing: "-2px", fontWeight: 500 }}>De papel a datos</div>
              </div>
              <div>
                <Meta>Display M · DM Serif Display · −0.8px</Meta>
                <div style={{ fontFamily: DISPLAY, fontSize: 36, letterSpacing: "-0.8px", fontWeight: 500 }}>Por qué las notarías eligen nominds</div>
              </div>
              <div>
                <Meta>Body M · DM Sans 400</Meta>
                <div style={{ fontFamily: BODY, fontSize: 16, lineHeight: 1.7, fontWeight: 400, maxWidth: 540 }}>nominds lee, extrae y estructura la información de documentos legales con inteligencia artificial, eliminando el trabajo manual.</div>
              </div>
              <div>
                <Meta>Eyebrow · DM Sans 600 · 11px · 1.5px · MAYÚS · amber</Meta>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", color: C.amber }}>El problema actual</div>
              </div>
              <div>
                <Meta>Mono · DM Mono · datos extraídos</Meta>
                <div style={{ fontFamily: MONO, fontSize: 14, color: C.dark, lineHeight: 1.8 }}>CURP&nbsp;&nbsp;PEGA850912HDFSRN03<br />FOLIO&nbsp;&nbsp;NL/2024/00341</div>
              </div>
            </Card>
          </Section>

          {/* 6 · Espaciado */}
          <Section id="espaciado">
            <Eyebrow>06 · Espaciado</Eyebrow>
            <SectionTitle>Base de 4px</SectionTitle>
            <Lead>Toda medida de layout sale de esta escala. Padding de sección 24–28px horizontal; 48–88px vertical.</Lead>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end" }}>
              {[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map((s) => (
                <div key={s} style={{ textAlign: "center" }}>
                  <div style={{ width: s, height: s, background: C.green, borderRadius: 3, margin: "0 auto" }} />
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 6, fontFamily: MONO }}>{s}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* 7 · Iconografía */}
          <Section id="iconografia">
            <Eyebrow>07 · Iconografía</Eyebrow>
            <SectionTitle>Outline, trazo 1.8, remates redondeados</SectionTitle>
            <Lead>Librería base Lucide. Color nm-dark (neutro) o nm-green (marca). Tamaños 16 / 20 / 24.</Lead>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {[
                <path key="a" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />,
                <><circle key="c" cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
                <path key="s" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                <polyline key="ch" points="20 6 9 17 4 12" />,
                <><path key="u" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></>,
              ].map((p, i) => (
                <div key={i} style={{ width: 52, height: 52, borderRadius: 11, background: C.offWhite, display: "flex", alignItems: "center", justifyContent: "center", color: C.green }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">{p}</svg>
                </div>
              ))}
            </div>
          </Section>

          {/* 8 · Componentes */}
          <Section id="componentes">
            <Eyebrow>08 · Componentes</Eyebrow>
            <SectionTitle>UI en vivo, no capturas</SectionTitle>

            <Meta>Botones</Meta>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 28 }}>
              <BtnPrimary>Agendar demo →</BtnPrimary>
              <button style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "transparent", color: C.dark, border: `1px solid ${C.border}`, borderRadius: 8, padding: "11px 22px", fontSize: 14.5, cursor: "pointer", fontFamily: BODY }}>Outline</button>
              <button style={{ background: "transparent", color: C.dark, border: "none", borderRadius: 8, padding: "11px 18px", fontSize: 14.5, cursor: "pointer", fontFamily: BODY }}>Ghost</button>
              <button disabled style={{ background: C.green, color: "white", border: "none", borderRadius: 8, padding: "11px 22px", fontSize: 14.5, opacity: 0.5, cursor: "not-allowed", fontFamily: BODY }}>Disabled</button>
            </div>

            <Meta>Chips / Badges</Meta>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              <Chip bg={C.sandL} fg={C.dark2}>Neutro</Chip>
              <Chip bg={C.greenPale} fg={C.green}>Éxito · alta</Chip>
              <Chip bg={C.amberPale} fg={C.amber}>Advertencia · media</Chip>
              <Chip bg="rgba(184,78,47,.12)" fg={C.error}>Error · baja</Chip>
              <Chip bg="rgba(45,108,196,.12)" fg={C.info}>Info</Chip>
            </div>

            <Meta>Dark stat chip (el patrón 50×)</Meta>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 28, maxWidth: 600 }}>
              <div style={{ background: C.green, borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 40, lineHeight: 1, color: C.white }}>50<span style={{ fontSize: 18, fontWeight: 600, verticalAlign: "top", marginLeft: 2 }}>×</span></div>
                <div style={{ color: C.white, fontSize: 14, fontWeight: 700, marginTop: 6 }}>más rápido que la captura manual</div>
                <div style={{ color: "rgba(250,250,248,.78)", fontSize: 12, marginTop: 4, lineHeight: 1.4 }}>Tu equipo se enfoca en validar, no en teclear.</div>
              </div>
              <div style={{ background: C.dark, borderRadius: 14, padding: 20 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 40, lineHeight: 1, color: C.white }}>96<span style={{ fontSize: 18, color: C.scan, verticalAlign: "top", marginLeft: 2 }}>%</span></div>
                <div style={{ color: C.white, fontSize: 14, fontWeight: 700, marginTop: 6 }}>precisión en extracción</div>
                <div style={{ color: "rgba(250,250,248,.55)", fontSize: 12, marginTop: 4, lineHeight: 1.4 }}>promedio en documentos legales.</div>
              </div>
            </div>

            <Meta>Input (claro)</Meta>
            <div style={{ maxWidth: 360, marginBottom: 28 }}>
              <label style={{ fontSize: 11.5, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: ".4px", display: "block", marginBottom: 5 }}>Nombre completo *</label>
              <input placeholder="Lic. Juan Hernández" style={{ width: "100%", padding: "10px 13px", borderRadius: 8, border: `1px solid ${C.border}`, background: "white", fontSize: 13.5, color: C.dark, outline: "none", fontFamily: BODY }}
                onFocus={(e) => (e.currentTarget.style.borderColor = C.green)} onBlur={(e) => (e.currentTarget.style.borderColor = C.border)} />
            </div>

            <Meta>Confidence markers (OCR a nivel de letra)</Meta>
            <Card style={{ fontFamily: "Georgia, serif", fontSize: 14, lineHeight: 1.8, color: "#2a2a2a", maxWidth: 600 }}>
              Notario Público No. <Mark type="amber">42</Mark>, Monterrey. Folio real: <Mark type="red">○○○○○○</Mark>. Inmueble en <Mark type="info">Av. Insurgentes Sur 1602</Mark>.
              <div style={{ display: "flex", gap: 14, marginTop: 12, paddingTop: 10, borderTop: `1px solid ${C.border}`, fontFamily: BODY }}>
                <Legend color={C.amber}>Dudoso</Legend>
                <Legend color={C.error}>Probable error</Legend>
                <Legend color={C.info}>Selección</Legend>
              </div>
            </Card>
          </Section>

          {/* 9 · Patrones */}
          <Section id="patrones">
            <Eyebrow>09 · Patrones nativos</Eyebrow>
            <SectionTitle>La animación de escaneo</SectionTitle>
            <Lead>El signature move de la marca: documento + láser verde (scan) + cascada de campos con confianza. Láser 1800–2300ms, curva linear. Pulsa Replay.</Lead>
            <Card style={{ background: C.offWhite }}>
              <ScanDemo />
            </Card>
          </Section>

          {/* 10 · Motion */}
          <Section id="motion">
            <Eyebrow>10 · Motion</Eyebrow>
            <SectionTitle>Sutil · funcional · consistente</SectionTitle>
            <Lead>Curva estándar cubic-bezier(0.4,0,0.2,1). Barridos lineales (láser). Loops orgánicos ease-in-out. Honrar prefers-reduced-motion (obligatorio).</Lead>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16 }}>
              <Card style={{ textAlign: "center" }}>
                <div style={{ width: 40, height: 40, background: C.green, borderRadius: 10, margin: "8px auto 14px", animation: "bgFloat 6s ease-in-out infinite" }} />
                <Meta>float · 6s</Meta>
              </Card>
              <Card style={{ textAlign: "center" }}>
                <div style={{ width: 16, height: 16, background: C.scan, borderRadius: "50%", margin: "20px auto 22px", animation: "bgPulse 1.8s ease-in-out infinite" }} />
                <Meta>pulse-dot · 1.8s</Meta>
              </Card>
              <Card>
                <div style={{ height: 6, background: C.border, borderRadius: 3, margin: "24px 0 20px", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: C.green, borderRadius: 3, animation: "bgGrow 1.4s cubic-bezier(0.4,0,0.2,1) infinite alternate", "--w": "90%" } as React.CSSProperties} />
                </div>
                <Meta>grow-bar · confianza</Meta>
              </Card>
            </div>
          </Section>

          {/* 11 · Voz */}
          <Section id="voz">
            <Eyebrow>11 · Voz y tono</Eyebrow>
            <SectionTitle>Directos, profesionales, honestos</SectionTitle>
            <Lead>Español neutro de México. Verbos en imperativo o presente. Datos con humildad. nominds extrae y estructura; no firma ni reemplaza al notario.</Lead>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Card style={{ background: C.greenPale, border: "none" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.green, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 10 }}>✓ Sí decimos</div>
                {["De documentos en papel a datos estructurados", "Alertas solo cuando algo importa", "Cada dato incluye un porcentaje de confianza", "Construido mano a mano con notarías reales"].map((t) => (
                  <div key={t} style={{ fontSize: 13, color: C.dark2, lineHeight: 1.5, marginBottom: 8 }}>{t}</div>
                ))}
              </Card>
              <Card style={{ background: "rgba(184,78,47,0.06)", border: `1px solid rgba(184,78,47,0.18)` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.error, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 10 }}>✕ No decimos</div>
                {["La revolución mágica de tus documentos", "Elimina el 100% del trabajo humano", "Garantizamos extracción perfecta", "nominds reemplaza a tu equipo"].map((t) => (
                  <div key={t} style={{ fontSize: 13, color: C.dark2, lineHeight: 1.5, marginBottom: 8 }}>{t}</div>
                ))}
              </Card>
            </div>
          </Section>

          {/* 12 · Tokens */}
          <Section id="tokens">
            <Eyebrow>12 · Tokens</Eyebrow>
            <SectionTitle>Nombres semánticos</SectionTitle>
            <Lead>Por función, no por valor. Consumibles en CSS / Tailwind / JSON. Detalle completo en BRAND_GUIDELINES.md §15.</Lead>
            <Card style={{ padding: 0, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: C.sandL }}>
                    {["Token semántico", "Valor", "Equivale a"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".5px", color: C.muted }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["color-action-primary", C.green, "green"],
                    ["color-action-primary-hover", C.greenDeep, "green-deep"],
                    ["color-text-primary", C.dark, "dark"],
                    ["color-text-tertiary", C.warmGray, "warm-gray"],
                    ["color-accent-brand", C.amber, "amber"],
                    ["color-status-error", C.error, "error"],
                    ["color-status-info", C.info, "info"],
                  ].map(([t, v, e]) => (
                    <tr key={t} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "9px 16px", fontFamily: MONO, fontSize: 12, color: C.dark }}>{t}</td>
                      <td style={{ padding: "9px 16px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: MONO, fontSize: 12, color: C.warmGray }}>
                          <span style={{ width: 14, height: 14, borderRadius: 3, background: v, border: `1px solid ${C.border}` }} />{v}
                        </span>
                      </td>
                      <td style={{ padding: "9px 16px", fontSize: 12.5, color: C.warmGray }}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Section>

          {/* 13 · Accesibilidad */}
          <Section id="accesibilidad">
            <Eyebrow>13 · Accesibilidad</Eyebrow>
            <SectionTitle>WCAG 2.1 AA mínimo</SectionTitle>
            <Lead>Texto pequeño en dark/dark-2/warm-gray. Focus visible obligatorio. Tap targets ≥44px. prefers-reduced-motion. Zoom 200%.</Lead>
            <Card style={{ padding: 0, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: C.sandL }}>
                    {["Texto", "Fondo", "Ratio", "Resultado"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".5px", color: C.muted }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["dark", "white", "15.8:1", "✓ AAA"],
                    ["warm-gray", "white", "4.6:1", "✓ AA"],
                    ["white", "green", "5.9:1", "✓ AA"],
                    ["white", "green-deep", "8.2:1", "✓ AAA"],
                    ["amber", "white", "3.4:1", "⚠ ≥18px/bold"],
                  ].map(([a, b, r, res]) => (
                    <tr key={a + b} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "9px 16px", fontFamily: MONO, fontSize: 12 }}>{a}</td>
                      <td style={{ padding: "9px 16px", fontFamily: MONO, fontSize: 12 }}>{b}</td>
                      <td style={{ padding: "9px 16px", fontFamily: MONO, fontSize: 12 }}>{r}</td>
                      <td style={{ padding: "9px 16px", fontSize: 12.5, color: (res as string).includes("⚠") ? C.amber : C.green }}>{res}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Section>

          <footer style={{ padding: "48px 0 0", fontSize: 12.5, color: C.muted }}>
            nominds — Brand Guidelines v1.0.0 · Documento espejo de <code style={{ fontFamily: MONO }}>BRAND_GUIDELINES.md</code> · ruta <code style={{ fontFamily: MONO }}>/brand</code>
          </footer>
        </main>
      </div>
    </div>
  );
}

/* ─── small helpers ──────────────────────────────────────────── */

function Meta({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".8px", color: C.muted, marginBottom: 10 }}>{children}</div>;
}

function Chip({ bg, fg, children }: { bg: string; fg: string; children: React.ReactNode }) {
  return <span style={{ background: bg, color: fg, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>{children}</span>;
}

function Mark({ type, children }: { type: "amber" | "red" | "info"; children: React.ReactNode }) {
  const map = {
    amber: { bg: "rgba(200,146,42,0.18)", bd: C.amber },
    red: { bg: "rgba(184,78,47,0.15)", bd: C.error },
    info: { bg: "rgba(45,108,196,0.18)", bd: C.info },
  }[type];
  return <span style={{ background: map.bg, borderBottom: `1px solid ${map.bd}`, borderRadius: 2, padding: "0 2px" }}>{children}</span>;
}

function Legend({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, color: C.muted }}>
      <span style={{ width: 9, height: 9, borderRadius: 2, background: color, opacity: 0.4, border: `1px solid ${color}` }} />{children}
    </span>
  );
}
