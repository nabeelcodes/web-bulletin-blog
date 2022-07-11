import Head from 'next/head';
import { Container } from '../styles/utilities';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home - Web Bulletin</title>
			</Head>

			<Container width='70%'>
				<h1 style={{ fontSize: 'clamp(3.75rem, 3.39rem + 1.79vw, 5rem)' }}>Web Bulletin Blog Using Next and Strapi</h1>
			</Container>
		</>
	);
}
