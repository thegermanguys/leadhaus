/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f1f3d',
        'navy-light': '#1a3260',
        electric: '#2563eb',
        'electric-dark': '#1d4ed8',
        sky: '#4a90d9',
        'off-white': '#f8fafc',
        'light-gray': '#f1f5f9',
        'green-accent': '#22c55e',
        'amber-accent': '#f59e0b',
        'purple-accent': '#8b5cf6',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(15, 31, 61, 0.12)',
        'card-hover': '0 20px 60px rgba(15, 31, 61, 0.2)',
        glow: '0 0 40px rgba(37, 99, 235, 0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f1f3d 0%, #1a3260 50%, #0f1f3d 100%)',
        'blue-gradient': 'linear-gradient(135deg, #2563eb 0%, #4a90d9 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(74,144,217,0.04) 100%)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
