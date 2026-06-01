/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505", // Deep black
        charcoal: "#0B0B0D",
        secondary: "#F07E25", // Pulse orange
        "deep-orange": "#F1620F",
        background: "#F6F7F9", // Light grey
        surface: "#FFFFFF", // White
        "text-grey": "#6B7280",
        
        // Keep these for compatibility if any components rely on them implicitly before being refactored
        "surface-variant": "#f1f5f9",
        outline: "#747878",
        "outline-variant": "#e2e8f0",
        "on-surface": "#050505",
        "on-surface-variant": "#6B7280",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "60px",
        "unit": "8px",
        "section-gap": "160px",
        "gutter": "24px",
        "container-max": "1440px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        'pulse-streak': 'pulse-streak 4s linear infinite',
      }
    },
  },
  plugins: [],
}
