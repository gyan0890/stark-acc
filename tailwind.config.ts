import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sn-navy': '#0C0C4F',
        'sn-blue': '#1C1C84',
        'sn-orange': '#EC796B',
        'sn-mauve': '#E175B1',
        'sn-purple': '#D672EF',
        'sn-galaxy': '#3F8CFF',
        'white-flare': '#FBFBFB',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'nebula-gradient': 'linear-gradient(135deg, #EC796B 0%, #D672EF 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 0%, #1C1C84 0%, #0C0C4F 70%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
