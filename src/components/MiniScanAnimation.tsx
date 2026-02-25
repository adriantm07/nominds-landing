"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { C } from "@/lib/tokens";

export type MiniField = {
  label: string;
  value: string;
  t: number; // ms offset when field appears during scan
};

type Phase = "idle" | "scanning" | "done";

const LASER_MS = 1800;

function useAnimationCycle(fields: MiniField[]) {
  const [phase, setPhase]       = useState<Phase>("idle");
  const [litFields, setLitFields] = useState<number[]>([]);
  const running = useRef(false);
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => timers.current.forEach(clearTimeout);

  const run = useCallback(() => {
    if (running.current) return;
    running.current = true;
    clear();
    setPhase("idle");
    setLitFields([]);

    const t0 = setTimeout(() => {
      setPhase("scanning");
      fields.forEach(({ t }, i) => {
        const ta = setTimeout(() => setLitFields((p) => [...p, i]), t);
        timers.current.push(ta);
      });
      const tf = setTimeout(() => {
        setPhase("done");
        running.current = false;
      }, LASER_MS + 400);
      timers.current.push(tf);
    }, 80);
    timers.current.push(t0);
  }, [fields]);

  useEffect(() => () => clear(), []);
  return { phase, litFields, run };
}

function MiniLaser({ phase, cardHeight }: { phase: Phase; cardHeight: number }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const glow = glowRef.current;
    if (!line || !glow) return;
    if (phase === "scanning") {
      line.getBoundingClientRect();
      line.style.transition = `transform ${LASER_MS}ms linear`;
      glow.style.transition = `transform ${LASER_MS}ms linear`;
      line.style.transform  = `translateY(${cardHeight + 4}px)`;
      glow.style.transform  = `translateY(${cardHeight - 8}px)`;
    } else {
      line.style.transition = "none";
      glow.style.transition = "none";
      line.style.transform  = "translateY(-4px)";
      glow.style.transform  = "translateY(-16px)";
    }
  }, [phase, cardHeight]);

  if (phase === "idle") return null;

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20, overflow: "hidden", borderRadius: 10 }}>
      <div
        ref={glowRef}
        style={{
          position: "absolute", left: 0, right: 0, height: 30,
          background: "linear-gradient(to bottom,transparent,rgba(76,175,122,0.13),transparent)",
          transform: "translateY(-16px)", willChange: "transform",
        }}
      />
      <div
        ref={lineRef}
        style={{
          position: "absolute", left: 0, right: 0, height: 2,
          background: "linear-gradient(to right,transparent 0%,rgba(76,175,122,0.15) 8%,rgba(76,175,122,0.95) 50%,rgba(76,175,122,0.15) 92%,transparent 100%)",
          filter: "blur(0.3px)",
          boxShadow: "0 0 10px 3px rgba(76,175,122,0.4), 0 0 3px 1px rgba(76,175,122,0.65)",
          transform: "translateY(-4px)", willChange: "transform",
        }}
      />
    </div>
  );
}

// ── Document image with laser overlay ──────────────────────────
function DocImage({ src, phase, cardHeight, cardRef }: {
  src: string;
  phase: Phase;
  cardHeight: number;
  cardRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={cardRef}
      style={{
        position: "relative",
        width: 130,
        height: 150,
        flexShrink: 0,
        borderRadius: 8,
        overflow: "hidden",
        border: `1px solid ${C.border}`,
        boxShadow: "0 2px 10px rgba(26,29,25,0.12)",
        background: "#f0f0ec",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="document"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          display: "block",
          padding: "4px",
        }}
      />
      {/* dim overlay so laser pops */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(0,0,0,0.1)",
        borderRadius: 8,
      }} />
      <MiniLaser phase={phase} cardHeight={cardHeight} />
    </div>
  );
}

