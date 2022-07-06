import Image from 'next/image';
import MarkdownContent from '../../components/MarkdownContent/MarkdownContent';
import { Container, StyledBlogDetailsPage } from '../../styles/utilities';

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

	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);

	return (
		<StyledBlogDetailsPage>
			<div className='blogDetailsOuterWrapper'>
				<Container width='80%' flex>
					<div className='blogDetailsInnerWrapper'>
						<time className='publishingDate'>{blogPublishingDate}</time>

						<h1 className='blogTitle'>{title}</h1>

						<p className='blogDescription'>{description}</p>
					</div>

					<Image
						src={url}
						alt={alternativeText}
						width={580}
						height={300}
						placeholder='blur'
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
					/>
				</Container>
			</div>

			<MarkdownContent contentToParse={content} />
		</StyledBlogDetailsPage>
	);
}
