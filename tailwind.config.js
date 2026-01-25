/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#4f46e5", // Indigo 600
                secondary: "#e11d48", // Rose 600
                dark: "#0f172a", // Slate 900
                light: "#f8fafc", // Slate 50
                surface: "#1e293b", // Slate 800
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
