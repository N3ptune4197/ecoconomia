const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {

      fontFamily: {
        'montserrat': ['"Montserrat"', 'serif'],
      }
    },
  },
  plugins: [
    
    require("flyonui"),
    require("flyonui/plugin"),
    require('preline/plugin'),
    
    addDynamicIconSelectors()
  ],

  flyonui: {
    themes: ["light", "dark"]
  },

}

