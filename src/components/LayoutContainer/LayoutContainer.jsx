import Head from 'next/head';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledLayoutContainer } from './LayoutContainer.styled';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

export default function LayoutContainer({ children }) {
	const router = useRouter();
	NProgress.configure({ showSpinner: false });

	useEffect(() => {
		/* Exclusively added to manage NProgress bar */
		const handleStart = () => {
			NProgress.start();
		};

		const handleStop = () => {
			NProgress.done();
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router]);

	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
					integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
					crossOrigin='anonymous'
					referrerPolicy='no-referrer'
				/>
			</Head>

			<StyledLayoutContainer>
				<Header />
				<main>{children}</main>
				<Footer />
			</StyledLayoutContainer>
		</>
	);
}
