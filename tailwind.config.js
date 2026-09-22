/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'var(--bg-dark, #07090e)',
          card: 'var(--bg-card, rgba(18, 22, 34, 0.75))',
          purple: 'var(--accent-purple, #8b5cf6)',
          cyan: 'var(--accent-cyan, #06b6d4)',
          rose: 'var(--accent-rose, #f43f5e)',
          emerald: 'var(--accent-emerald, #10b981)',
          amber: 'var(--accent-amber, #f59e0b)',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
