/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                colestia: {
                    bg: '#050505',       // Deepest Black (from palette)
                    card: '#111111',

                    // The 5-Color Palette
                    purple: '#7A1EA6',   // Vibrant Purple
                    magenta: '#C92B8D',  // Deep Pink/Magenta
                    blue: '#005AC6',     // Strong Blue
                    white: '#FFFFFF',

                    // Gradients (Derived)
                    'gradient-start': '#7A1EA6',
                    'gradient-mid': '#C92B8D',
                    'gradient-end': '#005AC6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'colestia-gradient': 'linear-gradient(to right, #7A1EA6, #C92B8D, #005AC6)',
            }
        },
    },
    plugins: [],
}
