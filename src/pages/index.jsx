import Head from 'next/head';
import { Container } from '../styles/utilities';

export default function Home() {
	return (
		<>
			<Head>
				<title>Web Bulletin</title>
				<meta property='og:title' content='Web Bulletin'></meta>
			</Head>

			<Container width='70%'>
				<h1>Web Bulletin Blog Using Next and Strapi</h1>
			</Container>
		</>
	);
}
