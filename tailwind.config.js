module.exports = {
  
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
 
  plugins: [require('tailwind-scrollbar-hide')],
  enabled: process.env.NODE_ENV === "production",
};
