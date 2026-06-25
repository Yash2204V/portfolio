/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        zinc: {
          850: '#27272a',
          925: '#18181b',
          950: '#09090b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'flash-glow': 'flashGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        flashGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 15px 0px rgba(255, 255, 255, 0.1)', 
            borderColor: 'rgba(82, 82, 91, 0.5)' 
          },
          '50%': { 
            boxShadow: '0 0 30px 5px rgba(255, 255, 255, 0.2)', 
            borderColor: 'rgba(255, 255, 255, 0.6)' 
          }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};
