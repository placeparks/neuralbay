/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",

  theme: {
   
    extend: {
      colors: {
        'bb' : 'rgba(16, 24, 40, 1)',

      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '4rem',
      },
      backgroundColor: {
        'whiteRgba': '#f9f9fd',
        'dark-gray-900': '#1f2937',
        'bluecustom': 'rgba(234, 244, 255, 1)',
        'yellowcustom':'rgba(254, 245, 233, 1)',
        'pinkcustom': 'rgba(255, 241, 252, 1)',
        'bluebg':'rgba(249, 250, 254, 1)',

      },
        animation: {
          first: "moveVertical 30s ease infinite",
          second: "moveInCircle 20s reverse infinite",
          third: "moveInCircle 40s linear infinite",
          fourth: "moveHorizontal 40s ease infinite",
          shimmer: "shimmer 2s linear infinite",

  
        },
        keyframes: {
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
        },
    
         },
    },
  plugins: [],
};
