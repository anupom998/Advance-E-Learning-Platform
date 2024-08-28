/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,}"],
  theme: {
    extend: {
      colors:{
        "purple-dark": "#e25099",
        "purple-light": "#FCDFFF",
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

