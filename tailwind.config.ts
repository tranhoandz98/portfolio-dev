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
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "4rem",
        "3xl": "5rem",
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
          DEFAULT: "var(--info)",
          foreground: "var(--info)",
        },
        help: {
          DEFAULT: "var(--help)",
          foreground: "var(--help)",
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
        'card-border': {
          DEFAULT: "var(--card-border)",
          foreground: "var(--card-border)",
        },
        'card-border-device': {
          DEFAULT: "var(--card-border-device)",
          foreground: "var(--card-border-device)",
        },
        'card-gradient1': {
          DEFAULT: "var(--gradient1)",
          foreground: "var(--gradient1)",
        },
        'card-gradient2': {
          DEFAULT: "var(--gradient2)",
          foreground: "var(--gradient2)",
        },
        gradient:{
          DEFAULT: "var(--gradient)",
          foreground: "var(--gradient)",
        },
        'section-title':{
          DEFAULT: "var(--section-title)",
          foreground: "var(--section-title)",
        },
        'code-pink':{
          DEFAULT: "var(--pink)",
          foreground: "var(--pink)",
        },
        'code-gray':{
          DEFAULT: "var(--gray)",
          foreground: "var(--gray)",
        },
        'code-amber':{
          DEFAULT: "var(--amber)",
          foreground: "var(--amber)",
        },
        'code-orange':{
          DEFAULT: "var(--orange)",
          foreground: "var(--orange)",
        },
        'code-cyan':{
          DEFAULT: "var(--cyan)",
          foreground: "var(--cyan)",
        },
        'code-green':{
          DEFAULT: "var(--green)",
          foreground: "var(--green)",
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
      screens: {
        "4k": "1980px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config