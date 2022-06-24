import { Container } from '../../styles/utilities';
import Image from 'next/image';

export default function Blog({ blogPageData }) {
	return (
		<Container width='70%'>
			<br />
			<Image
				src={blogPageData.attributes.images.data.attributes.url}
				alt={blogPageData.attributes.images.data.attributes.alternativeText}
				width={blogPageData.attributes.images.data.attributes.width}
				height={blogPageData.attributes.images.data.attributes.height}
				placeholder='blur'
				blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsKCxYCgAEogH4UW6p2wAAAABJRU5ErkJggg=='
			/>
			<br />
			<h2>{blogPageData.attributes.title}</h2>
			<p>{blogPageData.attributes.description}</p>
		</Container>
	);
}

export const getStaticProps = async (ctx) => {
	const { params } = ctx;
	const res = await fetch(`https://api-blog-strapi-next.herokuapp.com/api/posts/${params.blogId}?populate=*`);

	if (!res.ok) {
		return {
			notFound: true
		};
	}

	const dataFromApi = await res.json();

	return {
		props: {
			blogPageData: dataFromApi.data
		}
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://api-blog-strapi-next.herokuapp.com/api/posts`);

	if (!res.ok) {
		return {
			notFound: true
		};
	}

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
