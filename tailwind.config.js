/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan ini mencakup semua file yang menggunakan Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}