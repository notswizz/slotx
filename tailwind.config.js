/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'rgba(59, 130, 246, 1)' }, // You can customize this color
        },
      },
      animation: {
        glow: 'glow 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
