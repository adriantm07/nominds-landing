"use client";

import { useState } from "react";
import { C } from "@/lib/tokens";

/* ────────────────────────────────────────────────────────────────
   Button — componente de marca reutilizable
   Reemplaza la lógica de hover inline duplicada en Header/Hero/CTA.
   Reproduce exactamente S.btnPrimary / S.btnOutline + estados
   documentados (default / hover / active / disabled / loading).
   Spec: BRAND_GUIDELINES.md §9.1
──────────────────────────────────────────────────────────────── */

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { padding: string; fontSize: number }> = {
  sm: { padding: "9px 16px",  fontSize: 13 },
  md: { padding: "11px 22px", fontSize: 14.5 }, // default — igual a S.btn*
  lg: { padding: "13px 26px", fontSize: 16 },
};

function Spinner({ color }: { color: string }) {
  return (
    <>
      <style>{`@keyframes nm-spin{to{transform:rotate(360deg)}}`}</style>
      <span
        aria-hidden
        style={{
          width: 14, height: 14, borderRadius: "50%",
          border: `2px solid ${color}`, borderTopColor: "transparent",
          display: "inline-block", animation: "nm-spin 0.6s linear infinite",
        }}
      />
    </>
  );
}

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  /** Render como <a> en vez de <button> (para CTAs con href) */
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  as,
  href,
  children,
  style,
  disabled,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const isDisabled = disabled || loading;
  const Tag: "a" | "button" = as ?? (href ? "a" : "button");

  const sz = SIZES[size];

  // Colores por variante (default / hover)
  const palette = {
    primary: {
      bg: hovered && !isDisabled ? C.greenDeep : C.green,
      color: "white",
      border: "none",
      spinner: "white",
    },
    outline: {
      bg: hovered && !isDisabled ? C.offWhite : "transparent",
      color: C.dark,
      border: `1px solid ${C.border}`,
      spinner: C.dark,
    },
    ghost: {
      bg: hovered && !isDisabled ? C.offWhite : "transparent",
      color: C.dark,
      border: "none",
      spinner: C.dark,
    },
  }[variant];

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    background: palette.bg,
    color: palette.color,
    border: palette.border,
    borderRadius: 8,
    padding: sz.padding,
    fontSize: sz.fontSize,
    fontWeight: variant === "primary" ? 500 : 400,
    fontFamily: "'DM Sans', sans-serif",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: disabled && !loading ? 0.5 : 1,
    textDecoration: "none",
    transform: active && !isDisabled ? "translateY(0)" : hovered && !isDisabled ? "translateY(-1px)" : "translateY(0)",
    transition: "background 0.2s, transform 0.15s, border-color 0.2s",
    pointerEvents: loading ? "none" : undefined,
    ...style,
  };

  const handlers = isDisabled
    ? {}
    : {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => { setHovered(false); setActive(false); },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
      };

  const content = (
    <>
      {loading && <Spinner color={palette.spinner} />}
      {children}
    </>
  );

  if (Tag === "a") {
    return (
      <a href={href} style={baseStyle} aria-disabled={isDisabled || undefined} {...handlers} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button style={baseStyle} disabled={isDisabled} {...handlers} {...rest}>
      {content}
    </button>
  );
}
