import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Container } from '../styles/utilities';
import TestComponent from '../components/TestComponent';

<<<<<<< HEAD
export default function Home({ dataFromApi, notFound }) {
	const { updateBlogList } = useContext(BlogContext);

	useEffect(() => {
		if (!notFound) {
			updateBlogList(dataFromApi);
		}
	}, [dataFromApi, updateBlogList, notFound]);

=======
export default function Home() {
>>>>>>> 58a8246153dd50c4a0620915589b60919aaa9117
	return (
		<>
			<Head>
				<title>Web Bulletin</title>
<<<<<<< HEAD
				<meta property='og:title' content='Web Bulletin'></meta>
=======
				<meta property='og:title' content='Web Bulletin' />
>>>>>>> 58a8246153dd50c4a0620915589b60919aaa9117
			</Head>

			<Container width='70%'>
				<h1>Web Bulletin Blog Using Next and Strapi</h1>
<<<<<<< HEAD

				<a href='https://www.google.com' target='_blank' rel='noreferrer'>
					this is a link to google
				</a>

				<TestComponent />
=======
>>>>>>> 58a8246153dd50c4a0620915589b60919aaa9117
			</Container>
		</>
	);
}

export const getStaticProps = async (ctx) => {
	const BASE_URL = `https://jsonplaceholder.typicode.com`;
	const responseFromApi = await fetch(`${BASE_URL}/posts?_limit=5`);
	const data = await responseFromApi.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			dataFromApi: data,
			notFound: false
		}
	};
};
