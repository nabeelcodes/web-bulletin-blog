// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fonts: {
    main: 'Inter, sans-serif'
  },

  // Colors for the app
  colors: {
    primaryText: '#121212',
    primaryAccent: '#f8071f',
    secondaryAccent: '#0f78bd',
    background: 'rgb(255,255,255)'
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: 'screen and (max-width: 451px)',
    sm: 'screen and (max-width: 641px)',
    md: 'screen and (max-width: 769px)',
    mdHover: 'screen and (max-width: 769px) and (hover: none) and (pointer: coarse)',
    ip: 'screen and (max-width: 821px)',
    ipHover: 'screen and (max-width: 821px) and (hover: none) and (pointer: coarse)',
    lg: 'screen and (max-width: 1025px)',
    lgHover: 'screen and (max-width: 1025px) and (hover: none) and (pointer: coarse)',
    xl: 'screen and (max-width: 1281px)',
    hover: 'screen and (hover: hover) and (pointer: fine)',
    hoverNone: 'screen and (hover: none) and (pointer: coarse)'
  }
};
