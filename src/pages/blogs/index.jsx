import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../../styles/utilities';
import { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';

const cssStyles = {
	border: '2px solid #8b00ff',
	borderRadius: '8px',
	padding: '1rem 1.5rem',
	margin: '1rem 0',
	cursor: 'pointer'
};

export default function BlogList() {
	const { blogList } = useContext(BlogContext);

	return (
		<>
			<Head>
				<title>All Blogs</title>
				<meta property='og:title' content='Web Bulletin Blogs' />
			</Head>

			<Container width='70%'>
				{blogList &&
					blogList.length > 0 &&
					blogList.map((blog) => (
						<Link key={blog.id} href={`blogs/${blog.id}`}>
							<a>
								<div style={cssStyles}>
									<h3>{blog.attributes.title}</h3>
									<p>{blog.attributes.description}</p>
								</div>
							</a>
						</Link>
					))}
			</Container>
		</>
	);
}
