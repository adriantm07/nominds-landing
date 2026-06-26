/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Nominds brand tokens (legacy, retrocompat) ──
        nm: {
          white:      "#FAFAF8",
          "off-white":"#F4F2EE",
          border:     "#E6E8E3",
          muted:      "#969C92",
          dark:       "#1A1D19",
          "dark-2":   "#272B25",
          "dark-3":   "#383D35",
          "warm-gray":"#717870",
          green:      "#2E6B4E",   // bosque vivo
          "green-l":  "#3C8264",
          "green-p":  "#E4EFE8",
          "green-d":  "#245840",
          sand:       "#D4DBD6",
          "sand-l":   "#ECF0ED",
          scan:       "#4CAF7A",
          error:      "#B84E2F",
          info:       "#2D6CC4",
        },
        // ── Semantic aliases (preferir en código nuevo) ──
        background: { base: "#FAFAF8", subtle: "#F4F2EE", sand: "#ECF0ED", inverse: "#1A1D19", "inverse-2": "#272B25" },
        border:     { DEFAULT: "#E6E8E3", strong: "#D4DBD6" },
        text:       { primary: "#1A1D19", secondary: "#272B25", tertiary: "#717870", muted: "#969C92", inverse: "#FAFAF8" },
        action:     { primary: "#2E6B4E", "primary-hover": "#245840", "primary-subtle": "#E4EFE8" },
        accent:     { scan: "#4CAF7A", brand: "#C8922A", "brand-subtle": "#F5EDD8" },
        status:     { success: "#2E6B4E", warning: "#C8922A", error: "#B84E2F", info: "#2D6CC4" },
      },
      fontFamily: {
        // v1.1.0: tipografía oficial DM Serif Display (titulares) + DM Sans (UI).
        // Reemplaza NeueHaas + Satoshi de la v1.0.0. Ver §6 de las brand guidelines.
        display: ["DM Serif Display", "Georgia", "serif"],
        sans:    ["DM Sans", "Helvetica Neue", "sans-serif"],
        mono:    ["DM Mono", "monospace"],
      },
      maxWidth: {
        container: "1100px",
      },
      borderRadius: {
        sm: "8px", md: "12px", lg: "16px", xl: "20px",
      },
      boxShadow: {
        sm: "0 1px 20px rgba(26,29,25,0.06)",
        md: "0 8px 32px rgba(26,25,22,0.07)",
        lg: "0 20px 48px rgba(26,29,25,0.22)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(14px) scale(0.98)" },
          to:   { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.35", transform: "scale(0.72)" },
        },
        growBar: {
          from: { width: "0%" },
          to:   { width: "var(--bar-w, 96%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float:          "float 6s ease-in-out infinite",
        "slide-left":   "slideInLeft 0.4s ease both",
        "slide-right":  "slideInRight 0.4s cubic-bezier(0.4,0,0.2,1) both",
        "pulse-dot":    "pulseDot 1.8s ease-in-out infinite",
        "grow-bar":     "growBar 0.7s cubic-bezier(0.4,0,0.2,1) 0.2s both",
        "fade-up":      "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};
