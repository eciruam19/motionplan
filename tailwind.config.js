/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dffb-black': '#1E1E1E',
        'dffb-pink': '#EE3D79',
        'dffb-gray': '#F4F4F4',
      },
      fontFamily: {
        'druk': ['Druk Wide Medium', 'sans-serif'],
        'favorit': ['Favorit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
