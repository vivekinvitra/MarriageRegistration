/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flower-marigold': 'var(--flower-marigold)',
        'flower-jasmine': 'var(--flower-jasmine)',
        'flower-rose': 'var(--flower-rose)',
        'flower-leaf': 'var(--flower-leaf)',
        'flower-gold': 'var(--flower-gold)',
      },
    },
  },
  plugins: [],
}