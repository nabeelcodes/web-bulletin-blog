import Head from 'next/head';
import Link from 'next/link';
import TopPickCard from 'components/TopPickCard/TopPickCard';
import BlogCard from 'components/BlogCard/BlogCard';
import { Container } from 'styles/utilities';
import { supabase } from 'utils/supabaseClient';

export default function Home({ blogs }) {
	return (
		<>
			<Head>
				<title>Home - Web Bulletin</title>
			</Head>

			<Container
				width='79%'
				homePageMainContainer
			>
				<TopPickCard blogDetails={blogs[0]} />

				<h2>Other Articles</h2>

				<Container
					as='section'
					blogListContainer
				>
					{blogs.length > 0 &&
						blogs.slice(1, 6).map((blog) => {
							const regexPatternToReplace = /(,+ )|\.|,|\' | \'|\'|\/| |\?/gm;
							const shallowUrl = blog?.attributes?.title
								.replaceAll(regexPatternToReplace, '-')
								.toLowerCase();

							return (
								<Link
									key={blog?.id}
									href={`/blogs/${blog?.id}-${shallowUrl}`}
								>
									<a>
										<BlogCard blogDetails={blog} />
									</a>
								</Link>
							);
						})}

					<Link href={`/blogs`}>
						<a style={{ cursor: 'unset' }}>
							<div className='linkToAllBlogsPage'>
								<button>
									see more
									<span className='chevronRight'>
										<svg
											width='15'
											height='15'
											viewBox='0 0 17 17'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M1.46762 8.11511H15.4676'
												stroke='black'
												strokeWidth='3'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M8.46762 1.11511L15.4676 8.11511L8.46762 15.1151'
												stroke='black'
												strokeWidth='3'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</span>
								</button>
							</div>
						</a>
					</Link>
				</Container>
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	/* fetching list of SORTED(by id) blog posts from Supabase postgres DB */
	let { data, error } = await supabase
		.from('blogs')
		.select('*')
		.order('id', { ascending: false });

	if (error) {
		console.table({ ERROR: `${error.message}` });
		return {
			notFound: true
		};
	}

	return {
		props: {
			blogs: data
		},
		revalidate: 15
	};
};
