import { C } from "@/lib/tokens";

export default function Footer() {
  return (
    <footer
      style={{
        background: C.dark2,
        padding: "32px 28px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 17, fontStyle: "italic",
            color: "rgba(250,250,248,0.5)",
          }}
        >
          nominds
        </span>
        <span style={{ fontSize: 12, color: "rgba(250,250,248,0.28)" }}>
          © 2024 nominds. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
