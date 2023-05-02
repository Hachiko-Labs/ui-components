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
        neutral: {
          //TO-DO: Define color names.
          500: '#A0A3BD',
          border: '#DCDDEB',
        },
      },
    },
  },
  plugins: [],
};
