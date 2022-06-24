import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../../styles/utilities';

const cssStyles = {
	border: '2px solid #8b00ff',
	borderRadius: '8px',
	padding: '1rem 1.5rem',
	margin: '1rem 0',
	cursor: 'pointer'
};

export default function BlogList({ blogs }) {
	return (
		<>
			<Head>
				<title>All Blogs</title>
				<meta property='og:title' content='Web Bulletin Blogs' />
			</Head>

			<Container width='70%'>
				{blogs.length > 0 &&
					blogs.map((blog) => (
						<Link key={blog.id} href={`blogs/${blog.id}`}>
							<a>
								<div style={cssStyles}>
									<h3>{blog.attributes.title}</h3>
									<p>{blog.attributes.description}</p>
								</div>
							</a>
						</Link>
					))}
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`https://api-blog-strapi-next.herokuapp.com/api/posts?populate=*`);

	if (!res.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res.json();

	return {
		props: {
			blogs: dataFromApi.data.reverse(),
			metaData: dataFromApi.meta
		}
	};
};
