/* eslint-disable import/no-anonymous-default-export */

export default {
	fonts: {
		main: 'tthovesvar, system-ui, sans-serif',
		mono: 'jetbrainsmono, monospace'
	},

	// Colors for the app
	colors: {
		primaryAccent: '#fea93c',
		secondaryAccent: '#8b00ff',
		secondaryAccentLight: '#8b00ff1a',
		borderAnimationPink: '#ff64bd',
		borderAnimationPeach: '#ffd4d4',
		backgroundLight: '#ffffff',
		backgroundDark: '#2e2e2e',
		backgroundDarker: '#242526',
		inactive: '#727272',
		active: '#000000',
		light: '#ffffff',
		dark: '#000000'
	},

	// Breakpoints for responsive design
	breakpoints: {
		xss: 'only screen and (max-width: 400px)',
		xs: 'only screen and (max-width: 451px)',
		sm: 'only screen and (max-width: 641px)',
		md: 'only screen and (max-width: 769px)',
		ipad: 'only screen and (max-width: 821px)',
		lg: 'only screen and (max-width: 1025px)',
		xl: 'only screen and (max-width: 1281px)',

		hover: 'only screen and (hover: hover) and (pointer: fine)',
		hoverNone: 'only screen and (hover: none) and (pointer: coarse)',
		mdHover:
			'only screen and (max-width: 769px) and (hover: none) and (pointer: coarse)',
		ipadHover:
			'only screen and (max-width: 821px) and (hover: none) and (pointer: coarse)',
		lgHover:
			'only screen and (max-width: 1025px) and (hover: none) and (pointer: coarse)'
	}
};
