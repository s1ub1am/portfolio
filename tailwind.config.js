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
                primary: "#6366f1",      // Indigo 500
                secondary: "#e11d48",    // Rose 600
                dark: "#050816",         // Deep space black
                light: "#efe8de",
                surface: "#0d1224",      // Dark navy surface
                neonBlue: "#818cf8",
                neonCyan: "#22d3ee",
                neonPurple: "#a855f7",
                neonGreen: "#10b981",
                cardBg: "#0d1224",
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['Fraunces', 'serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(180deg)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.4)' },
                    '50%': { boxShadow: '0 0 50px rgba(99,102,241,0.8), 0 0 100px rgba(99,102,241,0.3)' },
                },
                auraPulse: {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                typewriter: {
                    'from': { width: '0' },
                    'to': { width: '100%' },
                },
                blink: {
                    '50%': { borderColor: 'transparent' },
                },
                particleFly: {
                    '0%': { transform: 'translateY(0) opacity(1)' },
                    '100%': { transform: 'translateY(-100vh) opacity(0)' },
                },
                ringPulse: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(1.6)', opacity: '0' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                rotateSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                }
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                floatSlow: 'floatSlow 10s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite',
                auraPulse: 'auraPulse 4s ease-in-out infinite',
                shimmer: 'shimmer 3s linear infinite',
                ringPulse: 'ringPulse 1.5s ease-out infinite',
                slideUp: 'slideUp 0.3s ease-out forwards',
                rotateSlow: 'rotateSlow 20s linear infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 0deg, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
