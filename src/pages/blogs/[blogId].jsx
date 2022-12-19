import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '../../styles/utilities';
import { StyledBlogDetailsPage } from '../../styles/BlogId.styled';
import MarkdownContent from '../../components/MarkdownContent/MarkdownContent';

import { supabase } from '../../utils/supabaseClient';

Blog.getInitialProps = async (ctx) => {
	/* extracting numeric value of blogId from ctx */
	const blogId = ctx.query.blogId.split('-')[0];

	/* Fetching data from supabase postgres DB */
	let { data, error } = await supabase.from('blogs').select('*').eq('id', `${blogId}`);

	if (error) {
		console.table({ ERROR: `${error.message}` });
		return {
			notFound: true
		};
	}

	return {
		blogPageData: data[0]
	};
};

export default function Blog({ blogPageData }) {
	console.log(blogPageData);
	const { title, description, content, published_on } = blogPageData;
	const { url, alternativeText } = blogPageData?.images?.banner_image;

	const router = useRouter();
	const currentUrl = `https://web-bulletin.vercel.app${router.asPath}`;

	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);

	return (
		<>
			<Head>
				<title>{title}</title>
				<base
					target='_blank'
					rel='noopener noreferrer'
				/>
				{/* SEO TAGS */}
				<meta
					name='title'
					content={title}
					key='title'
				/>
				<meta
					name='description'
					content={description}
					key='description'
				/>
				<meta
					property='og:title'
					content={title}
					key='ogTitle'
				/>
				<meta
					property='og:description'
					content={description}
					key='ogDescription'
				/>
				<meta
					property='og:image'
					content={url}
					key='ogImage'
				/>
				<meta
					property='og:url'
					content={currentUrl}
					key='ogUrl'
				/>
				<meta
					property='twitter:title'
					content={title}
					key='twitterTitle'
				/>
				<meta
					property='twitter:description'
					content={description}
					key='twitterDescription'
				/>
				<meta
					property='twitter:image'
					content={url}
					key='twitterImage'
				/>
				<meta
					property='twitter:url'
					content={currentUrl}
					key='twitterUrl'
				/>
			</Head>

			<StyledBlogDetailsPage>
				<div className='blogDetailsOuterWrapper'>
					<Container
						width='80%'
						style={{ gap: '2rem' }}
						flex
					>
						<div className='blogDetailsInnerWrapper'>
							<time className='publishingDate'>{blogPublishingDate}</time>

							<h1 className='blogTitle'>{title}</h1>

							<p className='blogDescription'>{description}</p>
						</div>

						<div className='bannerImageWrapper'>
							<Image
								src={url}
								alt={alternativeText}
								width={700}
								height={400}
								quality={100}
								objectFit='cover'
								placeholder='blur'
								blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
							/>
						</div>
					</Container>
				</div>

				<MarkdownContent contentToParse={content} />
			</StyledBlogDetailsPage>
		</>
	);
}
