/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#5260FF",
        mainBlue: "#4E6C99",
        darkBlue: "#2D37A8",
      },
    },
    screens: {
      'sm': '640px',
      'md': '905px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

