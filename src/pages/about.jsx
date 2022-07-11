import Head from 'next/head';
import { Container } from '../styles/utilities';
import { useRouter } from 'next/router';

export default function About() {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>About - Web Bulletin</title>
			</Head>

			<Container width='70%'>
				<h1>About Page</h1>

				<a href='https://www.google.com' target='_blank' rel='noreferrer'>
					this is a link to google
				</a>

				<br />
				<br />

				<button
					onClick={(event) => {
						event.preventDefault();
						router.push('/404');
					}}
				>
					404 - page
				</button>
			</Container>
		</>
	);
}
