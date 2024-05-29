import {nextui} from "@nextui-org/react"

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '97': '40rem', // Remplacez la valeur par celle que vous souhaitez
        '98': '80rem',
        '47': "20rem"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'custom': '1270px', // Exemple de breakpoint personnalisé
        'custom2': '1367px' // Exemple de breakpoint personnalisé avec un intervalle
      },
      marginTop: {
        'custom': '5rem', // Vous pouvez remplacer 'custom' par le nom de votre choix
      },
    },
  },
  plugins: [
    nextui(),
    addVariablesForColors
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