// ── Check badge con bounce + hover amber ────────────────────────
function CheckBadge({ visible, confirmed }: { visible: boolean; confirmed: boolean }) {
  const [hovered, setHovered] = useState(false);
  // Una vez confirmado, no vuelve a animar aunque el componente re-renderice
  const [animKey, setAnimKey] = useState(0);
  const prevConfirmed = useRef(false);

  useEffect(() => {
    if (confirmed && !prevConfirmed.current) {
      setAnimKey((k) => k + 1);
    }
    prevConfirmed.current = confirmed;
  }, [confirmed]);

  return (
    <>
      <style>{`
        @keyframes checkConfirm {
          0%   { transform: scale(0.5);  opacity: 0;
                 background: #E8EFEB; color: #2F4F3E; box-shadow: 0 0 0 0 rgba(200,146,42,0); }
          45%  { transform: scale(1.28); opacity: 1;
                 background: #F5EDD8; color: #C8922A; box-shadow: 0 0 0 0 rgba(200,146,42,0); }
          62%  { transform: scale(0.91);
                 background: #F5EDD8; color: #C8922A; box-shadow: 0 0 0 6px rgba(200,146,42,0.28); }
          78%  { transform: scale(1.05); box-shadow: 0 0 0 3px rgba(200,146,42,0.12); }
          100% { transform: scale(1);
                 background: #F5EDD8; color: #C8922A; box-shadow: 0 0 0 0 rgba(200,146,42,0); }
        }
        @keyframes valueFlash {
          0%   { color: #1A1D19; }
          35%  { color: #C8922A; }
          100% { color: #1A1D19; }
        }
        @keyframes checkHover {
          0%,100% { box-shadow: 0 0 0 0 rgba(200,146,42,0.4); }
          50%     { box-shadow: 0 0 0 4px rgba(200,146,42,0.2); }
        }
      `}</style>
      {visible && (
        <span
          key={animKey}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            fontSize: 8.5,
            fontWeight: 700,
            padding: "1px 5px",
            borderRadius: 6,
            cursor: "default",
            display: "inline-block",
            ...(confirmed && animKey > 0
              ? {
                  // deja que los keyframes controlen color/bg/shadow completamente
                  animation: "checkConfirm 0.52s cubic-bezier(0.34,1.2,0.64,1) forwards",
                }
              : {
                  color: hovered ? C.amber : C.green,
                  background: hovered ? C.amberPale : C.greenPale,
                  transition: "color 0.18s, background 0.18s",
                  animation: hovered ? "checkHover 0.5s ease" : "none",
                }),
          }}
        >
          ✓
        </span>
      )}
    </>
  );
}

