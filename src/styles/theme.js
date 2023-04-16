/* eslint-disable import/no-anonymous-default-export */

export const lightTheme = {
	fonts: {
		main: 'tthovesvar, system-ui, sans-serif',
		mono: 'jetbrainsmono, monospace'
	},

	// Colors for the app
	colors: {
		secondaryAccent: '#8b00ff',
		secondaryAccentLight: '#8b00ff1a',
		borderAnimationPink: '#ff64bd',
		borderAnimationPeach: '#ffd4d4',
		background: '#ffffff',
		fontColor: '#000000',
		inactive: '#727272',
		active: '#000000',
		codeBackground: '#f2f2f2'
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

export const darkTheme = {
	fonts: {
		main: 'tthovesvar, system-ui, sans-serif',
		mono: 'jetbrainsmono, monospace'
	},

	// Colors for the app
	colors: {
		secondaryAccent: '#ffa700',
		secondaryAccentLight: 'rgba(255, 167, 0, 0.2)',
		borderAnimationPink: '#e96652',
		borderAnimationPeach: '#553833',
		background: '#242526',
		fontColor: '#ffffffd4',
		inactive: '#727272',
		active: '#e3e3e3',
		codeBackground: 'rgba(242, 242, 242, 0.9)'
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
