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
        'tracking-in-expand-fwd-bottom':{
          '0%' :{
            'letter-spacing': '-0.5em',
            transform: 'translateZ(-700px) translateY(500px)',
            opacity: 0,
          },
          '40%' :{
            opacity: 0.6,
          },
          '100%' :{
            transform: 'translateZ(0) translateY(0)',
            opacity: 1,
          }
        }
      },
      animation:{
        'title-animation': 'focus-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'answer-animation': 'tracking-in-expand-fwd-bottom 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.1s both'
      }
    },
  },
  plugins: [],
}
