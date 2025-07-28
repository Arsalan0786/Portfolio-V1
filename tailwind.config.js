/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        background: '#ffffff',
        foreground: '#0f172a',
        accent: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        input: '#e2e8f0',
        ring: '#3b82f6',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
