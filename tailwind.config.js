/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s infinite", // Blinks every 1 second
        moveIn300: "moveIn 1s ease-in-out 300ms forwards",
        moveIn500: "moveIn 1s ease-in-out 400ms forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        moveIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      fontSize: {
        "heading-xxl": "clamp(5.25rem, calc(5rem + 3vw), 8.5rem)",
        "heading-2xl": "clamp(3.25rem, calc(3rem + 3vw), 5.5rem)",
        "heading-lg": "clamp(0.75rem, calc(0.75rem + 3vw), 2.5rem)",
      },
    },
  },
  plugins: [],
};
