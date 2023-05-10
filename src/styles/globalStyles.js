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
    scroll-behavior: smooth;
    @media ${({ theme }) => theme.breakpoints.noHover} {
      -webkit-tap-highlight-color: transparent;
    }
  }
    
  body {
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor};
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

  .themeToggler {
    display: grid;
    place-content: center;
		cursor: pointer;
		position: fixed;
		left: 0;
		bottom: 25%;
		padding: 0.5rem 0.8rem;
		background-color: ${({ theme }) => theme.colors.secondaryAccent};
		border: none;
		border-radius: 0 50px 50px 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

		path {
			fill: ${({ theme }) => theme.colors.secondaryAccent};
			fill: white;
		}
	}
`;
