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

// ── Extracted field row ─────────────────────────────────────────
function ExtractedField({ label, value, visible }: { label: string; value: string; visible: boolean }) {
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
        color: C.dark,
        fontFamily: "monospace",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap" as const,
      }}>
        {value}
      </span>
      {visible && (
        <span style={{
          marginLeft: "auto",
          flexShrink: 0,
          fontSize: 8.5,
          fontWeight: 700,
          color: C.green,
          background: C.greenPale,
          padding: "1px 5px",
          borderRadius: 6,
        }}>
          ✓
        </span>
      )}
    </div>
  );
}

// ── Main export ─────────────────────────────────────────────────
export default function MiniScanAnimation({ src, fields }: { src: string; fields: MiniField[] }) {
  const { phase, litFields, run } = useAnimationCycle(fields);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardH, setCardH] = useState(150);

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
    if (phase === "done") {
      const t = setTimeout(run, 3200);
      return () => clearTimeout(t);
    }
  }, [phase, run]);

  return (
    <div style={{ display: "flex", gap: 12, width: "100%", alignItems: "stretch" }}>
      {/* Left: document image + laser */}
      <DocImage src={src} phase={phase} cardHeight={cardH} cardRef={cardRef} />

      {/* Right: status + extracted fields */}
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

        {/* Extracted fields */}
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
            <ExtractedField key={i} label={f.label} value={f.value} visible={litFields.includes(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}
