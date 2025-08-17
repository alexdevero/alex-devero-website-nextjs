/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '.dark'],
  theme: {
    extend: {
      colors: {
        'black-100': '#121212', // dark mode: page background
        'gray-1000': '#e0e0e0', // dark mode: headings / high priority
        'gray-1100': '#cccccc', // dark mode: body text
        'gray-1200': '#999999', // dark mode: secondary text
        'gray-1300': '#888888', // dark mode: accent text (links, button outlined)
        'gray-1400': '#666666', // dark & light mode: labels/iconography/small text
        'gray-1500': '#aaaaaa', // dark mode: accent hover (links:hover, button outlined:hover)
        'white-100': '#ffffff', // light mode: card background
        'white-200': '#f5f5f5', // light mode: page background
        'black-200': '#222222', // light mode: body text
        'black-300': '#444444', // light mode: secondary text
        'blue-1000': '#2563eb', // light mode: accent text (links, button outlined)
      },
    },
  },
  plugins: [],
}
