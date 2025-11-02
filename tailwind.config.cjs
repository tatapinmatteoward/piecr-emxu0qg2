/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#225522',
        accent: '#ffd700',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
