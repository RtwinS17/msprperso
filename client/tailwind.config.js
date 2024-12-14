/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#3A3042',
        azure: '#3B82F6',
        antiFlashWhite: '#F3F4F6',
        orange: '#FF9F1C',
        coral: '#FF784F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

