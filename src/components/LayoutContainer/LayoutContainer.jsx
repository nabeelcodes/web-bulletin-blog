import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledLayoutContainer } from './LayoutContainer.styled';
import NextNProgress from 'nextjs-progressbar';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

export default function LayoutContainer({ children }) {
	const appTheme = useTheme();

	return (
		<>
			<NextNProgress
				options={{ showSpinner: false }}
				showOnShallow={false}
				stopDelayMs={200}
				color={appTheme.colors.secondaryAccent}
				height={5}
			/>

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
		</>
	);
}
