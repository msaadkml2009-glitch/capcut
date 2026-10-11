/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070708',
        elev: '#0E0E11',
        card: '#141418',
        line: 'rgba(255,255,255,0.08)',
        mute: '#9A9AA2',
        mint: '#3EF0B4',
        mist: '#F4F4F2',
        violet: '#A78BFA',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(62, 240, 180, 0.18)',
        card: '0 30px 80px rgba(0,0,0,0.45)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}
