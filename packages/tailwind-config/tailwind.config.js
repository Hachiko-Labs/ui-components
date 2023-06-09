/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../ui-components/src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /^space-(x|y)-\d+/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          active: '#3027d9',
          DEFAULT: '#4a3aff',
          hover: '#766CFF',
        },
        secondary: {
          color3: '#7d42fb',
        },
        neutral: {
          DEFAULT: '#211f54',
          100: '#FFFFFF',
          200: '#F7F7FC',
          300: '#EFF0F6',
          500: '#a0a3bd',
          600: '#6E7191',
          border: '#DCDDEB',
        },
        warning: {
          400: '#FDBD1A',
        },
      },
      fontFamily: {
        Inter: 'Inter',
      },
    },
  },
  plugins: [],
}
