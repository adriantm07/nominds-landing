"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { C, SCAN_FIELDS, LASER_MS } from "@/lib/tokens";

// ─── Types ───────────────────────────────────────────────────
type FieldId = (typeof SCAN_FIELDS)[number]["id"];
type Phase = "idle" | "scanning" | "done";

// ─── useAnimationCycle ────────────────────────────────────────
function useAnimationCycle() {
  const [phase, setPhase]       = useState<Phase>("idle");
  const [litFields, setLitFields] = useState<FieldId[]>([]);
  const [outFields, setOutFields] = useState<FieldId[]>([]);
  const running = useRef(false);
  const timers  = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => timers.current.forEach(clearTimeout);

  const run = useCallback(() => {
    if (running.current) return;
    running.current = true;
    clear();
    setPhase("idle");
    setLitFields([]);
    setOutFields([]);

    // Small tick so React flushes the reset before we start
    const t0 = setTimeout(() => {
      setPhase("scanning");

      SCAN_FIELDS.forEach(({ id, t }) => {
        const ta = setTimeout(() => setLitFields((p) => [...p, id]), t);
        const tb = setTimeout(() => setOutFields((p) => [...p, id]), t + 190);
        timers.current.push(ta, tb);
      });

      const tf = setTimeout(() => {
        setPhase("done");
        running.current = false;
      }, LASER_MS + 600);
      timers.current.push(tf);
    }, 80);

    timers.current.push(t0);
  }, []);

  useEffect(() => () => clear(), []);

  return { phase, litFields, outFields, run };
}

