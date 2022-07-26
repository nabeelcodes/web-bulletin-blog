import { StyledBlogCard } from './BlogCard.styled';

export default function BlogCard({ blogDetails }) {
	const { title, description } = blogDetails?.attributes;

	return (
		<StyledBlogCard>
			<h3>{title}</h3>
			<p>{description}</p>
		</StyledBlogCard>
	);
}
