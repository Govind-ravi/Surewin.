/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-text': '#000000',
        'secondary-text': '#999999',
        'btn-text': '#fff',
        'orange-btn': '#FF6B00',
        'dark-gray-btn': '#1E1E1E',
        'light-gray-btn': '#D9D9D9',
        'blue-btn': '#0057FF',
      },
    },
  },
  plugins: [],
};
