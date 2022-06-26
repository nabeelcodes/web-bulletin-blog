import { Container } from '../../styles/utilities';
import Image from 'next/image';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

export default function Blog({ blogPageData }) {
	const { title, description } = blogPageData.attributes;
	const { url, alternativeText, width, height } = blogPageData.attributes.images.data.attributes;

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
			<h2>{title}</h2>
			<p>{description}</p>
		</Container>
	);
}

export const getStaticPaths = async () => {
	const res = await fetch(`${BASE_URL}/posts`);
	const dataFromApi = await res.json();

	const paths = dataFromApi.data.map((blogList) => {
		return {
			params: {
				blogId: `${blogList.id}`
			}
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async (ctx) => {
	const { blogId } = ctx.params;
	const res = await fetch(`${BASE_URL}/posts/${blogId}?populate=*`);

	if (!res.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res.json();

	return {
		props: {
			blogPageData: dataFromApi.data
		},
		revalidate: 15
	};
};
