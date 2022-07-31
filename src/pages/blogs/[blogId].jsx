import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import MarkdownContent from '../../components/MarkdownContent/MarkdownContent';
import { Container } from '../../styles/utilities';
import { StyledBlogDetailsPage } from '../../styles/BlogId.styled';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

Blog.getInitialProps = async (ctx) => {
	/* extracting numeric value of blogId from ctx */
	const blogId = ctx.query.blogId.split('-')[0];
	const res = await fetch(`${BASE_URL}/posts/${blogId}?populate=*`);

	if (!res?.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res?.json();

	return {
		blogPageData: dataFromApi?.data
	};
};

export default function Blog({ blogPageData }) {
	const { title, description, content, published_on } = blogPageData?.attributes;
	const { url, alternativeText, width, height } = blogPageData?.attributes?.images?.data?.attributes;

	const router = useRouter();
	const currentUrl = `https://web-bulletin.vercel.app${router.asPath}`;

	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);

	return (
		<>
			<Head>
				<title>{title}</title>
				<base target='_blank' rel='noopener noreferrer' />
				{/* SEO TAGS */}
				<meta name='title' content={title} key='title' />
				<meta name='description' content={description} key='description' />
				<meta property='og:title' content={title} key='ogTitle' />
				<meta property='og:description' content={description} key='ogDescription' />
				<meta property='og:image' content={url} key='ogImage' />
				<meta property='og:url' content={currentUrl} key='ogUrl' />
				<meta property='twitter:title' content={title} key='twitterTitle' />
				<meta property='twitter:description' content={description} key='twitterDescription' />
				<meta property='twitter:image' content={url} key='twitterImage' />
				<meta property='twitter:url' content={currentUrl} key='twitterUrl' />
			</Head>

			<StyledBlogDetailsPage>
				<div className='blogDetailsOuterWrapper'>
					<Container width='80%' style={{ gap: '2rem' }} flex>
						<div className='blogDetailsInnerWrapper'>
							<time className='publishingDate'>{blogPublishingDate}</time>

							<h1 className='blogTitle'>{title}</h1>

							<p className='blogDescription'>{description}</p>
						</div>

						<div className='bannerImageWrapper'>
							<Image
								src={url}
								alt={alternativeText}
								width={width}
								height={height}
								quality={100}
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
