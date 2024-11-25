import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				zinc: {
					925: '#121216'
				}
			},

			boxShadow: {
				decorations: '0px -5px 20px 15px #121216'
			},
			transitionTimingFunction: {
				'power-in': 'cubic-bezier(.78,.04,.16,1)',
				'power2-in': 'cubic-bezier(.22,1.07,.34,.98)'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
