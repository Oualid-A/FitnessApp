/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  important: true,
  plugins: [],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
    options: {
      safelist: [],
      important: true,
    },
  }
};
