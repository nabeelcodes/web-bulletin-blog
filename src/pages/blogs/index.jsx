import Head from 'next/head';
import Link from 'next/link';
import BlogCard from '../../components/BlogCard/BlogCard';
import { Container } from '../../styles/utilities';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

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
						<Link key={blog?.id} href={`/blogs/${blog?.id}`}>
							<a>
								<BlogCard blogDetails={blog} />
							</a>
						</Link>
					))}
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(`${BASE_URL}/posts`);

	if (!res?.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res?.json();

	return {
		props: {
			blogs: dataFromApi?.data?.reverse(),
			metaData: dataFromApi?.meta
		},
		revalidate: 15
	};
};
