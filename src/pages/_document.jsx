import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	/* Initial STYLE-SHEET REHYDRATION USING nextJS-getInitialProps */
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					{/* Preload custom hosted fonts from /public folder to reduce FCP time */}
					<link rel='preload' href='/fonts/TT Hoves Variable.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
					<link rel='icon' href='/favicon.ico' />
					<meta name='description' content='A simple and fast web blog built with NextJS and Strapi CMS. ' />
					{/* <meta property="og:image" content="https://i.imgur.com/Jtl3tJG.png" /> */}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
