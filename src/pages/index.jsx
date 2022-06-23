import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Container } from '../styles/utilities';

export default function Home({ blogList, dataNotFound }) {
	const { updateBlogList } = useContext(BlogContext);

	useEffect(() => {
		if (!dataNotFound) {
			updateBlogList(blogList);
		}
	}, [updateBlogList, blogList, dataNotFound]);

	return (
		<>
			<Head>
				<title>Web Bulletin</title>
				<meta property='og:title' content='Web Bulletin' />
			</Head>

			<Container width='70%'>
				<h1>Web Bulletin Blog Using Next and Strapi</h1>
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const responseFromApi = await fetch(`https://api-blog-strapi-next.herokuapp.com/api/posts?populate=*`);

	if (!responseFromApi.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await responseFromApi.json();

	return {
		props: {
			blogList: dataFromApi.data,
			dataNotFound: false
		}
	};
};
