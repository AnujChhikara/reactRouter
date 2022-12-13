/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1579373791421-d7b4b6dfb8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxldHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
      },
      colors:{
        'dark':'#212121',
        'lDark':'#3d3d3d',
        'body':'#d8cfd0'
      }
  },
  
  screens: {
    'sm': '300px',
    // => @media (min-width: 576px) { ... }

    'md': '600px',
    // => @media (min-width: 960px) { ... }

    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  },
  fontFamily: {
    'nunito': ['nunito', 'sans-serif'],
    'Sans': ['Source Sans Pro', 'sans-serif']
  }
    
  },
  plugins: [],
}
