import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f0f0f',
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
  plugins: [
    scrollbar({ nocompatible: true }),
  ],
}
