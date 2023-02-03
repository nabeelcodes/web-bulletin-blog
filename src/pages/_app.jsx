import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import { useEffect } from 'react';
import LayoutContainer from 'components/LayoutContainer/LayoutContainer';
import theme from 'styles/theme';
import Head from 'next/head';
import NProgress from 'nprogress';

export default function MyApp({ Component, pageProps, router }) {
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
				{/* SEO TAGS */}
				<meta
					name='robots'
					content='index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate'
				/>
				<meta
					name='googlebot'
					content='index,follow,nosnippet,max-snippet:-1,max-image-preview:none,noarchive,noimageindex,max-video-preview:-1,notranslate'
				/>
				<meta
					name='title'
					content='Web Bulletin'
					key='title'
				/>
				<meta
					name='description'
					content='A simple and fast web blog built with NextJS on the frontend and Supabase(BaaS) for the backend.'
					key='description'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<meta
					property='og:title'
					content='Web Bulletin'
					key='ogTitle'
				/>
				<meta
					property='og:description'
					content='A simple and fast web blog built with NextJS on the frontend and Supabase(BaaS) for the backend.'
					key='ogDescription'
				/>
				<meta
					property='og:image'
					content='https://res.cloudinary.com/do884lked/image/upload/v1671211640/OG_image_for_Homepage_pyjk69.png'
					key='ogImage'
				/>
				<meta
					property='og:url'
					content='https://web-bulletin.vercel.app/'
					key='ogUrl'
				/>
				<meta
					property='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:creator'
					content='@NABEEL_ASIF'
				/>
				<meta
					property='twitter:title'
					content='Web Bulletin'
					key='twitterTitle'
				/>
				<meta
					property='twitter:description'
					content='A simple and fast web blog built with NextJS on the frontend and Supabase(BaaS) for the backend.'
					key='twitterDescription'
				/>
				<meta
					property='twitter:image'
					content='https://res.cloudinary.com/do884lked/image/upload/v1671211640/OG_image_for_Homepage_pyjk69.png'
					key='twitterImage'
				/>
				<meta
					property='twitter:url'
					content='https://web-bulletin.vercel.app/'
					key='twitterUrl'
				/>
			</Head>

			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<LayoutContainer>
					<Component {...pageProps} />
				</LayoutContainer>
			</ThemeProvider>
		</>
	);
}
