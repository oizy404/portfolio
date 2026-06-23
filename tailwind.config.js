/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Centered container with responsive horizontal padding — used site-wide.
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px", // cap max content width for readability on huge displays
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px", // bumped from 960 so tablets get the desktop layout sooner
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      // Refined pairing: geometric display for headings, clean sans for body,
      // mono kept for the "developer" accents (eyebrows, tags, numbers).
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      primary: ["var(--font-inter)", "system-ui", "sans-serif"], // back-compat alias
    },
    extend: {
      colors: {
        // Layered cool-neutral surface system.
        primary: {
          DEFAULT: "#0b0c10", // page background
        },
        surface: {
          DEFAULT: "#14151a", // card background
          2: "#1c1d24", // elevated / hover
          3: "#26272f", // inputs, chips
        },
        // Accent: refined muted indigo / periwinkle.
        accent: {
          DEFAULT: "#8488f0",
          hover: "#6b6fe0",
          soft: "#a3a6f5",
        },
        line: "rgba(255,255,255,0.08)", // semantic border token
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(132,136,240,0.45)",
        card: "0 8px 30px -12px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        // Subtle grid + radial glow used behind hero / accent bands.
        grid: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(60% 60% at 50% 0%, rgba(132,136,240,0.18) 0%, transparent 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
