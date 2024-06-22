import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'hover:text-blue-600',
    'hover:text-gray-600',
    'hover:text-blue-400',
    'hover:text-crimson',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'h1-xs': ['38px', { lineHeight: '46px' }],
        'h1-md': ['42px', { lineHeight: '50px' }],
        'h1-lg': ['56px', { lineHeight: '64px' }],
        'h2-xs': ['32px', { lineHeight: '40px' }],
        'h2-md': ['38px', { lineHeight: '46px' }],
        'h3-xs': ['24px', { lineHeight: '30px' }],
        'h3-md': ['28px', { lineHeight: '34px' }],
        'h4-xs': ['20px', { lineHeight: '26px' }],
        'h4-md': ['24px', { lineHeight: '30px' }],
        'body-xs': ['14px', { lineHeight: '20px' }],
        'body-md': ['18px', { lineHeight: '24px', letterSpacing: '0.56px' }],
      },
      fontWeight: {
        normal: '100',
        bold: '450',
      },
      screens: {
        xs: '375px',
        md: '769px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '2650px',
      },
      colors: {
        black: '#000000', // main background color
        charcoal: '#333333', // subtle differentiation background color
        crimson: '#DC143C', // highlight elements color - links, buttons
        'dark-crimson': '#b10b2c', // dark crimson color
        silver: '#C0C0C0', // general text color
        softwhite: '#FFFFFF', // heading and CTAs text color
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },

        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      transformOrigin: { 'bottom-left': 'bottom left' },
      rotate: { '-90': '-90deg' },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
