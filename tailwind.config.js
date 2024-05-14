const {nextui} = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|avatar|button|card|image|input|link|modal|navbar|progress|select|table|tabs|divider|ripple|spinner|listbox|popover|scroll-shadow|checkbox|spacer).js",

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}