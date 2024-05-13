import type { Config } from "tailwindcss"
const colors = require('tailwindcss/colors')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        info: {
          DEFAULT: '#16f2b3',
          foreground: '#16f2b3',
        },
        help: {
          DEFAULT: colors.pink[500],
          foreground: colors.pink[500],
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gradient:{
          DEFAULT: colors.violet[600],
          foreground: colors.violet[600],
        },
        'section-title':{
          DEFAULT: colors.indigo[950],
          foreground: colors.indigo[950],
        },
        'code-pink':{
          DEFAULT: colors.pink[500],
          foreground: colors.pink[500],
        },
        'code-gray':{
          DEFAULT: colors.gray[400],
          foreground: colors.gray[400],
        },
        'code-amber':{
          DEFAULT: colors.amber[300],
          foreground: colors.amber[300],
        },
        'code-orange':{
          DEFAULT: colors.orange[400],
          foreground: colors.orange[400],
        },
        'code-cyan':{
          DEFAULT: colors.cyan[400],
          foreground: colors.cyan[400],
        },
        'code-green':{
          DEFAULT: colors.green[400],
          foreground: colors.green[400],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config