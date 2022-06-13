import LayoutContainer from '../components/LayoutContainer/LayoutContainer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import theme from '../styles/theme';
import BlogContextProvider from '../context/BlogContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <BlogContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </ThemeProvider>
    </BlogContextProvider>
  );
}
