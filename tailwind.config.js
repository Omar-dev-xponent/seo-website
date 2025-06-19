/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        foreground: "hsl(var(--foreground))",
        background: {
          DEFAULT: "hsl(var(--background))",
          brand: "hsl(var(--bg-color))",
          hover: "hsl(var(--hover-color))",
          footer: "hsl(var(--footer-color))",
        },
        primary: {
          DEFAULT: "#0DB4A5",
          foreground: "hsl(var(--primary-foreground))",
          50: "#E6F7F6",
          100: "#CCF0ED",
          500: "#0DB4A5",
          600: "#0A9A8D",
          900: "#064E47",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        brand: {
          100: "hsl(var(--brand-100))",
          75: "hsl(var(--brand-75))",
          50: "hsl(var(--brand-50))",
          25: "hsl(var(--brand-25))",
          10: "hsl(var(--brand-10))",
          5: "hsl(var(--brand-5))",
        },
        typography: {
          100: "hsl(var(--typography-100))",
          75: "hsl(var(--typography-75))",
          50: "hsl(var(--typography-50))",
          25: "hsl(var(--typography-25))",
          10: "hsl(var(--typography-10))",
          5: "hsl(var(--typography-5))",
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
          // CUSTOM ACCENT COLOR-->
          1: "hsl(var(--accent-1))",
          2: "hsl(var(--accent-2))",
          3: "hsl(var(--accent-3))",
          4: "hsl(var(--accent-4))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        teal: {
          50: "#E6F7F6",
          100: "#CCF0ED",
          500: "#0DB4A5",
          600: "#0A9A8D",
          900: "#064E47",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
