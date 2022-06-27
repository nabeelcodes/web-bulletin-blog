import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalStyles';
import LayoutContainer from '../components/LayoutContainer/LayoutContainer';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<LayoutContainer>
				<Component {...pageProps} />
			</LayoutContainer>
		</ThemeProvider>
	);
}
