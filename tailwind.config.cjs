/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Bungee'],
			'sans': ['Inria Sans'],
			'tech': ['Share Tech']
		},
		extend: {
			colors: {
			'main-blue': '#1F2451',
			'gray-blue': 'rgba(31, 36, 81, 0.45)',
			'red': '#D2636E',
			'light-red': '#EBAEBF',
			'tech': 'rgba(31, 36, 81, 0.5);',
			'hero2': '#476A68',
			'hero3': '#4B5A9B',
			'hero4': '#E3BC61',
			'palehero2': '#9DA0AF',
			'palehero3': '#858CCA',
			'palehero4': '#EBCCAC',
			},
			dropShadow: {
				'pink': '3px 0 0 rgba(231, 103, 103, 0.25)',
			},
		},
		letterSpacing: {
			'widest' : '.375em'
		},
	plugins: [],
	}
}
