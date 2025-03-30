/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4553CC',
        'brand-purple': '#DA9CEA',
        purple: {
          100: '#F3F0FF',
          600: '#6B46C1',
          700: '#553C9A',
        },
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}; 