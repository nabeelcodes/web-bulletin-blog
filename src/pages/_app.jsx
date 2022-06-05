import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
