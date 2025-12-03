// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
//     // 👇 ¡AGREGA ESTO POR SI ACASO! 👇
//     "./src/context/**/*.{js,ts,jsx,tsx,mdx}", 
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 Esto cubre TODO lo que esté dentro de src
  ],
  theme: {
    extend: {
      colors: {
        // Agregamos los colores de tu proyecto original para que coincidan
        primary: '#0D47A1',
        secondary: '#FFC107',
      }
    },
  },
  plugins: [],
}