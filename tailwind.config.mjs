/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
			  '.clip-poly': { 'clip-path': 'polygon(40% 0, 100% 0, 100% 100%, 20% 100%)' },
			});
		  },
	],
}
