/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
        colors: {
            primary: {
                'v-dark-blue': 'hsl(243, 87%, 12%)',
                'desaturated-blue': 'hsl(238, 22%, 44%)'
            },
            accent: {
                'bright-blue': 'hsl(224, 93%, 58%)',
                'moderate-cyan': 'hsl(170, 45%, 43%)'
            },
            neutral: {
                'lg-grayish-blue': 'hsl(240, 75%, 98%)',
                'lg-gray': 'hsl(0, 0%, 75%)'
            }
        },
        fontFamily: {
            'raleway': 'Raleway',
            'open-sans': 'Open Sans'
        }
    },
  },
  plugins: [],
}
