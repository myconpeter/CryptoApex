/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.{ejs,js}'],
	theme: {
		extend: {
			colors: {
				brightYellow: '#d6cd20',
				black: 'hsl(0, 0%, 3%)',
				darkGreen: 'hsl(105, 68%, 33%)',
				lightGreen: 'hsl(119, 92%, 51%)',
				normalGray: 'hsl(105, 3%, 71%)',
				lightGray: 'hsl(105, 8%, 89%)',
				veryDarkGreen: 'hsl(105, 94%, 9%)',
				darkYellow: 'hsl(59, 90%, 32%)',
				veryLightGrey: 'hsl(0, 0%, 98%)',
			},
		},
	},
	plugins: [],
};
