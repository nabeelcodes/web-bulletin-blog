import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '../../styles/utilities';
import Image from 'next/image';

const BASE_URL = `https://api-blog-strapi-next.herokuapp.com/api`;

Blog.getInitialProps = async (ctx) => {
	const { blogId } = ctx.query;
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
	const router = useRouter();
	const { title, description } = blogPageData?.attributes;
	const { url, alternativeText, width, height } = blogPageData?.attributes?.images?.data?.attributes;

	useEffect(() => {
		/* This useEffect is used to mask the url of this page from `/blogs/[blogId]` to `/blogs/${title}` */
		const regexPatternToReplace = / |(,+ )|\.|,|\?/gm;
		const shallowUrl = title.replaceAll(regexPatternToReplace, '-').toLowerCase();
		router.push(`/blogs/${shallowUrl}`, undefined, { shallow: true });
	}, [title]);

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
		</Container>
	);
}
