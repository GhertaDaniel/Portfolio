import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderColor: {
				lines: '#1E2D3D',
			},
			outlineColor: {
				lines: '#1E2D3D',
			},
			fontSize: {
				heading: '62px',
				subheading: '32px',
				paragraph: '18px',
				lable: '16px',
				code: '14px',
			},
			colors: {
				'primary-black': '#01080E',
				'primary-dark-blue': '#011627',
				'primary-darker-blue': '#011221',

				'secondary-gray': '#607B96',
				'secondary-green': '#3C9D93',
				'secondary-purple': '#4D5BCE',
				'secondary-white': '#FFFFFF',

				'accent-orange': '#FEA55F',
				'accent-slimy': '#43D9AD',
				'accent-light-orange': '#E99287',
				'accent-pink': '#C98BDF',
			},
			backgroundImage: (theme) => ({
				'gradient-primary': `linear-gradient(to right, ${theme(
					'colors.bg-secondary-purple'
				)}, ${theme('colors.bg-accent-slimy')})`,
			}),
			gridTemplateColumns: {
				header:
					'minmax(170px, 310px) 120px repeat(2, minmax(125px, 150px)) auto minmax(140px, 150px)',
				footer: '150px repeat(2, 50px) auto 170px',
			},
			boxShadow: {
				body: '0 0 0 1px #1E2D3D, 0 0 0 80px #010C15',
			},
			screens: {
				'3xl': '1600px',
			},
		},
	},
	plugins: [],
};
export default config;
