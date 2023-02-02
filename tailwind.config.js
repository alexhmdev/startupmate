/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1F63',
        'primary-variant': '#48459A',
        accent: '#46C2C2',
        secondary: '#F0DC5B',
        'secondary-variant': '#B57F21',
      },
    },
  },
  plugins: [],
};
