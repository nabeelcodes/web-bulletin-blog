/* eslint-disable import/no-anonymous-default-export */
export default {
  fonts: {
    main: 'Inter, sans-serif'
  },

  // Colors for the app
  colors: {
    primaryAccent: '#FEA93C',
    secondaryAccent: '#8B00FF',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#2E2E2E',
    backgroundDarker: '#242526',
    inactive: '#727272',
    active: '#000000',
    light: '#FFFFFF',
    dark: '#000000'
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: 'only screen and (max-width: 451px)',
    sm: 'only screen and (max-width: 641px)',
    md: 'only screen and (max-width: 769px)',
    ipad: 'only screen and (max-width: 821px)',
    lg: 'only screen and (max-width: 1025px)',
    xl: 'only screen and (max-width: 1281px)',

    hover: 'only screen and (hover: hover) and (pointer: fine)',
    hoverNone: 'only screen and (hover: none) and (pointer: coarse)',
    mdHover: 'only screen and (max-width: 769px) and (hover: none) and (pointer: coarse)',
    ipadHover: 'only screen and (max-width: 821px) and (hover: none) and (pointer: coarse)',
    lgHover: 'only screen and (max-width: 1025px) and (hover: none) and (pointer: coarse)'
  }
};
