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
        <img
          src="/Brand guidelines/Logo/Logo Files/png/White logo - no background.png"
          alt="nominds"
          style={{ height: 22, opacity: 0.5 }}
        />
        <span style={{ fontSize: 12, color: "rgba(250,250,248,0.28)" }}>
          © 2026 nominds. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
