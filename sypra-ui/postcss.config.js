/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF424D',
          50: '#fff5f5',
          100: '#ffe0e2',
          200: '#ffc4c7',
          300: '#ff9da2',
          400: '#ff6670',
          500: '#FF424D',
          600: '#e03840',
          700: '#c42d36',
          800: '#a42830',
          900: '#88272e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'primary': '0 4px 20px rgba(255, 66, 77, 0.3)',
        'primary-lg': '0 8px 40px rgba(255, 66, 77, 0.4)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.1), 0 8px 40px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}