// ─── Laser overlay ────────────────────────────────────────────
function Laser({ phase }: { phase: Phase }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const glow = glowRef.current;
    if (!line || !glow) return;

    if (phase === "scanning") {
      // Force reflow so transition fires from start position
      line.getBoundingClientRect();
      line.style.transition = `transform ${LASER_MS}ms linear`;
      glow.style.transition = `transform ${LASER_MS}ms linear`;
      line.style.transform  = "translateX(330px)";
      glow.style.transform  = "translateX(316px)";
    } else {
      line.style.transition = "none";
      glow.style.transition = "none";
      line.style.transform  = "translateX(-10px)";
      glow.style.transform  = "translateX(-24px)";
    }
  }, [phase]);

  return (
    <div
      style={{
        position: "absolute",
        top: 42, left: 0, right: 0, bottom: 0,
        pointerEvents: "none",
        zIndex: 10,
        overflow: "hidden",
        borderRadius: "0 0 14px 14px",
      }}
    >
      {/* ambient glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute", top: 0, bottom: 0, width: 36,
          background: "linear-gradient(to right,transparent,rgba(76,175,122,0.07),transparent)",
          transform: "translateX(-24px)",
          willChange: "transform",
        }}
      />
      {/* laser line */}
      <div
        ref={lineRef}
        style={{
          position: "absolute", top: 0, bottom: 0, width: 2,
          background:
            "linear-gradient(to bottom,transparent 0%,rgba(76,175,122,0.18) 8%,rgba(76,175,122,0.92) 50%,rgba(76,175,122,0.18) 92%,transparent 100%)",
          filter: "blur(0.5px)",
          boxShadow: "0 0 8px 2px rgba(76,175,122,0.35)",
          transform: "translateX(-10px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}

// ─── ID card field bar (lights up during scan) ────────────────
function IdBar({ fieldId, litFields, width }: { fieldId: FieldId; litFields: FieldId[]; width: string }) {
  const lit = litFields.includes(fieldId);
  return (
    <div
      style={{
        height: 8, borderRadius: 3,
        background: "rgba(255,255,255,0.1)",
        marginBottom: 7,
        position: "relative",
        overflow: "hidden",
        width,
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0,
          background: C.scan,
          borderRadius: 3,
          transform: lit ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}

// ─── In-document detected field row ──────────────────────────
function DocRow({ field, lit }: { field: typeof SCAN_FIELDS[number]; lit: boolean }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "7px 10px",
        background: lit ? C.greenPale : "#EFEDE9",
        borderRadius: 7,
        borderLeft: `2.5px solid ${lit ? C.green : "transparent"}`,
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.6px", color: C.muted }}>
          {field.label}
        </div>
        <div style={{ fontSize: 11.5, fontWeight: 500, color: C.dark, fontFamily: "monospace", marginTop: 1 }}>
          {field.value}
        </div>
      </div>
      <div
        style={{
          width: 6, height: 6, borderRadius: "50%",
          background: C.green,
          opacity: lit ? 1 : 0,
          transform: lit ? "scale(1)" : "scale(0)",
          transition: "opacity 0.25s, transform 0.25s",
        }}
      />
    </div>
  );
}

// ─── Output panel row (flies in from right) ───────────────────
function OutRow({ field, visible }: { field: typeof SCAN_FIELDS[number]; visible: boolean }) {
  const isHigh = field.tier === "high";
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "10px 13px",
        background: "white",
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0) scale(1)" : "translateX(14px) scale(0.98)",
        transition: "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 30, height: 30, borderRadius: 7,
          background: C.greenPale,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: 13,
        }}
      >
        {field.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 9.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.6px", color: C.muted }}>
          {field.label}
        </div>
        <div
          style={{
            fontSize: 12.5, fontWeight: 500, color: C.dark,
            fontFamily: "monospace", marginTop: 1,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}
        >
          {field.value}
        </div>
        {/* Confidence mini-bar */}
        <div style={{ width: 48, height: 3, background: C.border, borderRadius: 2, marginTop: 5, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              borderRadius: 2,
              background: isHigh ? C.green : "#C49A3A",
              width: visible ? `${field.conf}%` : "0%",
              transition: visible ? "width 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s" : "none",
            }}
          />
        </div>
      </div>

      {/* Badge */}
      <span
        style={{
          flexShrink: 0,
          fontSize: 10.5, fontWeight: 700,
          padding: "2px 7px", borderRadius: 10,
          background: isHigh ? "#D6E8DF" : "#F5EDD8",
          color:      isHigh ? "#1E4032" : "#7A5520",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.75)",
          transition: "opacity 0.3s 0.18s, transform 0.3s 0.18s",
        }}
      >
        {field.conf}%
      </span>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────
export default function ScanAnimation({ autoPlay = true }: { autoPlay?: boolean }) {
  const { phase, litFields, outFields, run } = useAnimationCycle();

  useEffect(() => {
    if (autoPlay) {
      const t = setTimeout(run, 700);
      return () => clearTimeout(t);
    }
  }, [autoPlay, run]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 36, width: "100%" }}>

      {/* ── DOCUMENT PANEL ── */}
      <div style={{ flexShrink: 0, position: "relative" }}>
        <div
          style={{
            width: 312,
            background: "white",
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            boxShadow: "0 16px 48px rgba(26,29,25,0.11),0 2px 8px rgba(26,29,25,0.06)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Chrome titlebar */}
          <div style={{ background: C.dark, padding: "10px 14px", display: "flex", alignItems: "center", gap: 6 }}>
            {(["#FF6059", "#FFBD2D", "#28CA41"] as const).map((bg, i) => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: bg }} />
            ))}
            <span
              style={{
                marginLeft: "auto", marginRight: "auto",
                fontSize: 10, color: "rgba(255,255,255,0.4)",
                fontFamily: "monospace", letterSpacing: "0.5px",
              }}
            >
              INE_SCAN_4821.pdf
            </span>
          </div>

          {/* ID card */}
          <div style={{ padding: "13px 13px 6px" }}>
            <div
              style={{
                background: "linear-gradient(135deg,#23271F,#323729)",
                borderRadius: 9, padding: 14,
                position: "relative", overflow: "hidden",
              }}
            >
              {/* diagonal texture */}
              <div
                style={{
                  position: "absolute", inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(-45deg,transparent,transparent 8px,rgba(255,255,255,0.015) 8px,rgba(255,255,255,0.016) 9px)",
                }}
              />
              {/* green orb accent */}
              <div
                style={{
                  position: "absolute", top: -18, right: -18,
                  width: 68, height: 68,
                  background: "rgba(47,79,62,0.18)",
                  borderRadius: "50%",
                }}
              />

              <div style={{ display: "flex", gap: 11, position: "relative", zIndex: 1 }}>
                {/* Photo placeholder */}
                <div
                  style={{
                    width: 42, height: 54,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 5, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="14" height="17" viewBox="0 0 24 27" fill="rgba(255,255,255,0.32)">
                    <ellipse cx="12" cy="8" rx="6" ry="7" />
                    <path d="M2 26c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                  </svg>
                </div>

                {/* Scannable bars */}
                <div style={{ flex: 1, paddingTop: 2 }}>
                  <IdBar fieldId="name" litFields={litFields} width="84%" />
                  <IdBar fieldId="curp" litFields={litFields} width="62%" />
                  <IdBar fieldId="dob"  litFields={litFields} width="46%" />
                </div>
              </div>

              {/* MRZ strip */}
              <div
                style={{
                  marginTop: 9,
                  fontFamily: "monospace", fontSize: 6.5,
                  color: "rgba(255,255,255,0.18)",
                  letterSpacing: "1.8px", lineHeight: 1.6,
                  position: "relative", zIndex: 1,
                }}
              >
                IDMEX4821033897512&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
                9403152F2601010MEX&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;4<br />
                RAMIREZLUNAJORGEANTONIO&lt;&lt;&lt;&lt;&lt;
              </div>
            </div>
          </div>

          {/* Detected field rows */}
          <div style={{ padding: "0 13px 14px", display: "flex", flexDirection: "column", gap: 7 }}>
            {SCAN_FIELDS.map((f) => (
              <DocRow key={f.id} field={f} lit={litFields.includes(f.id)} />
            ))}
          </div>
        </div>

        {/* Laser overlay (positioned over the doc) */}
        <Laser phase={phase} />
      </div>

      {/* ── OUTPUT PANEL ── */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <div
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: C.green,
              opacity: phase !== "idle" ? 1 : 0,
              animation: phase === "scanning" ? "pulseDot 1.8s ease-in-out infinite" : "none",
              transition: "opacity 0.4s",
            }}
          />
          <style>{`@keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.35;transform:scale(0.72)}}`}</style>
          <span style={{ fontSize: 10.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.3px", color: C.muted }}>
            Datos extraídos
          </span>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 10, fontFamily: "monospace", color: C.green,
              background: C.greenPale, padding: "2px 8px",
              borderRadius: 10, border: `1px solid rgba(47,79,62,0.15)`,
              opacity: phase !== "idle" ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          >
            {phase === "done" ? "Completado ✓" : "Procesando…"}
          </span>
        </div>

        {/* Output rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {SCAN_FIELDS.map((f) => (
            <OutRow key={f.id} field={f} visible={outFields.includes(f.id)} />
          ))}
        </div>

        {/* Summary card */}
        <div
          style={{
            marginTop: 12, padding: "11px 13px",
            background: "rgba(47,79,62,0.08)",
            border: "1px solid rgba(47,79,62,0.15)",
            borderRadius: 10,
            display: "flex", alignItems: "center", gap: 10,
            opacity: phase === "done" ? 1 : 0,
            transform: phase === "done" ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <div
            style={{
              width: 28, height: 28, background: C.green,
              borderRadius: 7, display: "flex", alignItems: "center",
              justifyContent: "center", color: "white", fontSize: 13, flexShrink: 0,
            }}
          >
            ✓
          </div>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: C.dark }}>Documento validado</div>
            <div style={{ fontSize: 11, color: C.muted, marginTop: 1 }}>4 campos · Sin alertas</div>
          </div>
          <div style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 19, fontWeight: 700, color: C.green }}>
            96%
          </div>
        </div>

        {/* Replay button */}
        <button
          onClick={run}
          style={{
            display: "block",
            marginTop: 14,
            background: "transparent",
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: "6px 16px",
            fontSize: 12,
            fontFamily: "DM Sans, sans-serif",
            color: C.muted,
            cursor: "pointer",
            opacity: phase === "done" ? 1 : 0,
            transition: "opacity 0.4s, color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = C.dark;
            (e.currentTarget as HTMLElement).style.borderColor = C.dark;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = C.muted;
            (e.currentTarget as HTMLElement).style.borderColor = C.border;
          }}
        >
          ↺ Replay
        </button>
      </div>
    </div>
  );
}
