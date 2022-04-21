module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'pink-sky': "url('/src/images/pinksky.jpg')",
                'cartoon-sky': "url('/src/images/pinksky.jpeg')",
                'red-forest': "url('/src/images/red-forest.jpeg')",
                'cliff': "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('/src/images/cliff.jpeg')",
                'mountain-sky' : "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('/src/images/sky.jpg')",
                'skyline' : "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url('/src/images/skyline.jpg')"
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
            },
            fontFamily: {
                Akshar : ['Akshar']
            }
        },
    },
    plugins: [],
}
