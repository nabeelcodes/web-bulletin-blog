import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import LayoutContainer from 'components/LayoutContainer/LayoutContainer';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import theme from 'styles/theme';

export default function MyApp({ Component, pageProps }) {
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
				<NextNProgress
					options={{ showSpinner: false }}
					showOnShallow={false}
					stopDelayMs={200}
					color='#d4a3ff'
					height={5}
				/>

				<GlobalStyles />

				<AnimatePresence mode='wait'>
					<LayoutContainer key={Math.random()}>
						<Component {...pageProps} />
					</LayoutContainer>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}
