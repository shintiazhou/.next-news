/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        lg: '1280px',
        xl: '1280px',
      }
    },
    extend: {
      boxShadow: {
        'md': '0px 0px 10px rgba(45, 58, 33, 0.1)',
        'lg': '0px 0px 10px rgba(45, 58, 33, 0.4)',
      },
      colors: {
        primary: "#2D3A21",
        secondary: "#FFA23B",
        tertiary: "#F6F5EC",
        muted: "rgba(45, 58, 33, 0.2)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ],
}
