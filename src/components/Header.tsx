"use client";

import { useState, useEffect } from "react";
import { C, S, NAV_LINKS } from "@/lib/tokens";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: "rgba(250,250,248,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${C.border}`,
        boxShadow: scrolled ? "0 1px 20px rgba(26,29,25,0.06)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          ...S.container,
          padding: "0 28px",
          height: 62,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Brand guidelines/Logo/Logo Files/png/Black logo - no background.png"
            alt="nominds"
            style={{ height: 28, width: "auto", display: "block" }}
          />
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13.5,
                color: C.dark,
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.green)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.dark)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
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
      </div>
    </header>
  );
}
