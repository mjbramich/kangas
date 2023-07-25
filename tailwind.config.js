/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			blue: '#0c7dbb',
			'blue-dark': '#001a40',
			white: '#f1f6f9',
			gray: '#e2edf3',
			dark: '#04101c',
			'dark-gray': '#d1d5db',
			text: 'rgba(0,0,0,0.6)',
			overlay: '#44403c',
			richblack: '#111827',
		},
		screens: {
			mobile: '390px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				quote: "url('./dist/images/quotes.png')",
			},
			height: {
				'navbar-height': '6rem',
				'mb-menu-height': 'calc(100vh - 6rem)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
};
