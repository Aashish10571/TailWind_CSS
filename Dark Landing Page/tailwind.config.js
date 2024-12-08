/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'open-sans': 'Open Sans',
            'raleway': 'Raleway'
        },
        colors: {
            'primary': {
                'i-dark-blue': 'hsl(217, 28%, 15%)',
                'b-dark-blue': 'hsl(218, 28%, 13%)',
                'f-dark-blue': 'hsl(216, 53%, 9%)',
                't-dark-blue': 'hsl(219, 30%, 18%)'
            },
            'accent': {
                'cyan': 'hsl(176, 68%, 64%)',
                'blue': 'hsl(198, 60%, 50%)',
                'red': 'hsl(0, 100%, 63%)'
            },
            'neutral': {
                'white': 'hsl(0, 0%, 100%)'
            }
        }
    },
  },
  plugins: [],
}
