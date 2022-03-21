module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes:{
        'focus-in-expand':{
          '0%': {
            'letter-spacing': '-0.5em',
            filter: 'blur(12px)',
            opacity: 0,
          },
          '100%' :{
            filter: 'blur(0px)',
            opacity: 1,
          }
        },
      },
      animation:{
        'title-animation': 'focus-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
      }
    },
  },
  plugins: [],
}
