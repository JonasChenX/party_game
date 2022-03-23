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
        },
        'text-blur-out':{
          '0%': {
            filter: 'blur(0.01)',
          },
          '100%': {
            filter: 'blur(12px) opacity(0%)'
          }
        },
        'flicker-in-1': {
          '0%': {
            opacity: 0,
          },
          '10%' :{
            opacity: 0,
          },
          '10.1%' :{
            opacity: 1,
          },
          '10.2%' :{
            opacity: 0,
          },
          '20%' :{
            opacity: 0,
          },
          '20.1%' :{
            opacity: 1,
          },
          '20.6%' :{
            opacity: 0,
          },
          '30%' :{
            opacity: 0,
          },
          '30.1%' :{
            opacity: 1,
          },
          '30.5%' :{
            opacity: 1,
          },
          '30.6%' :{
            opacity: 0,
          },
          '45%' :{
            opacity: 0,
          },
          '45.1%' :{
            opacity: 1,
          },
          '50%' :{
            opacity: 1,
          },
          '55%' :{
            opacity: 1,
          },
          '55.1%' :{
            opacity: 0,
          },
          '57%' :{
            opacity: 0,
          },
          '57.1%' :{
            opacity: 1,
          },
          '60%' :{
            opacity: 1,
          },
          '60.1%' :{
            opacity: 0,
          },
          '65%' :{
            opacity: 0,
          },
          '65.1%' :{
            opacity: 1,
          },
          '75%' :{
            opacity: 1,
          },
          '75.1%' :{
            opacity: 0,
          },
          '77%' :{
            opacity: 0,
          },
          '77.1%' :{
            opacity: 1,
          },
          '85%' :{
            opacity: 1,
          },
          '85.1%' :{
            opacity: 0,
          },
          '86%' :{
            opacity: 0,
          },
          '86.1%' :{
            opacity: 1,
          },
          '100%' :{
            opacity: 1,
          },
        }
      },
      animation:{
        'title-animation': 'focus-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'answer-animation': 'tracking-in-expand-fwd-bottom 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.1s both',
        'pass-animation': 'text-blur-out 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.2s both',
        'bingo-animation': 'flicker-in-1 1s linear both'
      }
    },
  },
  plugins: [],
}
