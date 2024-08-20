/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,}"],
  theme: {
    extend: {
      colors:{
        "purple-dark": "#5e3fd7",
        "purple-light": "#6F6FFF",
        "dark-blue":"#040453"
      },
      backgroundImage: {
        signIn: "url('./assets/sign-in-bg.jpg')"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

