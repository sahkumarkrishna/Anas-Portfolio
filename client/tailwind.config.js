/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'box-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(42, 42, 42, 0.5))',
        'card-gradient': 'linear-gradient(to bottom right, rgba(30, 30, 30, 1), rgba(42, 42, 42, 1))',
        'card-gradient-hover': 'linear-gradient(to bottom right, rgba(17, 17, 17, 0.7), rgba(26, 26, 26, 0.7))',
        'input-gradient': 'rgba(17, 17, 17, 0.5)',
        'nav-gradient': 'rgba(30, 30, 30, 1)',
      },
    },
  },
  plugins: [],
}
