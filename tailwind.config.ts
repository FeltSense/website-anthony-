import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        secondary: {
          50: '#f5f3f1',
          100: '#e8e3de',
          200: '#d4c9be',
          300: '#bca899',
          400: '#a38976',
          500: '#8b7355',
          600: '#6f5c44',
          700: '#594a38',
          800: '#453a2d',
          900: '#362e24',
        },
        accent: {
          50: '#faf5f0',
          100: '#f3e8d9',
          200: '#e6cfb0',
          300: '#d4af7e',
          400: '#c18d51',
          500: '#a87438',
          600: '#8a5d2d',
          700: '#6f4a27',
          800: '#5c3d24',
          900: '#4d3420',
        },
      },
    },
  },
  plugins: [],
};

export default config;
