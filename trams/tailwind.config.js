/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-yellow': '#F4CE14',
      },
      boxShadow: {
        'text-shadow': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow': {
            textShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          },
          '.text-shadow-md': {
            textShadow: '0 3px 4px rgba(0, 0, 0, 0.2)',
          },
          '.text-shadow-lg': {
            textShadow: '0 5px 8px rgba(0, 0, 0, 0.3)',
          },
        },
        ['responsive', 'hover']
      );
    }
  ],
};
