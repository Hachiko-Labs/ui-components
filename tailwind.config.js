/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          hover: '#766CFF',
          DEFAULT: '#4A3AFF',
          active: '#3027D9',
        },
      },
    },
  },
  plugins: [],
};
