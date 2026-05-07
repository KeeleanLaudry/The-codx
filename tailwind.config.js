export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
       fontFamily: {
      poppins: ["Times New Roman", "serif"],
      },
        keyframes: {
               slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px) translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(-50%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    },
  },
  plugins: [
  require('tailwindcss-3d'),
  
    require('@tailwindcss/typography'),

  ],
}