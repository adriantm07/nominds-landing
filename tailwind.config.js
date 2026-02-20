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
        // Nominds brand tokens
        nm: {
          white:      "#FAFAF8",
          "off-white":"#F4F2EE",
          border:     "#E6E8E3",
          muted:      "#969C92",
          dark:       "#1A1D19",
          "dark-2":   "#272B25",
          "dark-3":   "#383D35",
          "warm-gray":"#717870",
          green:      "#2F4F3E",
          "green-l":  "#3D6350",
          "green-p":  "#E8EFEB",
          "green-d":  "#243D2F",
          sand:       "#D4DBD6",
          "sand-l":   "#ECF0ED",
          scan:       "#4CAF7A",
        },
      },
      fontFamily: {
        sans:  ["DM Sans", "Helvetica Neue", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
        mono:  ["DM Mono", "monospace"],
      },
      maxWidth: {
        container: "1100px",
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
