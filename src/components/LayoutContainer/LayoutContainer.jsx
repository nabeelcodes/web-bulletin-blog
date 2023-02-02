import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledLayoutContainer } from './LayoutContainer.styled';

export default function LayoutContainer({ children }) {
	return (
		<StyledLayoutContainer>
			<Header />
			<main>{children}</main>
			<Footer />
		</StyledLayoutContainer>
	);
}
