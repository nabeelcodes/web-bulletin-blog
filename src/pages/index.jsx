import Head from 'next/head';
import { Container } from '../styles/utilities';

const cssStyles = {
	border: '2px solid #8b00ff',
	borderRadius: '8px',
	padding: '1rem 1.5rem',
	marginBottom: '0.5rem'
};

export default function Home({ blogs, status, error }) {
	console.log(status);
	console.log(error);

	return (
		<>
			<Head>
				<title>Web Bulletin</title>
				<meta property='og:title' content='Web Bulletin'></meta>
			</Head>

			<Container width='70%'>
				<h1>Web Bulletin Blog Using Next and Strapi</h1>

				<br />

				{blogs.length > 0 &&
					blogs.map((blog) => (
						<div key={blog.id} style={cssStyles}>
							<h3>{blog.attributes.title}</h3>
							<p>{blog.attributes.description}</p>
						</div>
					))}
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`http://localhost:1337/api/posts?populate=*`);
	console.log(res.status);

	if (res.status !== 200) {
		return {
			props: {
				status: res.status,
				error: `something went wrong`
			}
		};
	}

	const dataFromApi = await res.json();

	return {
		props: {
			blogs: dataFromApi.data,
			metaData: dataFromApi.meta
		}
	};
};
