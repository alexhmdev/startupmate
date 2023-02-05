/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        startupmate: {
          primary: '#1A1F63',
          secondary: '#48459A',
          accent: '#46C2C2',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
    ],
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#1A1F63',
  //       'primary-variant': '#48459A',
  //       accent: '#46C2C2',
  //       secondary: '#F0DC5B',
  //       'secondary-variant': '#B57F21',
  //     },
  //   },
  // },
  plugins: [require('daisyui')],
};
