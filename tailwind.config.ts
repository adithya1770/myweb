import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },

      colors: {
        background: "#0e0e0e",
        surface: "#131313",
        surface2: "#1a1a1a",

        primary: "#4edea3",
        secondary: "#7dd3fc",

        border: "#232323",
        muted: "#8b8b8b",

        foreground: "#f5f5f5",
      },

      boxShadow: {
        glow: "0 0 25px rgba(78, 222, 163, 0.15)",
        card: "0 0 0 1px rgba(255,255,255,0.03)",
      },

      borderRadius: {
        xl2: "1.25rem",
      },

      backgroundImage: {
        grid: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        grid: "32px 32px",
      },

      keyframes: {
        blink: {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },

        glow: {
          "0%, 100%": {
            opacity: "0.4",
          },

          "50%": {
            opacity: "1",
          },
        },
      },

      animation: {
        blink: "blink 1s infinite",
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },

  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;