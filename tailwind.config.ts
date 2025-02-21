// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rocknroll: ['var(--font-rocknroll)'],
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        accent: 'rgb(var(--accent))',
        muted: 'rgb(var(--muted))',
        card: 'rgb(var(--card))',
      },
      backgroundColor: {
        card: 'rgb(var(--card))',
      },
      borderColor: {
        accent: 'rgb(var(--accent))',
      },
      textColor: {
        accent: 'rgb(var(--accent))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            'blockquote p:first-of-type::before': { content: '""' },
            'blockquote p:last-of-type::after': { content: '""' },
            h1: { fontFamily: 'var(--font-rocknroll)' },
            h2: { fontFamily: 'var(--font-rocknroll)' },
            h3: { fontFamily: 'var(--font-rocknroll)' },
            h4: { fontFamily: 'var(--font-rocknroll)' },
            img: { borderRadius: '0.5rem' },
            a: {
              color: 'rgb(var(--accent))',
              '&:hover': { color: 'rgb(var(--accent) / 0.8)' },
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre': { borderRadius: '0.5rem' },
            color: 'rgb(var(--foreground))',
          },
        },
        dark: {
          css: {
            color: 'rgb(var(--foreground))',
            a: { color: 'rgb(var(--accent))' },
            strong: { color: 'rgb(var(--foreground))' },
            h1: { color: 'rgb(var(--foreground))' },
            h2: { color: 'rgb(var(--foreground))' },
            h3: { color: 'rgb(var(--foreground))' },
            h4: { color: 'rgb(var(--foreground))' },
          }
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}