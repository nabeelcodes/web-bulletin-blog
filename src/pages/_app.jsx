import LayoutContainer from 'components/LayoutContainer/LayoutContainer';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyles } from 'styles/globalStyles';
import { lightTheme, darkTheme } from 'styles/theme';
import { useState } from 'react';
import Head from 'next/head';
import LightLogo from 'components/LightLogo/LightLogo';
import DarkLogo from 'src/DarkLogo/DarkLogo';

export default function MyApp({ Component, pageProps }) {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

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

			<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
				<GlobalStyles />

				<AnimatePresence mode='wait'>
					<LayoutContainer key={Math.random()}>
						<Component {...pageProps} />
					</LayoutContainer>
				</AnimatePresence>

				<button
					className='themeToggler'
					onClick={() => setIsDarkTheme((prevState) => !prevState)}
				>
					{isDarkTheme ? <LightLogo /> : <DarkLogo />}
				</button>
			</ThemeProvider>
		</>
	);
}
