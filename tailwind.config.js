/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'forest': '#0D1F0E',
        'mid-green': '#2D5A30',
        'fresh-accent': '#7DC47F',
        'soft-gold': '#C9A84C',
        'off-white': '#FAF8F2',
        'muted': '#5A6B5C',
        'card-border': 'rgba(13,31,14,0.12)',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
