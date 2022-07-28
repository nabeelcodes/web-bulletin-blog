import { StyledBlogCard } from './BlogCard.styled';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function BlogCard({ blogDetails }) {
	const { title, description, published_on } = blogDetails?.attributes;
	const blogPublishingDate = new Date(published_on).toString().slice(0, 15);
	const router = useRouter();
	const [onAllBlogsPage, setOnAllBlogsPage] = useState(false);

	useEffect(() => {
		router.asPath === '/blogs' ? setOnAllBlogsPage(true) : setOnAllBlogsPage(false);
	}, [router.asPath, onAllBlogsPage]);

	return (
		<StyledBlogCard allBlogsList={onAllBlogsPage ? true : false}>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			{onAllBlogsPage && <time className='publishingDate'>{blogPublishingDate}</time>}
		</StyledBlogCard>
	);
}
