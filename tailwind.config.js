/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			workSans: ['Work Sans'],
			openSans: ['Open Sans'],
		},
		extend: {
			colors: {
				colorBackground: 'var(--color-background)',
				colorPrimary: 'var(--color-primary)',
				colorCross: 'var(--color-cross)',
				colorDark: 'var(--color-dark)',
				colorBorder: 'var(--color-border)',
				colorDot: 'var(--color-dot)',
				colorQuantity: 'var(--color-quantity)',
				colorSecondaryText: 'var(--color-secondaryText)',
				colorRatingGreen: 'var(--color-ratingGreen)',
			},
		},
	},
	plugins: [],
};
