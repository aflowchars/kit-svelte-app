import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'loop-scroll': 'loop-scroll 50s linear infinite'
			},
			keyframes: {
				'loop-scroll': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(-100%)' }
				}
			}
		}
	},

	plugins: []
} as Config;