// ── Extracted field row ─────────────────────────────────────────
function ExtractedField({
  label, value, visible, confirmed,
}: {
  label: string; value: string; visible: boolean; confirmed: boolean;
}) {
  return (
    <div style={{
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(5px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }}>
      <span style={{
        fontSize: 9.5,
        fontWeight: 600,
        color: C.muted,
        textTransform: "uppercase" as const,
        letterSpacing: "0.5px",
        whiteSpace: "nowrap" as const,
        flexShrink: 0,
        minWidth: 72,
      }}>
        {label}
      </span>
      <span style={{
        fontSize: 10.5,
        fontWeight: 600,
        fontFamily: "monospace",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap" as const,
        animation: confirmed ? "valueFlash 0.52s cubic-bezier(0.34,1.2,0.64,1) forwards" : "none",
        color: confirmed ? undefined : C.dark,
      }}>
        {value}
      </span>
      <CheckBadge visible={visible} confirmed={confirmed} />
    </div>
  );
}

// ── Document text panel with highlighted words ──────────────────
type Segment = { text: string; mark?: "amber" | "red"; bold?: boolean };

const DOC_PARAGRAPHS: Segment[][] = [
  [
    { text: "ESCRITURA PÚBLICA ", bold: true },
    { text: "No. 1,008. Ante el Lic. Juan Carlos Hernández, " },
    { text: "Notario Público No. 42", mark: "amber" },
    { text: ", Monterrey, N.L." },
  ],
  [
    { text: "VENDEDOR: ", bold: true },
    { text: "C. RAMÍREZ OCHOA FERNANDO JOSÉ. " },
    { text: "COMPRADOR: ", bold: true },
    { text: "C. GÓMEZ REYES CARLOS ALBERTO. Inmueble en Av. Insurgentes Sur " },
    { text: "1602", mark: "amber" },
    { text: ", Col. Del Valle, San Pedro Garza García, N.L." },
  ],
  [
    { text: "PRECIO: ", bold: true },
    { text: "$4,250,000.00 M.N." },
    { text: " (CUATRO MILLONES " },
    { text: "DOSCIENTOS", mark: "amber" },
    { text: " CINCUENTA MIL PESOS). " },
    { text: "Folio real: ", bold: true },
    { text: "○○○○○○", mark: "red" },
    { text: "." },
  ],
];

// Frases que se "copian" en secuencia
const COPY_TARGETS = [
  { para: 1, segIdx: 1 },
];

function DocumentPanel({ visible }: { visible: boolean }) {
  const [copyStep, setCopyStep]     = useState(-1); // índice activo en COPY_TARGETS
  const [showTooltip, setShowTooltip] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setCopyStep(-1);
    setShowTooltip(false);

    if (!visible) return;

    // Arranca la secuencia de copias 600ms después de que aparece el texto
    let delay = 600;
    COPY_TARGETS.forEach((_, i) => {
      // muestra selección
      const t1 = setTimeout(() => { setCopyStep(i); setShowTooltip(false); }, delay);
      // muestra tooltip "Copiado"
      const t2 = setTimeout(() => setShowTooltip(true), delay + 700);
      // limpia
      const t3 = setTimeout(() => { setShowTooltip(false); setCopyStep(-1); }, delay + 1500);
      timers.current.push(t1, t2, t3);
      delay += 2000;
    });

    return () => timers.current.forEach(clearTimeout);
  }, [visible]);

  return (
    <div
      style={{
        flex: 1,
        background: "white",
        border: `1px solid ${C.border}`,
        borderRadius: 8,
        padding: "10px 12px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
        fontFamily: "'Georgia', serif",
        fontSize: 9.5,
        lineHeight: 1.7,
        color: "#2a2a2a",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
        position: "relative",
      }}
    >
      {/* Tooltip "Copiado ✓" */}
      <div
        style={{
          position: "absolute",
          top: 6, right: 10,
          background: C.dark,
          color: "white",
          fontSize: 8,
          fontFamily: "sans-serif",
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: 5,
          letterSpacing: "0.3px",
          pointerEvents: "none",
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? "translateY(0)" : "translateY(-4px)",
          transition: "opacity 0.2s, transform 0.2s",
          zIndex: 10,
        }}
      >
        📋 Copiado ✓
      </div>

      {/* Texto con selección animada */}
      <div style={{ position: "relative" }}>
        {DOC_PARAGRAPHS.map((para, pi) => (
          <p key={pi} style={{ margin: "0 0 6px", textAlign: "justify" as const }}>
            {para.map((seg, si) => {
              const baseStyle: React.CSSProperties = seg.bold ? { fontWeight: 700 } : {};

              // ¿es este segmento el que está siendo "seleccionado"?
              const isSelected = COPY_TARGETS[copyStep]?.para === pi &&
                                 COPY_TARGETS[copyStep]?.segIdx === si;

              if (!seg.mark) {
                return (
                  <span
                    key={si}
                    style={{
                      ...baseStyle,
                      background: isSelected ? "rgba(0, 100, 255, 0.18)" : undefined,
                      borderRadius: isSelected ? 2 : undefined,
                      transition: "background 0.25s",
                    }}
                  >
                    {seg.text}
                  </span>
                );
              }

              const bg = seg.mark === "amber" ? "rgba(200,146,42,0.18)" : "rgba(220,60,60,0.15)";
              const underline = seg.mark === "amber" ? `1px solid ${C.amber}` : "1px solid #DC3C3C";
              return (
                <span
                  key={si}
                  style={{
                    ...baseStyle,
                    background: isSelected ? "rgba(0, 100, 255, 0.18)" : bg,
                    borderBottom: underline,
                    borderRadius: 2,
                    padding: "0 1px",
                    transition: "background 0.25s",
                  }}
                >
                  {seg.text}
                </span>
              );
            })}
          </p>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        display: "flex", gap: 10, marginTop: "auto", paddingTop: 6,
        borderTop: `1px solid ${C.border}`,
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 8.5, color: C.muted }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "rgba(200,146,42,0.25)", border: `1px solid ${C.amber}` }} />
          Dudoso
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 8.5, color: C.muted }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "rgba(220,60,60,0.18)", border: "1px solid #DC3C3C" }} />
          Probable error
        </span>
      </div>
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────
export default function MiniScanAnimation({
  src,
  fields,
  variant = "fields",
}: {
  src: string;
  fields: MiniField[];
  variant?: "fields" | "document";
}) {
  const { phase, litFields, run } = useAnimationCycle(fields);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardH, setCardH] = useState(150);
  const [confirmedFields, setConfirmedFields] = useState<number[]>([]);
  const confirmTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (cardRef.current) setCardH(cardRef.current.offsetHeight);
  }, []);

  // autoplay + loop
  useEffect(() => {
    const t = setTimeout(run, 600 + Math.random() * 400);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    confirmTimers.current.forEach(clearTimeout);
    confirmTimers.current = [];
    setConfirmedFields([]);

    if (phase === "done") {
      // confirma campos en cadena con bounce, 300ms entre cada uno
      fields.forEach((_, i) => {
        const t = setTimeout(() => setConfirmedFields((p) => [...p, i]), 200 + i * 300);
        confirmTimers.current.push(t);
      });
      // reinicia el ciclo
      const tLoop = setTimeout(run, 3200);
      confirmTimers.current.push(tLoop);
    }

    return () => confirmTimers.current.forEach(clearTimeout);
  }, [phase, run, fields]);

  return (
    <div style={{ display: "flex", gap: 12, width: "100%", alignItems: "stretch" }}>
      {/* Left: document image + laser */}
      <DocImage src={src} phase={phase} cardHeight={cardH} cardRef={cardRef} />

      {/* Right: status + panel */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
        {/* Status bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: 5,
          opacity: phase !== "idle" ? 1 : 0,
          transition: "opacity 0.4s",
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: "50%",
            background: phase === "done" ? C.green : C.scan,
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: 9, fontWeight: 600, letterSpacing: "0.5px",
            color: C.muted, textTransform: "uppercase" as const,
          }}>
            {phase === "done" ? "Extracción completa" : "Escaneando…"}
          </span>
        </div>

        {variant === "document" ? (
          <DocumentPanel visible={phase === "done"} />
        ) : (
          /* Extracted fields */
          <div style={{
            background: C.offWhite,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flex: 1,
          }}>
            {fields.map((f, i) => (
              <ExtractedField key={i} label={f.label} value={f.value} visible={litFields.includes(i)} confirmed={confirmedFields.includes(i)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
