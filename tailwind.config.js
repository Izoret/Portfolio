/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",], theme: {
        extend: {
            fontFamily: {
                dosis: ["Dosis", "sans-serif"],
            }, colors: {
                primary: {
                    50: "#f2f0ff",
                    100: "#e4e0ff",
                    200: "#cdc5fe",
                    300: "#ac9dfd",
                    400: "#8b6cf9",
                    500: "#6d3ff5",
                    600: "#5c2ce9",
                    700: "#4f20d0",
                }, dark: "#1a1a2e", gray: {
                    450: '#848B98'
                }
            }, animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
            }, keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-size': '200% 200%', 'background-position': 'left center'
                    }, '50%': {
                        'background-size': '200% 200%', 'background-position': 'right center'
                    },
                }, float: {
                    '0%, 100%': {transform: 'translateY(0)'}, '50%': {transform: 'translateY(-5px)'},
                }, glow: {
                    '0%, 100%': {opacity: 1}, '50%': {opacity: 0.6},
                },
            }, cursor: {
                'copy': 'copy',
            },
        },
    }, plugins: [],
}
