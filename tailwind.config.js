export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins'
      },
      backgroundImage: {
        pattern: 'url(bg-vector.svg)'
      }
    },
  },
  plugins: [],
}