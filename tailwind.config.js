/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'darkGrey': '#262626',
      'green':'#16a34a',
      'purple': '#6b21a8',
      'white':'#fafaf9',
      'black':'#18181b'
    },
    extend: {
      keyframes: {
        'fade-in':{
          'from':{
            opacity: '0'
          },
          'to':{
            opacity: '100'
          }
        },
        'fade-out':{
          'from':{
            opacity: '100'
          },
          'to':{
            opacity: '0'
          }
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
    animation: {
        'fade-out': 'fade-out 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-in',
        typing: "typing 2s steps(15), blink .7s infinite"
    }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};