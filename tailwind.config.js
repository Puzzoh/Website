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
                LexendMega: ['LexendMega'],
                LexendDeca: ['LexendDeca']
            },
            colors: {
                white: '#FFF',
                black: '#000',
                primary: 'hsl(23, 100%, 65%)',
                primary_light: 'hsl(23, 100%, 70%)',
                second: 'hsl(72, 68%, 64%)',
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.slate,
            green: colors.emerald,
            blue: colors.blue,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
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