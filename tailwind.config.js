module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'pink-sky': "url('/src/images/pinksky.jpg')",
                'cartoon-sky': "url('/src/images/pinksky.jpeg')",
                'red-forest': "url('/src/images/red-forest.jpeg')",
                'cliff': "url('/src/images/cliff.jpeg')"
            },
            keyframes: {
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(40px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.5s ease-out'
            }
        },
    },
    plugins: [],
}
