// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
    marqueeLeft: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    marqueeRight: {
      '0%': { transform: 'translateX(-50%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
  animation: {
    'marquee-left': 'marqueeLeft 30s linear infinite',
    'marquee-right': 'marqueeRight 30s linear infinite',
  },
  
        fontFamily: {
            sans: ['var(--font-helvetica-now)', 'sans-serif'], // 👈 This line is key
          },
      },
      
  },
  plugins: [],
};
