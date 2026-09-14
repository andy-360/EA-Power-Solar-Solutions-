/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A1420',
          900: '#0F1B2D',
          800: '#162439',
          700: '#203352',
          600: '#2C4468',
        },
        paper: {
          DEFAULT: '#F7F5F0',
          dim: '#EFEBE2',
        },
        gold: {
          DEFAULT: '#E8A73B',
          dim: '#C98A2A',
          light: '#F4CB86',
        },
        wire: {
          DEFAULT: '#2E6F9E',
          light: '#5B93BC',
          dim: '#1F4D6E',
        },
        leaf: {
          DEFAULT: '#4F9D69',
        },
        ink: '#16212E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '38rem',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(247,245,240,0) 0%, rgba(247,245,240,1) 100%)',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(16,33,50,0.06)',
      },
      keyframes: {
        flow: {
          '0%': { 'stroke-dashoffset': '24' },
          '100%': { 'stroke-dashoffset': '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flow: 'flow 1.2s linear infinite',
        rise: 'rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
