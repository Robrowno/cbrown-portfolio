/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        slideUpCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) both',
      },
      keyframes: {
        slideUp: {
          from: {
            transform: 'translateY(100%)',
            to: {
              transform: 'translateY(0)',
            },
          },
        },
      }
    },
    plugins: [],
  }
}
