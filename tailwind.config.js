/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#4F46E5',
        'title-color':'#1c1c1c',
        'text-color': '#6f6f6f',
      }
    },
  },
  plugins: [],
}

