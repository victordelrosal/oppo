/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",    // ← this wildcard MUST be here
  ],
  theme: { extend: {} },
  plugins: [],
}
