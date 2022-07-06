import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  /* custom font import(self hosted font) */
  @font-face {
    font-family: 'jetbrainsmono';
    src: url('/fonts/JetBrainsMono.woff2') format('woff2 supports variations'),
         url('/fonts/JetBrainsMono.woff2') format('woff2');
    font-weight: 100 950;
    font-display: optional;
    font-style: normal;
  }
  @font-face {
    font-family: 'tthovesvar';
    src: url('/fonts/TTHovesVariable.woff2') format('woff2 supports variations'),
         url('/fonts/TTHovesVariable.woff2') format('woff2');
    font-weight: 100 950;
    font-display: optional;
    font-style: normal;
  }
  
  /* SCROLL-BAR CSS : START */
  ::-webkit-scrollbar {
    width: 7px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #606060;
  }
  /* SCROLL-BAR CSS : END */

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (hover: none) and (pointer: coarse) {
      -webkit-tap-higDark-color: transparent; 
    }
  }
    
  body {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: unset;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  strong {
    font-weight: 650;
  }
`;
