/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EA',
        'forest': '#0D1F0E',
        'mid-green': '#2D5A30',
        'fresh-accent': '#8CCB6F',
        'soft-gold': '#C9A84C',
        'off-white': '#FCFBF7',
        'muted': '#5A6B5C',
        'clay': '#B9603B',
        'mist': '#E9F0EA',
        'ink': '#1E211B',
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
