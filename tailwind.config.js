/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDFFAD',
        accent: '#EDFFAD',
        background: '#E0E0E0',
        textPrimary: '#2B2B2B',
      },
      fontFamily: {
        heading: ['"Source Code Pro"', 'monospace'],
        body: ['Outfit', 'sans-serif'],
        data: ['"Source Code Pro"', 'monospace'],
        drama: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
