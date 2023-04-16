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
							const shallowUrl = blog?.title
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
											viewBox='0 0 23 23'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g id='Arrow / Arrow_Right_LG'>
												<path
													id='Vector'
													d='M21 12L16 7M21 12L16 17M21 12H3'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</g>
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
		.select('id,title,description,published_on,images')
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
