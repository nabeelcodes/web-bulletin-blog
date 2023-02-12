import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledLayoutContainer } from './LayoutContainer.styled';
import { motion } from 'framer-motion';

export default function LayoutContainer({ children }) {
	return (
		<StyledLayoutContainer
			as={motion.div}
			initial={{ opacity: 0, scale: 0.99 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.99 }}
			transition={{ duration: 0.5 }}
		>
			<Header />
			<main>{children}</main>
			<Footer />
		</StyledLayoutContainer>
	);
}
