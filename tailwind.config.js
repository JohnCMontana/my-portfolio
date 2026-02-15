export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0f0f0f',
          light: '#f7f7f7',
        },
        card: '#111111',
        accent: '#d1d5db',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(0,0,0,0.35)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      borderRadius: {
        xl: '18px',
      },
    },
  },
  plugins: [],
}
