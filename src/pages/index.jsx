import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Container } from '../styles/utilities';
import TestComponent from '../components/TestComponent';

export default function Home({ dataFromApi, notFound }) {
	const { updateBlogList } = useContext(BlogContext);

	useEffect(() => {
		if (!notFound) {
			updateBlogList(dataFromApi);
		}
	}, [dataFromApi, updateBlogList, notFound]);

	return (
		<>
			<Head>
				<title>Web Bulletin</title>
				<meta property='og:title' content='Web Bulletin'></meta>
			</Head>

			<Container width='70%'>
				<h1>Web Bulletin Blog Using Next and Strapi</h1>

				<a href='https://www.google.com' target='_blank' rel='noreferrer'>
					this is a link to google
				</a>

				<TestComponent />
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
