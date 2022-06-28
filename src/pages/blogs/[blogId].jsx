import Image from 'next/image';
import MarkdownContent from '../../components/MarkdownContent/MarkdownContent';
import { Container } from '../../styles/utilities';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

Blog.getInitialProps = async (ctx) => {
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
	const { title, description, content } = blogPageData?.attributes;
	const { url, alternativeText, width, height } = blogPageData?.attributes?.images?.data?.attributes;

	return (
		<Container width='70%'>
			<br />
			<Image
				src={url}
				alt={alternativeText}
				width={width}
				height={height}
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
			/>
			<br />
			<br />
			<h2>{title}</h2>
			<p>{description}</p>
			<br />
			<MarkdownContent contentToParse={content} />
		</Container>
	);
}
