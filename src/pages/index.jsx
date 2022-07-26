import Head from 'next/head';
import Link from 'next/link';
import TopPickCard from '../components/TopPickCard/TopPickCard';
import BlogCard from '../components/BlogCard/BlogCard';
import { Container } from '../styles/utilities';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

export default function Home({ blogs }) {
	return (
		<>
			<Head>
				<title>Home - Web Bulletin</title>
			</Head>

			<Container width='75%' style={{ marginTop: '1.8rem', marginBottom: '1.8rem' }}>
				<TopPickCard blogDetails={blogs[4]} />

				<Container as='section' blogListContainer>
					{blogs.length > 0 &&
						blogs.slice(1).map((blog) => {
							return (
								<Link key={blog?.id} href={`/blogs/${blog?.id}`}>
									<a>
										<BlogCard blogDetails={blog} />
									</a>
								</Link>
							);
						})}
					{blogs.length > 0 &&
						blogs.slice(1).map((blog) => {
							return (
								<Link key={blog?.id} href={`/blogs/${blog?.id}`}>
									<a>
										<BlogCard blogDetails={blog} />
									</a>
								</Link>
							);
						})}
				</Container>
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	/* fetching list of SORTED(by id) blog posts using REST API endpoints */
	const res = await fetch(`${BASE_URL}/posts?populate=*&sort=id:desc`);

	if (!res?.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res?.json();

	return {
		props: {
			blogs: dataFromApi?.data,
			metaData: dataFromApi?.meta
		},
		revalidate: 15
	};
};
