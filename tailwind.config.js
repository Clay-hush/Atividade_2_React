/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: { ink: '#17251f', mint: '#b9f3ce', paper: '#f8faf7' },
      boxShadow: { soft: '0 16px 50px rgba(21, 47, 35, .08)' },
    },
  },
  plugins: [],
}
