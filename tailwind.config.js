// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-helvetica-now)', 'sans-serif'], // 👈 This line is key
          },
      },
      
  },
  plugins: [],
};
