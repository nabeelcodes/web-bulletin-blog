import { Container } from '../../styles/utilities';

export default function Blog({ blogPageData }) {
	return (
		<Container width='70%'>
			<h1>Blog Details Page</h1>
			<br />
			<h2>{blogPageData.attributes.title}</h2>
		</Container>
	);
}

export const getStaticProps = async (ctx) => {
	const { params } = ctx;
	const res = await fetch(`https://api-blog-strapi-next.herokuapp.com/ap/posts/${params.blogId}?populate=*`);

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
