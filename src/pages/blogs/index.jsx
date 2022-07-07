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

			<Container width='70%' as='section' blogListContainer>
				{blogs.length > 0 &&
					blogs.map((blog) => {
						const regexPatternToReplace = / |(,+ )|\.|,|\?/gm;
						const shallowUrl = blog?.attributes?.title.replaceAll(regexPatternToReplace, '-').toLowerCase();

						return (
							<Link key={blog?.id} href={`/blogs/${blog?.id}-${shallowUrl}`}>
								<a>
									<BlogCard blogDetails={blog} />
								</a>
							</Link>
						);
					})}
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	/* fetching list of SORTED(by id) blog posts using REST API endpoints */
	const res = await fetch(`${BASE_URL}/posts?sort=id:desc`);

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
