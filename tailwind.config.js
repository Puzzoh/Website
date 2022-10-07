const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './utils/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: [require('daisyui')],
    theme: {
        // letterSpacing: {
        //     tight: '-.015em'
        // },
        extend: {
            height: {
                'half-screen': '50vh'
            },
            inset: {
                '17': '68px',
                '26': '104px'
            },
            fontFamily: {
                IndustrialSans: ["IndustrialSans", "cursive"],
            }
        },
        colors: {
            white: '#FFF',
            black: '#000',
            primary: 'hsl(72, 68%, 64%)',
            first: 'hsl(188, 86%, 55%)',
            second: 'hsl(23, 100%, 65%)',
            main: 'hsl(0, 100%, 91%)'
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',    
            'lg': '1024px',     
            'xl': '1280px',      
            '2xl': '1536px',
            // => @media (min-width: ) { ... }
          }
    },
    variants: {},
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
};