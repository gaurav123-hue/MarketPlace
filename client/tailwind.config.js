/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom-h': 'calc(100vh - 80px)',
      },
      colors: {
        scrollbar: {
          light: '#d1d5db',
          dark: '#374151',
        },
      },
      spacing: {
        scrollbar: '4px', // Updated width to 4px
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.scrollbar': {
          /* For Webkit Browsers */
          '&::-webkit-scrollbar': {
            width: theme('spacing.scrollbar'),
            height: theme('spacing.scrollbar'),
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme('colors.scrollbar.light'),
            borderRadius: '4px', // Adjusted border radius to match scrollbar width
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme('colors.scrollbar.dark'),
          },
          /* For Firefox */
          scrollbarWidth: 'thin',
          scrollbarColor: `${theme('colors.scrollbar.light')} ${theme('colors.scrollbar.dark')}`,
        },
      });
    },
  ],
}
