/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				customBlack: '#000000',
			},
		},
	},
	plugins: [],
}
